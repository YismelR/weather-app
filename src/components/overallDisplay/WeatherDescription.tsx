import { weatherDescription } from "@/data/weatherDescriptions";
export default function WeatherDescription() {
  return (
    <section className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-4">
      {weatherDescription.map((description, idx) => (
        <div
          key={idx}
          className="flex flex-col p-3 gap-3 bg-card-bg rounded-lg lg:p-0 lg:px-4 lg:py-2 lg:gap-4 border border-Neutral-600"
        >
          <p className="text-base md:text-sm lg:text-base text-Neutral-300">
            {description.title}
          </p>
          <p className="text-2xl text-Neutral-200">{description.num}</p>
        </div>
      ))}
    </section>
  );
}
