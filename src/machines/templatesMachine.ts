import { assign, sendTo, setup, type ActorRefFrom } from "xstate"
import { layoutTemplates, layoutThemeTemplates } from "#store"

export const templatesMachine = setup({
  actors: {},
  actions: {},
}).createMachine({
  id: "templates",
  context: ({ spawn }) => ({
    data: {
      layouts: layoutTemplates,
      layoutThemes: layoutThemeTemplates,
    },
  }),
  on: {},
  states: {},
})
