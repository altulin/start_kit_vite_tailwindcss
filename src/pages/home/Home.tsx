import ExampleForm from "@/shared/form/example/ExampleForm";
import { FC } from "react";

const Home: FC = () => {
  return (
    <section className="container ml-auto mr-auto px-4 py-10">
      <h1 className="mb-5 text-3xl">Форма</h1>

      <ExampleForm />
    </section>
  );
};

export default Home;
