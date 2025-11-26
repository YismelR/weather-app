import DayDropdown from "./DayDropdown";
import HourlyCards from "./HourlyCards";

export default function HourlySection() {
  return (
    <section className="flex flex-col mb-10 md:mb-0 p-3 gap-3 md:gap-4 bg-card-bg md:p-4 rounded-xl max-h-[495px] md:max-h-[530px] ">
      <div className="flex justify-between place-items-center">
        <p className="font-semibold">Hourly forecast</p>
        <DayDropdown />
      </div>
      <HourlyCards />
    </section>
  );
}
