import HourlySection from "./hourlySection/HourlySection";
import OverallDisplay from "./overallDisplay/OverallDisplay";

export default function WeatherDisplay() {
  return (
    <section className="grid md:grid-cols-3 gap-4 w-full">
      <OverallDisplay />
      <HourlySection />
    </section>
  );
}
