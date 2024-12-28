import CheckboxField from "../../components/Checkbox";
import { ITextInput } from "../types";
import { requiredCheck } from "../validation/errText";

export const fieldCheckbox = (args: ITextInput) => {
  return {
    type: "checkbox",
    validation_type: "boolean",
    validations: [
      {
        type: "oneOf",
        params: [[true], requiredCheck],
      },
    ],
    component: CheckboxField,
    ...args,
  };
};
