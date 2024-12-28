import MyDatePicker from "../../components/Datepicker";
import { ITextInput } from "../types";
import { required } from "../validation/errText";

export const fieldDatePicker = (args: ITextInput) => {
  return {
    validation_type: "string",
    validations: [
      {
        type: "required",
        params: [required],
      },
    ],
    ...args,
    component: MyDatePicker,
  };
};
