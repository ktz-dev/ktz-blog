import { Outlet } from "react-router";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full h-svh bg-stone-100 dark:bg-stone-800">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
