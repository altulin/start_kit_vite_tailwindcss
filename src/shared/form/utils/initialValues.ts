/* eslint-disable @typescript-eslint/no-explicit-any */

import { ITextInput_radio } from "./options/radio";
import { ITextInput } from "./types";

export const makeInitialValues = (fields: ITextInput[]) => {
  const object: Record<string, string | number | boolean | [] | any> = {};

  fields.forEach((item) => {
    const { init_value } = item;

    if (item.name === undefined) return;

    // object[item.name] = init_value || "";

    switch (item.type) {
      case "text":
        object[item.name] = init_value || "";
        break;

      case "hidden":
        object[item.name] = init_value || "";
        break;

      case "checkbox":
        object[item.name] = item.checked || false;
        break;

      case "select":
        if (typeof init_value === "object" && "value" in init_value) {
          object[item.name] = init_value["value"];
        } else {
          object[item.name] = "";
        }

        break;

      case "radio":
        if (init_value !== undefined) {
          object[item.name] = (
            init_value as ITextInput_radio["init_value"]
          ).value;
        }
        break;

      default:
        object[item.name] = "";
    }
  });

  return object;
};
