"use client";

import { createActorContext } from "@xstate/react";
import { rootMachine } from "#machines";

export const RootContext = createActorContext(rootMachine);

export const RootProvider = ({ children, input = {} }: any) => {
  return <RootContext.Provider options={{ input: { theme: 'light'} }}>{children}</RootContext.Provider>
}
