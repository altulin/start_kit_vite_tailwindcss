import { MainProviders } from "@/app/providers";
import AppRouter from "./routers/AppRouter";

const App = () => {
  return (
    <MainProviders>
      <AppRouter />
    </MainProviders>
  );
};

export default App;
