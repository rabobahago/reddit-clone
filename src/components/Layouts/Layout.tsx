import React from "react";
import Navbar from "../Navbar/Navbar";
interface Props {
  children?: React.ReactNode;
}
const Layout: React.FC = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
export default Layout;
