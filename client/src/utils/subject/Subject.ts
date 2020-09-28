import { ISubjectListener } from "./ISubjectListener";

export class Subject<T> {
  private listeners: ISubjectListener<T>[];

  public constructor(private currentValue?: T) {
    this.listeners = [];
  }

  public subscribe(listener: ISubjectListener<T>): void {
    if (this.getListenerIndex(listener) === -1) {
      this.listeners.push(listener);

      listener(this.currentValue);
    }
  }

  public next(value: T): void {
    this.currentValue = value;

    this.listeners.forEach((listener) => listener(this.currentValue));
  }

  public getCurrentValue(): T {
    return this.currentValue;
  }

  public unsubscribe(listener: ISubjectListener<T>): void {
    const index = this.getListenerIndex(listener);

    if (index !== -1) {
      this.listeners.splice(index, 1);
    }
  }

  public dispose(): void {
    this.listeners = [];
  }

  private getListenerIndex(listener: ISubjectListener<T>): number {
    const index = this.listeners.findIndex(
      (_listener) => _listener === listener
    );

    return index;
  }
}
