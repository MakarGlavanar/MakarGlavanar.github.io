import * as React from "react";
import { Page } from "@components/common/page";
import { ISmoothScrollState } from "@providers/smooth-scroll";
import { Registry } from "@registry/Registry";

export interface ILandingPageProps {}

export const LandingPage: React.FC<ILandingPageProps> = () => {
  const smoothScrollHandler = React.useRef((value: ISmoothScrollState) => {
    console.log(value.scrollTop);
  });

  React.useEffect(() => {
    Registry.getSmoothScrollProvider().subscribe(smoothScrollHandler.current);

    return () =>
      Registry.getSmoothScrollProvider().unsubscribe(
        smoothScrollHandler.current
      );
  });

  return (
    <Page>
      <div style={{ height: "300vh" }}></div>
    </Page>
  );
};

LandingPage.displayName = "LandingPage";
