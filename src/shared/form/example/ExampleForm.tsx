import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Form } from "@/shared/ui/form";
import { validateSchema } from "@/shared/form/utils/validation/yupSchemaCreator";
import { formData } from "./data";
import { makeInitialValues } from "@/shared/form/utils/initialValues";
import Field from "../Field";

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
      </form>
    </Form>
  );
};
export default ExampleForm;