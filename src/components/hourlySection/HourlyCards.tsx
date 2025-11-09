import cloudy from "../../assets/images/icon-partly-cloudy.webp";

import { ScrollArea } from "@/components/ui/scroll-area";

export default function HourlyCards() {
  return (
    <ScrollArea className="h-11/12 w-full  ">
      <div className="flex flex-col gap-4 overflow-hidden">
        <div className="flex place-items-center justify-between bg-Neutral-700 py-2 px-3 rounded-lg border border-Neutral-600">
          <div className="flex place-items-center">
            <img
              src={cloudy}
              className="size-8
            "
            />
            <p className="text-sm">3 PM</p>
          </div>
          <p className="text-sm">68°</p>
        </div>
      </div>
    </ScrollArea>
  );
}
