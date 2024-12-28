import { FC } from "react";
import { useController } from "react-hook-form";
import { ITextInput } from "../utils/types";
import { Label } from "../Field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/form/ui/popover";
import { FormControl } from "@/shared/form/ui/form";
import { Button } from "@/shared/form/ui/button";
import { cn } from "@/shared/lib/utils";
import { Calendar } from "@/shared/form/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale/ru";

const MyDatePicker: FC<ITextInput> = ({ ...props }) => {
  const { name } = props;

  const { field } = useController({
    name,
  });

  return (
    <div>
      <Label {...props} />
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant={"outline"}
              className={cn(
                "w-full pl-3 text-left font-normal",
                !field.value && "text-muted-foreground",
                // "hover:bg-transparent",
              )}
            >
              {field.value ? (
                format(field.value, "PPP")
              ) : (
                <span>Pick a date</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={field.onChange}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            initialFocus
            locale={ru}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MyDatePicker;
