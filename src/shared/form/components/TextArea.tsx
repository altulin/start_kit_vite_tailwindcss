import { FC } from "react";
import { ITextInput } from "../utils/types";
import { Textarea } from "@/shared/ui/textarea";
import { useController } from "react-hook-form";
import { Label } from "../Field";
import { FormControl } from "@/shared/ui/form";

const TextArea: FC<ITextInput> = ({ ...props }) => {
  const { name, placeholder } = props;
  const { field } = useController({ name });

  return (
    <div>
      <Label {...props} />
      <FormControl>
        <Textarea
          placeholder={placeholder}
          className="resize-none"
          {...field}
        />
      </FormControl>
    </div>
  );
};
export default TextArea;
