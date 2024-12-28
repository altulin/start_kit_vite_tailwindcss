import { useController } from "react-hook-form";
import { ITextInput } from "../../utils/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/form/ui/select";
import { FormControl } from "@/shared/form/ui/form";
import { FC } from "react";
import { Label } from "../../Field";

const MySelect: FC<ITextInput> = ({ ...props }) => {
  const { name, options, placeholder } = props;
  const { field } = useController({
    name,
  });

  return (
    <div>
      <Label {...props} />
      <Select
        onValueChange={field.onChange}
        // defaultValue={options && options[0].value.toString()}
        value={field.value.toString()}
        name={name}
      >
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {options?.map((option, i) => (
            <SelectItem value={option.value.toString()} key={i}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default MySelect;
