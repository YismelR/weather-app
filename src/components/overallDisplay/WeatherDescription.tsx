import { weatherDescription } from "@/data/weatherDescriptions";
export default function WeatherDescription() {
  return (
    <section className="grid grid-cols-2 gap-3 lg:grid-cols-4 md:gap-4">
      {weatherDescription.map((description, idx) => (
        <div
          key={idx}
          className="flex flex-col p-3 gap-3 bg-card-bg rounded-lg md:p-0 md:px-4 md:py-2 md:gap-4 border border-Neutral-600"
        >
          <p className="text-base text-Neutral-300">{description.title}</p>
          <p className="text-2xl text-Neutral-200">{description.num}</p>
        </div>
      ))}
    </section>
  );
}
