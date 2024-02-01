import { atom } from "jotai";

export type SomeObj = {
  foo: string;
};

export const testAtom = atom<SomeObj>({ foo: "foo" });
