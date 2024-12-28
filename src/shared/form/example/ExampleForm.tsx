import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Form } from "@/shared/form/ui/form";
import { validateSchema } from "@/shared/form/utils/validation/yupSchemaCreator";
import { formData } from "./data";
import { makeInitialValues } from "@/shared/form/utils/initialValues";
import Field from "../Field";
import { Button } from "../ui/button";

const ExampleForm: FC = () => {
  const form = useForm({
    resolver: yupResolver(validateSchema(formData)),
    mode: "onChange",
    defaultValues: makeInitialValues(formData),
  });

  const {
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = form;

  const onSubmit = (data: Record<string, unknown>) => {
    console.log(data);
    // form.reset(undefined, { keepDirtyValues: true });
    // но можно и здесь
    // reset();
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      // лучше тут очистить
      form.reset();
    }
  }, [form, isSubmitSuccessful]);

  return (
    <Form {...form}>
      <form action="#" id="form" onSubmit={handleSubmit(onSubmit)}>
        {formData.map((item, i) => (
          <Field key={i} {...item} />
        ))}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
export default ExampleForm;
