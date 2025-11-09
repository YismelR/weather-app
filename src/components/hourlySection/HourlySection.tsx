import DayDropdown from "./DayDropdown";
import HourlyCard from "./HourlyCard";

export default function HourlySection() {
  return (
    <section className="bg-card-bg p-4 rounded-xl ">
      <div className="flex justify-between place-items-center">
        <p className="font-semibold">Hourly forecast</p>
        <DayDropdown />
        <HourlyCard />
      </div>
    </section>
  );
}
