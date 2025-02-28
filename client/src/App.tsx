import { Outlet } from "react-router";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full h-full min-h-svh bg-stone-100 dark:bg-stone-800">
      <Header />
      <div className="block mx-auto w-full max-w-[1500px] px-3 md:px-10">
        <Outlet />
        <div className="p-5 mt-10 text-black/[0.5] text-sm w-full text-right">
          Published by Waled Khatiz (ktz-dev)
        </div>
      </div>
    </div>
  );
}

export default App;
