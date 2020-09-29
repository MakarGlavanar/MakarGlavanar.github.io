import * as React from "react";
import styles from "./VideoBackground.scss";
import { ISmoothScrollState } from "@providers/smooth-scroll";
import { Registry } from "@registry/Registry";
import { IVideoBackgroundState } from "@providers/video-backround";

export interface IVideoBackgroundProps {
  scrollHeight: number;
}

export class VideoBackground extends React.Component<IVideoBackgroundProps> {
  private readonly containerRef: React.RefObject<HTMLDivElement>;
  private readonly canvasRef: React.RefObject<HTMLCanvasElement>;
  private canvasContext: CanvasRenderingContext2D;
  private prevBlobIndex: number;
  private currentBlobIndex: number;
  private blobs: Blob[];

  public constructor(props: IVideoBackgroundProps) {
    super(props);

    this.containerRef = React.createRef();
    this.canvasRef = React.createRef();
    this.blobs = [];

    this.handleSmoothScroll = this.handleSmoothScroll.bind(this);
    this.handleVideoBackgroundStateChange = this.handleVideoBackgroundStateChange.bind(
      this
    );
  }

  public componentDidMount(): void {
    this.canvasContext = this.canvasRef.current.getContext("2d");

    Registry.getSmoothScrollProvider().subscribe(this.handleSmoothScroll);
    Registry.getVideoBackgroundProvider().subscribe(
      this.handleVideoBackgroundStateChange
    );
  }

  public componentWillUnmount(): void {
    Registry.getSmoothScrollProvider().unsubscribe(this.handleSmoothScroll);
    Registry.getVideoBackgroundProvider().unsubscribe(
      this.handleVideoBackgroundStateChange
    );
  }

  public render(): JSX.Element {
    return (
      <div className={styles.VideoBackground} ref={this.containerRef}>
        <canvas
          className={styles.VideoBackground__canvas}
          width={window.innerWidth}
          height={window.innerHeight}
          ref={this.canvasRef}
        ></canvas>
      </div>
    );
  }

  private handleSmoothScroll(value: ISmoothScrollState): void {
    if (this.blobs.length === 0) {
      return;
    }

    const { scrollHeight } = this.props;

    this.prevBlobIndex = this.currentBlobIndex;
    this.currentBlobIndex = Math.floor(
      (value.scrollTop * this.blobs.length) / scrollHeight
    );

    if (
      this.prevBlobIndex !== this.currentBlobIndex &&
      this.currentBlobIndex < this.blobs.length
    ) {
      this.renderBlobToCanvas(this.blobs[this.currentBlobIndex]);
    }
  }

  private handleVideoBackgroundStateChange(value: IVideoBackgroundState): void {
    if (value.areBlobsLoaded) {
      this.blobs = value.blobs;

      this.renderBlobToCanvas(this.blobs[0]);
    }
  }

  private renderBlobToCanvas(blob: Blob): void {
    if (!this.canvasContext) {
      return;
    }

    const image = new Image();

    image.onload = () => {
      const screenImageWidth = window.innerWidth;
      const screenImageHeight = window.innerHeight;

      this.canvasContext.drawImage(
        image,
        0,
        0,
        screenImageWidth,
        screenImageHeight
      );
    };

    image.src = URL.createObjectURL(blob);
  }
}
