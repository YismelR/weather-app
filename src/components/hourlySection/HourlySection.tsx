import DayDropdown from "./DayDropdown";
import HourlyCards from "./HourlyCards";

export default function HourlySection() {
  return (
    <section className="flex flex-col lg:gap-4 bg-card-bg lg:p-4 rounded-xl lg:max-h-[530px] ">
      <div className="flex justify-between place-items-center">
        <p className="font-semibold">Hourly forecast</p>
        <DayDropdown />
      </div>
      <HourlyCards />
    </section>
  );
}
