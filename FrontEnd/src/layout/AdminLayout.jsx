import NavbarAdmin from "../layout/NavbarAdmin";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div>

      {/* NAVBAR */}
      <NavbarAdmin />

      {/* CONTENT */}
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>

    </div>
  );
}

export default AdminLayout;