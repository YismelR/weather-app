import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import settingIcon from "../assets/images/icon-units.svg";
import dropdownIcon from "../assets/images/icon-dropdown.svg";
import { useState } from "react";

export default function UnitsSwitch() {
  const [showCelcius, setCelcius] = useState(true);
  const [showFarenheit, setFarenheit] = useState(false);
  const [showKm, setKm] = useState(false);
  const [showMph, setMph] = useState(false);
  const [showMili, setMili] = useState(false);
  const [showInches, setInches] = useState(false);

  function changeColor(colorBg: any) {
    let color = "";
    if (colorBg) {
      color = "bg-Neutral-600";
    }
    return color;
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" flex lg:gap-2 lg:px-3 lg:py-2 bg-card-bg rounded-lg focus:outline-0">
        <img src={settingIcon} />
        <p>Units</p>
        <img src={dropdownIcon} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-auto lg:p-2 bg-card-bg border-Neutral-600"
        align="end"
      >
        <DropdownMenuLabel>Switch to Imperial</DropdownMenuLabel>
        <DropdownMenuLabel className="text-Neutral-300 text-xs">
          Temperature
        </DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={showCelcius}
          onCheckedChange={setCelcius}
          className={changeColor(showCelcius)}
        >
          Celsius (°C)
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showFarenheit}
          onCheckedChange={setFarenheit}
          className={changeColor(showFarenheit)}
        >
          Fahrenheit (°F)
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator className="bg-Neutral-600" />
        <DropdownMenuLabel className="text-Neutral-300 text-xs">
          Wind Speed
        </DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={showKm}
          onCheckedChange={setKm}
          className={changeColor(showKm)}
        >
          Km/h
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showMph}
          onCheckedChange={setMph}
          className={changeColor(showMph)}
        >
          mph
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator className="bg-Neutral-600" />
        <DropdownMenuLabel className="text-Neutral-300 text-xs">
          Precipitation
        </DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={showMili}
          onCheckedChange={setMili}
          className={changeColor(showMili)}
        >
          Milimeters (mm)
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showInches}
          onCheckedChange={setInches}
          className={changeColor(showInches)}
        >
          Inches (in)
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
