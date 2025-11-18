import CurrentWeather from "./CurrentWeather";
import DailyForecast from "./DailyForeCast";
import WeatherDescription from "./WeatherDescription";

export default function OverallDisplay() {
  return (
    <div className="flex flex-col lg:col-span-2 lg:gap-6">
      <CurrentWeather />
      <WeatherDescription />
      <DailyForecast/>
    </div>
  );
}
