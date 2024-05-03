"use client";

import { persistor, store } from "./store";
import { Provider } from "react-redux";

import React from "react";
import { PersistGate } from "redux-persist/integration/react";

interface Props {
  children: React.ReactNode;
}

const CustomProvider = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default CustomProvider;
