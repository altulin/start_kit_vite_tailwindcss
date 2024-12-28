import * as yup from "yup";
import { ITextInput } from "../types";
import {
  confirmPasswordMatch,
  passwordMax,
  passwordMin,
  required,
} from "../validation/errText";
import PasswordField from "../../components/password/PasswordField";

export const fieldPassword = (args: ITextInput) => {
  return {
    autoComplete: "off",
    validation_type: "string",
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "min",
        params: [8, passwordMin],
      },
      {
        type: "max",
        params: [14, passwordMax],
      },
    ],
    component: PasswordField,
    ...args,
  };
};

export const fieldConfirmPassword = (args: ITextInput) => {
  return {
    autoComplete: "off",
    validation_type: "string",
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "oneOf",
        params: [[yup.ref("password")], confirmPasswordMatch],
      },
    ],
    component: PasswordField,
    ...args,
  };
};
