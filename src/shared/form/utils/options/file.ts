import { ITextInput } from "../types";
import { required } from "../validation/errText";
import File from "../../components/File";

export const fieldFile = (args: ITextInput) => {
  return {
    type: "file",
    validation_type: "string",

    validations: [
      {
        type: "required",
        params: [required],
      },
    ],

    component: File,
    ...args,
  };
};
