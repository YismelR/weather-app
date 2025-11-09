import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DayDropdown() {
  return (
    <Select>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Select Day" />
      </SelectTrigger>
      <SelectContent align="end">
        <SelectGroup>
          <SelectItem value="monday">Monday</SelectItem>
          <SelectItem value="tuesday">Tuesday</SelectItem>
          <SelectItem value="wednesday">Wednesday</SelectItem>
          <SelectItem value="thursday">Thursday</SelectItem>
          <SelectItem value="friday">Friday</SelectItem>
          <SelectItem value="saturday">Saturday</SelectItem>
          <SelectItem value="sunday">Sunday</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
