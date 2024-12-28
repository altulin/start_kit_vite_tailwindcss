import { FC } from "react";
import { ITextInput } from "../utils/types";
import { useController } from "react-hook-form";
import { FormControl, FormItem, FormLabel } from "@/shared/ui/form";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";
import { Label } from "../Field";

const RadioComponent: FC<ITextInput> = ({ radio_list, ...props }) => {
  const { field } = useController({
    name: props.name,
  });

  return (
    <>
      <Label {...props} />
      <FormControl>
        <RadioGroup
          onValueChange={field.onChange}
          defaultValue={field.value}
          className="flex flex-col space-y-1"
        >
          {radio_list &&
            radio_list.map((item, i) => (
              <FormItem
                key={i}
                className="flex items-center space-x-3 space-y-0"
              >
                <FormControl>
                  <RadioGroupItem value={item.value} />
                </FormControl>
                <FormLabel className="font-normal">{item.label}</FormLabel>
              </FormItem>
            ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};
export default RadioComponent;
