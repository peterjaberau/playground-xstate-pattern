import { assign, sendTo, setup, type ActorRefFrom } from "xstate"
import { defaults } from "#store"
export const storyMachine = setup({
  actors: {},
  actions: {},
}).createMachine({
  id: "story",
  context: ({ spawn }) => ({
    storyId: defaults?.story?.storyId,
  }),
  on: {},
  states: {},
})
