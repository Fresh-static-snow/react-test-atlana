import React, { FC } from "react";
import styles from "./Layout.module.scss";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
