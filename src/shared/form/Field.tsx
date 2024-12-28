import { FC } from "react";
import { useController, useForm } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { ITextInput } from "@/shared/form/utils/types";
import { Input } from "@/shared/ui/input";
import { isComponent } from "@/entities/lib/checkComponent";

export const Label: FC<ITextInput> = ({ label_text }) => {
  return label_text ? (
    <FormLabel>
      <span>{label_text}</span>
    </FormLabel>
  ) : null;
};

const Content: FC<ITextInput> = ({ component: Component, ...props }) => {
  const { field } = useController({ name: props.name });

  return (
    <>
      {!isComponent(Component) ? (
        <div>
          <Label {...props} />
          <FormControl>
            <Input {...props} {...field} />
          </FormControl>
        </div>
      ) : (
        <Component {...props} />
      )}
    </>
  );
};

const Field: FC<ITextInput> = ({ component: Component, ...props }) => {
  const form = useForm();
  // const id = useId();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { validation_type, validations, ...inputProps } = props;

  // inputProps.id = id;

  return (
    <FormField
      control={form.control}
      name={props.name}
      render={() => {
        return (
          <FormItem>
            <Content {...inputProps} component={Component} />
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
export default Field;
