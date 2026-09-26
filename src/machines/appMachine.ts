import { sendTo, setup } from "xstate"
import { storiesMachine } from "./storiesMachine"
import { layoutMachine } from "./layout.machine"
import { layoutThemeMachine } from "./layout-theme.machine"


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
    layoutThemeRef: spawn("layoutTheme", { name: "layout-theme" }),
  }),
  on: {
    SELECT_LAYOUT: {
      actions: sendTo(({ context }: any) => context.layoutRef, ({ event }: any) => event),
    },
    SELECT_STORY: {
      actions: [
        sendTo(({ context }: any) => context.storiesRef, ({ event }: any) => event),
        sendTo(({ context }: any) => context.layoutRef, ({ event }: any) => event),
      ],
    },
    SELECT_LAYOUT_THEME: {
      actions: sendTo(({ context }: any) => context.layoutThemeRef, ({ event }: any) => event),
    },
  },
  states: {},
})
