import MySelect from "../../components/select/Select";
import { ITextInput } from "../types";
import { required } from "../validation/errText";

export const fieldSelect = (args: ITextInput) => {
  return {
    type: "select",
    validation_type: "string",
    validations: [
      {
        type: "required",
        params: [required],
      },
      // {
      //   type: "test",
      //   params: [
      //     "len",
      //     "Must be exactly 5 characters",
      //     (val: string) => val.length > 0,
      //   ],
      // },
    ],
    component: MySelect,
    ...args,
  };
};