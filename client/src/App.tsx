import * as React from "react";
import { LandingPage } from "@pages/landing";

export interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
  return <LandingPage />;
};

App.displayName = "App";
