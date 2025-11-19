import Navigation from "./Navigation";
import WeatherDisplay from "./WeatherDisplay";

export default function Body() {
  return (
    <section className="flex flex-col place-items-center lg:gap-10">
      <h1 className="lg:text-4xl">How's the sky looking today?</h1>
      <Navigation />
      {/* <WeatherDisplay /> */}
    </section>
  );
}
