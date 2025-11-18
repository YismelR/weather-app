import { dailyForecast } from "@/data/dailyForecast";

export default function DailyForecast() {
  return (
    <section className="flex flex-col lg:gap-2">
      <p>Daily Forecast</p>
      <div className="grid lg:grid-cols-7 lg:gap-2">
        {dailyForecast.map((daily, idx) => (
          <div
            key={idx}
            className="grid lg:gap-2 justify-items-center bg-card-bg  rounded-lg lg:p-2 border border-Neutral-600"
          >
            <p>{daily.date}</p>
            <img src={daily.image.url} className="lg:size-10" />
            <div className="flex justify-between text-xs lg:w-full">
              <p>{daily.lowTemp}</p>
              <p>{daily.highTemp}°</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
