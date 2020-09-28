import * as React from "react";
import { Page } from "@components/common/page";
import { Cover } from "@components/cover";

export interface ILandingPageProps {}

export const LandingPage: React.FC<ILandingPageProps> = () => {
  return (
    <Page>
      <Cover />
    </Page>
  );
};

LandingPage.displayName = "LandingPage";
