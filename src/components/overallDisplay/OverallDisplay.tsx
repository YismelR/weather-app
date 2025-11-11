import CurrentWeather from "./CurrentWeather";
import WeatherDescription from "./WeatherDescription";

export default function OverallDisplay() {
  return (
    <div className="flex flex-col col-span-2 gap-6">
      <CurrentWeather />
      <WeatherDescription />
    </div>
  );
}
