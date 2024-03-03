import Sidebar from "@/components/Sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/6 h-screen">
          <Sidebar />
        </div>
        <Separator
          className="bg-[gray] w-[1px] h-[100vh]"
          orientation="vertical"
        />
        <div className="w-5/6 h-screen">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
