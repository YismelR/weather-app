import Navigation from "./Navigation";
import WeatherDisplay from "./WeatherDisplay";

export default function Body() {
  return (
    <section className="flex flex-col place-items-center gap-6 md:gap-10">
      <h1 className="text-4xl text-center tracking-wide px-10 min-[375px]:px-14 min-[425px]:px-20 md:px-0">
        How's the sky looking today?
      </h1>
      <Navigation />
      <WeatherDisplay />
    </section>
  );
}
