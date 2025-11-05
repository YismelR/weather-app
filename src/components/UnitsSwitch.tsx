import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import settingIcon from "../assets/images/icon-units.svg";
export default function UnitsSwitch() {
  return (
    <Select>
      <SelectTrigger className="w-auto bg-card-bg p-3">
        <img src={settingIcon} />
        <SelectValue placeholder="Units" />
      </SelectTrigger>
      <SelectContent className="relative">
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
