import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Cloud, Sun, CloudRain, Wind, Thermometer } from "lucide-react";

const WeatherHUD = () => {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState({ temp: "--", condition: "Loading", code: 0 });

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => setTime(new Date()), 1000);

    // Fetch weather data (Jakarta)
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=-6.2088&longitude=106.8456&current_weather=true"
        );
        const data = await response.json();
        const code = data.current_weather.weathercode;
        
        // Map WMO weather codes to conditions
        let condition = "Clear";
        if (code >= 1 && code <= 3) condition = "Cloudy";
        if (code >= 45 && code <= 48) condition = "Foggy";
        if (code >= 51 && code <= 67) condition = "Rainy";
        if (code >= 71 && code <= 77) condition = "Snowy";
        if (code >= 80 && code <= 99) condition = "Stormy";

        setWeather({
          temp: Math.round(data.current_weather.temperature),
          condition: condition,
          code: code
        });
      } catch (error) {
        console.error("Weather fetch failed:", error);
      }
    };

    fetchWeather();
    const weatherTimer = setInterval(fetchWeather, 600000); // Update every 10 mins

    return () => {
      clearInterval(timer);
      clearInterval(weatherTimer);
    };
  }, []);

  const getWeatherIcon = () => {
    if (weather.condition === "Clear") return <Sun className="w-3 h-3 text-yellow-400" />;
    if (weather.condition === "Rainy" || weather.condition === "Stormy") return <CloudRain className="w-3 h-3 text-blue-400" />;
    return <Cloud className="w-3 h-3 text-primary" />;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-24 right-6 z-[40] hidden xl:flex flex-col gap-2 items-end pointer-events-none select-none"
    >
      {/* Time HUD */}
      <div className="flex flex-col items-end">
        <div className="text-[10px] font-black text-primary/40 tracking-[0.2em] uppercase mb-1 flex items-center gap-2">
          <Clock className="w-3 h-3" /> System_Time
        </div>
        <div className="text-2xl font-black text-white tracking-tighter tabular-nums">
          {time.toLocaleTimeString([], { hour12: false })}
        </div>
      </div>

      {/* Weather HUD */}
      <div className="flex flex-col items-end mt-4">
        <div className="text-[10px] font-black text-primary/40 tracking-[0.2em] uppercase mb-1 flex items-center gap-2">
          <Wind className="w-3 h-3" /> Environment_Status
        </div>
        <div className="glass px-4 py-2 rounded-xl border-primary/20 flex items-center gap-4">
          <div className="flex items-center gap-2">
            {getWeatherIcon()}
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">{weather.condition}</span>
          </div>
          <div className="w-[1px] h-4 bg-white/10" />
          <div className="flex items-center gap-1 text-primary">
            <Thermometer className="w-3 h-3" />
            <span className="text-sm font-black">{weather.temp}°C</span>
          </div>
        </div>
        <div className="text-[8px] font-bold text-white/20 mt-1 uppercase">Location: JKT_ID // Lat: -6.21</div>
      </div>
    </motion.div>
  );
};

export default WeatherHUD;
