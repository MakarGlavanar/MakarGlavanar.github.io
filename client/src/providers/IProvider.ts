import { ISubjectListener } from "@utils/subject";

export interface IProvder<T> {
  init(): void;

  subscribe(listener: ISubjectListener<T>): void;

  unsubscribe(listener: ISubjectListener<T>): void;

  dispose(): void;
}
