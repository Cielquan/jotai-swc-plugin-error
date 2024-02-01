"use client";

import { useAtom } from "jotai";
import { focusAtom } from "jotai-optics";
import { type OpticFor_ } from "optics-ts";
import { useCallback } from "react";

import { SomeObj, testAtom } from "@/atoms";

export const SomeClientComponent = () => {
  console.log("SomeComponent render");

  const [foo] = useAtom(
    focusAtom(
      testAtom,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      useCallback((optic: OpticFor_<SomeObj>) => optic.prop("foo"), [])
    )
  );

  return <div>{`foo is '${foo}'`}</div>;
};
