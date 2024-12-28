import { Input } from "@/shared/ui/input";
import { FC, useState } from "react";
import { ITextInput } from "../../utils/types";
import ButtonEye from "./ButtonEye";
import { useController } from "react-hook-form";
import { FormControl } from "@/shared/ui/form";
import { Label } from "../../Field";

const PasswordField: FC<ITextInput> = ({ ...props }) => {
  const [isTypeText, setType] = useState(false);
  const { field } = useController({ name: props.name });

  return (
    <div>
      <Label {...props} />

      <div className="relative">
        <FormControl>
          <Input
            onChange={field.onChange}
            {...props}
            type={isTypeText ? "text" : "password"}
          />
        </FormControl>

        <ButtonEye isTypeText={isTypeText} setType={setType} />
      </div>
    </div>
  );
};
export default PasswordField;
