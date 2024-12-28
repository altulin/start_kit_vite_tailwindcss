import RadioComponent from "../../components/RadioGroup";
import { ITextInput } from "../types";

export interface ITextInput_radio extends ITextInput {
  init_value: { label: string; value: string };
}

export const fieldRadio = (args: ITextInput_radio) => {
  return {
    type: "radio",
    validation_type: "string",
    validations: [],
    ...args,
    component: RadioComponent,
  };
};
