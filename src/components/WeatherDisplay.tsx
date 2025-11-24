import HourlySection from "./hourlySection/HourlySection";
import OverallDisplay from "./overallDisplay/OverallDisplay";

export default function WeatherDisplay() {
  return (
    <section className="grid lg:grid-cols-3 gap-4 w-full">
      <OverallDisplay />
      <HourlySection />
    </section>
  );
}
