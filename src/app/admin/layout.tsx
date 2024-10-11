import AdminNavbar from "@/components/admin/AdminNavbar";
import React from "react";

type Props = { children: React.ReactNode };

const AdminLayout = ({ children }: Props) => {
  return (
    <>
      <AdminNavbar />
       {children}
    </>
  );
};
export default AdminLayout;
