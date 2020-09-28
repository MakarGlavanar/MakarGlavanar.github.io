/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
import { IProvder } from "../IProvider";
import { IVideoBackgroundState } from "./IVideoBackgroundState";
import { ISubjectListener, Subject } from "@utils/subject";

export class VideoBackgroundProvider
  implements IProvder<IVideoBackgroundState> {
  private readonly subject: Subject<IVideoBackgroundState>;
  private readonly imageUrls: string[];

  public constructor() {
    this.subject = new Subject({ blobs: [], areBlobsLoaded: false });
    this.imageUrls = [];
  }

  public init(): void {
    for (let i = 1; i <= 150; i++) {
      const digitsCount = String(i).length;
      const imageFilename = `${new Array(4 - digitsCount)
        .fill(0)
        .join("")}${i}`;

      // Register file import cause file-loader needs to move file into dist folder
      require(`../../assets/cover-video/${imageFilename}.jpg`);

      const imageUrl = `/assets/cover-video/${imageFilename}.jpg`;

      this.imageUrls.push(imageUrl);
    }
  }

  public subscribe(listener: ISubjectListener<IVideoBackgroundState>): void {
    this.subject.subscribe(listener);
  }

  public unsubscribe(listener: ISubjectListener<IVideoBackgroundState>): void {
    this.subject.unsubscribe(listener);
  }

  public dispose(): void {
    this.subject.dispose();
  }

  public async fetchBackgroundVideoFrames(): Promise<void> {
    const requests: Promise<Response>[] = [];

    for (const imageUrl of this.imageUrls) {
      requests.push(fetch(imageUrl));
    }

    const responses = await Promise.all(requests);
    const blobs = await Promise.all(
      responses.map((response) => response.blob())
    );

    this.subject.next({ blobs, areBlobsLoaded: blobs.length > 0 });
  }
}
