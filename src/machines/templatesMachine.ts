import { assign, sendTo, setup, type ActorRefFrom } from "xstate"
import { layoutTemplates, themeTemplates } from "#store"

export const templatesMachine = setup({
  actors: {},
  actions: {},
}).createMachine({
  id: "templates",
  context: ({ spawn }) => ({
    data: {
      layouts: layoutTemplates,
      themes: themeTemplates,
    },
  }),
  on: {},
  states: {},
})
