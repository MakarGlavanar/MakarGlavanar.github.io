import { SmoothScrollProvider } from "@providers/smooth-scroll";

export abstract class Registry {
  private static smoothScrollProvider: SmoothScrollProvider;

  public static getSmoothScrollProvider(): SmoothScrollProvider {
    if (!this.smoothScrollProvider) {
      this.smoothScrollProvider = new SmoothScrollProvider();

      this.smoothScrollProvider.init();
    }

    return this.smoothScrollProvider;
  }
}
