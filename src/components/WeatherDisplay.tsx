import HourlySection from "./HourlySection";
import OverallDisplay from "./OverallDisplay";

export default function WeatherDisplay() {
  return (
    <section className="flex gap-2 w-full">
      <OverallDisplay />
      <HourlySection />
    </section>
  );
}
