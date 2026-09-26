import { assign, sendTo, setup, type ActorRefFrom, type AnyActorRef } from "xstate"
import { storiesMachine, layoutMachine, layoutThemeMachine } from "."


export const appMachine = setup({
  actors: {
    stories: storiesMachine,
    layout: layoutMachine,
    layoutTheme: layoutThemeMachine,
  },
  actions: {},
}).createMachine({
  id: "app",
  context: ({ input, spawn }: any) => ({
    storiesRef: spawn("stories", { name: "stories" }),
    layoutRef: spawn("layout", { name: "layout" }),
    layoutThemeRef: spawn("layout-theme", { name: "layout-theme" }),
  }),
  on: {},
  states: {},
})
