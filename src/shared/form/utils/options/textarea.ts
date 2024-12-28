import TextArea from "../../components/TextArea";
import { ITextInput } from "../types";
import { required } from "../validation/errText";

export const fieldTextArea = (args: ITextInput) => {
  return {
    validation_type: "string",

    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "max",
        params: [50, "Не более 50 символов"],
      },
    ],
    component: TextArea,
    ...args,
  };
};
