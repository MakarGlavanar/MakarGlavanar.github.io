import * as React from "react";
import { Header } from "@components/common/header";

export interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

App.displayName = "App";
