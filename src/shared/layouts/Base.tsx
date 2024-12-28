import { FC } from "react";
import { Outlet } from "react-router";

const BaseLayout: FC = () => {
  return (
    <>
      <main className="grow">
        <Outlet />
      </main>
    </>
  );
};
export default BaseLayout;
