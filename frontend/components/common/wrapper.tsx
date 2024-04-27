"use client";

import React, { useState } from "react";
import { SideMenu } from "./sidemenu";

const Wrapper = ({
  children,
  title,
}: Readonly<{ children: React.ReactNode; title: string }>) => {
  const [currentItem, setCurrentItem] = useState(title);

  return (
    <SideMenu currentItem={currentItem} setCurrentItem={setCurrentItem}>
      {children}
    </SideMenu>
  );
};

export default Wrapper;
