import Navigation from "./Navigation";
import WeatherDisplay from "./WeatherDisplay";

export default function Body() {
  return (
    <section className="flex flex-col place-items-center gap-10">
      <h1 className="text-4xl">How's the sky looking today?</h1>
      <Navigation />
      <WeatherDisplay />
    </section>
  );
}
