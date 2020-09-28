import { IProvder } from "../IProvider";
import { ISmoothScrollState } from "./ISmoothScrollState";
import { ISubjectListener, Subject } from "@utils/subject";
import { lerp } from "@utils/lerp";

export class SmoothScrollProvider implements IProvder<ISmoothScrollState> {
  private readonly subject: Subject<ISmoothScrollState>;
  private readonly atm: number;
  private requestedScrollTop: number;
  private calculationIntervalId: number;

  public constructor() {
    this.subject = new Subject({ scrollTop: 0 });
    this.atm = 0.06;
    this.requestedScrollTop = 0;

    this.calculateScrollTop = this.calculateScrollTop.bind(this);
    this.handleDocumentScroll = this.handleDocumentScroll.bind(this);
  }

  public init(): void {
    const frameRate = 1000 / 60;
    this.calculationIntervalId = window.setInterval(
      this.calculateScrollTop,
      frameRate
    );

    document.addEventListener("scroll", this.handleDocumentScroll, {
      passive: true,
    });
  }

  public subscribe(listener: ISubjectListener<ISmoothScrollState>): void {
    this.subject.subscribe(listener);
  }

  public unsubscribe(listener: ISubjectListener<ISmoothScrollState>): void {
    this.subject.unsubscribe(listener);
  }

  public dispose(): void {
    window.clearInterval(this.calculationIntervalId);
    document.removeEventListener("scroll", this.handleDocumentScroll);

    this.subject.dispose();
  }

  private handleDocumentScroll(): void {
    this.requestedScrollTop = window.scrollY;
  }

  public getScrollTop(): number {
    return this.subject.getCurrentValue().scrollTop;
  }

  private calculateScrollTop(): void {
    const delta = 0.1;

    requestAnimationFrame(() => {
      const scrollTop = lerp(
        this.subject.getCurrentValue().scrollTop,
        this.requestedScrollTop,
        this.atm,
        delta
      );

      if (Math.abs(scrollTop - this.requestedScrollTop) > delta) {
        this.subject.next({ scrollTop });
      }
    });
  }
}
