// import ExampleForm from "@/shared/form/example/ExampleForm";
import Modal from "@/shared/modal/Modal";
import { FC } from "react";

const Home: FC = () => {
  return (
    <section className="container ml-auto mr-auto px-4 py-10">
      <h1 className="mb-5 text-3xl">Форма</h1>

      <Modal />
    </section>
  );
};

export default Home;
