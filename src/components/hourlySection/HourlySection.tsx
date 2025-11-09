import DayDropdown from "./DayDropdown";
import HourlyCards from "./HourlyCards";

export default function HourlySection() {
  return (
    <section className="flex flex-col gap-4 bg-card-bg p-4 rounded-xl max-h-[530px] ">
      <div className="flex justify-between place-items-center">
        <p className="font-semibold">Hourly forecast</p>
        <DayDropdown />
      </div>
      <HourlyCards />
    </section>
  );
}
