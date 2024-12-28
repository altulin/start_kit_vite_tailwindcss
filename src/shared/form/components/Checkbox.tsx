import { FC } from "react";
import { ITextInput } from "../utils/types";
import { Checkbox } from "@/shared/form/ui/checkbox";
import { useController } from "react-hook-form";
import { FormControl } from "@/shared/form/ui/form";
import { Label } from "../Field";

const CheckboxField: FC<ITextInput> = ({ children, ...props }) => {
  const { field } = useController({ name: props.name });

  return (
    <div className="items-top flex space-x-2">
      <Label {...props} />

      <FormControl>
        <Checkbox
          onCheckedChange={field.onChange}
          name={props.name}
          defaultChecked={props.checked || false}
        />
      </FormControl>

      <div>
        {/* <FormLabel>
          <span>{props.label_text}</span>
        </FormLabel> */}
      </div>

      {children}
    </div>
  );
};
export default CheckboxField;
