import logo from "../assets/images/logo.svg";
import UnitsSwitch from "./UnitsSwitch";

export default function Header() {
  return (
    <header className="flex justify-between">
      <img src={logo} className="lg:size-40" />
      <UnitsSwitch />
    </header>
  );
}
