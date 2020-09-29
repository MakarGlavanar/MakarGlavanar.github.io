import * as React from "react";
import { LandingPage } from "@pages/landing";
import { IVideoBackgroundState } from "@providers/video-backround";
import { Registry } from "@registry/Registry";

export interface IAppProps {}

// TODO: remove state, use decorator for auto update
export interface IAppState {
  isVideoBackgroundReady: boolean;
}

export class App extends React.Component<IAppProps, IAppState> {
  public constructor(props: IAppProps) {
    super(props);

    this.state = { isVideoBackgroundReady: false };

    this.handleVideoBackgroundStateChange = this.handleVideoBackgroundStateChange.bind(
      this
    );
  }

  public componentDidMount(): void {
    Registry.getVideoBackgroundProvider().subscribe(
      this.handleVideoBackgroundStateChange
    );
  }

  public componentWillUnmount(): void {
    Registry.getVideoBackgroundProvider().unsubscribe(
      this.handleVideoBackgroundStateChange
    );
  }

  public render(): JSX.Element {
    return <LandingPage />;
  }

  private handleVideoBackgroundStateChange(value: IVideoBackgroundState): void {
    if (value.areBlobsLoaded) {
      this.setState({ isVideoBackgroundReady: true });
      console.log("Video Ready!");
    }
  }
}
