import weatherBG from "../assets/images/bg-today-large.svg";
import timeZone from "../assets/images/icon-sunny.webp";
export default function CurrentWeather() {
  return (
    <section className="grid">
      <div
        className="flex justify-between w-fit h-full bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${weatherBG})` }}
      >
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold">Berlin, Germany</h3>
          <p className="text-Neutral-300">Tuesday, Aug 5, 2025</p>
        </div>
        <div className="flex justify-center place-items-center">
          <img src={timeZone} className="size-16" />
          <h2 className="text-7xl font-bold">68°</h2>
        </div>
      </div>
      <div></div>
      <div></div>
    </section>
  );
}
