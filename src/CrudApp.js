import React from "react";
import { Provider } from 'react-redux'
import { store } from "./store/store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RegisterUser from "./components/RegisterUser";

export const CrudApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/registro" element={<RegisterUser />} />
          <Route path="/" element={<Navigate replace to="/registro" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
