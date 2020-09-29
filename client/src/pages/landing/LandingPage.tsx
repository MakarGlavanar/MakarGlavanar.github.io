import * as React from "react";
import { Page } from "@components/common/page";
import { Cover } from "@components/cover";
import { Team } from "@components/team";

export interface ILandingPageProps {}

export const LandingPage: React.FC<ILandingPageProps> = () => {
  return (
    <Page>
      <Cover />
      <Team />
    </Page>
  );
};

LandingPage.displayName = "LandingPage";
