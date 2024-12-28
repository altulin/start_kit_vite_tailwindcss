import { ChangeEvent, FC } from "react";

import { checkArr } from "@/entities/lib/checkArr";
import { useController } from "react-hook-form";
import { ITextInput } from "../utils/types";
import { FormControl, FormLabel } from "@/shared/form/ui/form";

const File: FC<ITextInput> = ({ ...props }) => {
  const { ...input_props } = props;

  const { field } = useController({
    name: props.name,
  });

  const checkValue = (value: File[]) => {
    return Object.keys(value).map((key) => {
      const elm = value[Number(key)];
      return elm.constructor.name === "File" ? elm.name : "";
    });
  };

  const label_list = checkValue(field.value);

  return (
    <div>
      <FormLabel>
        {props.label_text && <p>{<span>{props.label_text}</span>}</p>}

        <div className={"input-base"}>
          <FormControl>
            <input
              type="file"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                if (e.target.files && e.target.files.length > 0) {
                  field.onChange(e.target.files);
                }
              }}
              {...input_props}
              className="sr-only"
            />
          </FormControl>

          <span className="flex gap-x-2">
            {checkArr(label_list) ? (
              <>
                {label_list.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </>
            ) : (
              <>Загрузить</>
            )}
          </span>
        </div>
      </FormLabel>
    </div>
  );
};
export default File;
