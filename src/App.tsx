import React from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import { MainPage } from "./pages/MainPage";

export default () => {
  return (
    <ErrorBoundary>
      <MainPage />
    </ErrorBoundary>
  );
};
