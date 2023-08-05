import { Outlet, useLocation } from "umi";
import Header from "./header";

export default function Layout() {
  const location = useLocation();

  if (location.pathname.includes("f")) {
    return (
      <div>
        <Outlet />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
