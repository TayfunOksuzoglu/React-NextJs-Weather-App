'use client';

import Spinner from '@/components/Spinner';
import Weather from '@/components/Weather';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
    });
    setCity('');
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  } else
    return (
      <main className="relative w-full h-screen">
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-10" />
        {/* Background Image */}
        <div className="" />
        <Image
          src="https://images.unsplash.com/photo-1553984840-ec965a23cddd?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          fill={true}
          alt="Half rainy, half open skies with warm sunset colors with a lightning on the rainy side."
          className="object-cover"
        />
        {/* Search */}
        <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
          <form
            onSubmit={fetchWeather}
            className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
          >
            <div className="w-full">
              <input
                className="bg-transparent border-none text-white focus:outline-none text-xl px-4 w-full"
                type="text"
                placeholder="Search city..."
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </div>
            <button onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </form>
        </div>

        {/* Weather */}

        {weather.main && <Weather data={weather} />}
      </main>
    );
}
