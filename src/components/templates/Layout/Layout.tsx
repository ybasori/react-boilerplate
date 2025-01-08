import { IProps } from "./Layout.type";
import Navbar from "@/components/organisms/Navbar/Navbar";

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
