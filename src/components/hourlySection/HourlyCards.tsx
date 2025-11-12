import { ScrollArea } from "@/components/ui/scroll-area";
import { hourlyCards } from "@/data/hourlyCards";

export default function HourlyCards() {
  return (
    <ScrollArea className="h-11/12 w-full  ">
      <div className="flex flex-col gap-4 overflow-hidden">
        {hourlyCards.map((hourly, idx) => (
          <div
            key={idx}
            className="flex place-items-center justify-between bg-Neutral-700 py-2 px-3 rounded-lg border border-Neutral-600"
          >
            <div className="flex place-items-center">
              <img
                src={hourly.image.url}
                className="size-8
              "
              />
              <p className="text-sm">{hourly.time} PM</p>
            </div>
            <p className="text-sm">{hourly.temperature}°</p>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
