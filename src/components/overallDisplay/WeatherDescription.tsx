import { weatherDescription } from "@/data/weatherDescriptions";
export default function WeatherDescription() {
  return (
    <section className="grid grid-cols-4 gap-4">
      {weatherDescription.map((description, idx) => (
        <div
          key={idx}
          className="flex flex-col bg-card-bg rounded-lg px-4 py-2 gap-4 border border-Neutral-600"
        >
          <p className="text-base text-Neutral-300">{description.title}</p>
          <p className="text-2xl text-Neutral-200">{description.num}</p>
        </div>
      ))}
    </section>
  );
}
