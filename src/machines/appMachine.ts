import { assign, sendTo, setup, type ActorRefFrom, type AnyActorRef } from "xstate"
import { storiesMachine, layoutMachine, themeMachine } from "."


export const appMachine = setup({
  actors: {
    stories: storiesMachine,
    layout: layoutMachine,
    theme: themeMachine,
  },
  actions: {},
}).createMachine({
  id: "app",
  context: ({ input, spawn }: any) => ({
    storiesRef: spawn("stories", { name: "stories" }),
    layoutRef: spawn("layout", { name: "layout" }),
    themeRef: spawn("theme", { name: "theme" }),
  }),
  on: {},
  states: {},
})
