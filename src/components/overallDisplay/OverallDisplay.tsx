import CurrentWeather from "./CurrentWeather";
import DailyForecast from "./DailyForeCast";
import WeatherDescription from "./WeatherDescription";

export default function OverallDisplay() {
  return (
    <div className="flex flex-col gap-4 md:col-span-2 md:gap-6">
      <CurrentWeather />
      <WeatherDescription />
      <DailyForecast />
    </div>
  );
}
