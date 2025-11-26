import { dailyForecast } from "@/data/dailyForecast";

export default function DailyForecast() {
  return (
    <section className="flex flex-col gap-2">
      <p>Daily Forecast</p>
      <div className="flex flex-wrap md:grid gap-3 md:grid-cols-7 md:gap-2">
        {dailyForecast.map((daily, idx) => (
          <div
            key={idx}
            className="w-[84px] md:w-auto grid gap-4 md:gap-2 justify-items-center bg-card-bg  rounded-lg p-2 border border-Neutral-600"
          >
            <p>{daily.date}</p>
            <img src={daily.image.url} className="size-10" />
            <div className="flex justify-between text-xs w-full">
              <p>{daily.lowTemp}</p>
              <p>{daily.highTemp}°</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
