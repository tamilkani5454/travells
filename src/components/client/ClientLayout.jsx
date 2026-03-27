import { Outlet } from "react-router-dom";
import ClientNavbar from "./ClientNavbar";
import ClientFooter from "./ClientFooter";

const ClientLayout = () => (
  <div className="min-h-screen flex flex-col">
    <ClientNavbar />
    <main className="flex-1 pt-16">
      <Outlet />
    </main>
    <ClientFooter />
  </div>
);

export default ClientLayout;
