import { SmoothScrollProvider } from "@providers/smooth-scroll";
import { VideoBackgroundProvider } from "@providers/video-backround";

export abstract class Registry {
  private static smoothScrollProvider: SmoothScrollProvider;
  private static videoBackgroundProvider: VideoBackgroundProvider;

  public static getSmoothScrollProvider(): SmoothScrollProvider {
    if (!this.smoothScrollProvider) {
      this.smoothScrollProvider = new SmoothScrollProvider();

      this.smoothScrollProvider.init();
    }

    return this.smoothScrollProvider;
  }

  public static getVideoBackgroundProvider(): VideoBackgroundProvider {
    if (!this.videoBackgroundProvider) {
      this.videoBackgroundProvider = new VideoBackgroundProvider();

      this.videoBackgroundProvider.init();
    }

    return this.videoBackgroundProvider;
  }
}
