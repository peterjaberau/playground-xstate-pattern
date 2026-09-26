import { sendTo, setup } from "xstate"
import { storyMachine } from "./storyMachine"
import { dataStories } from "#store"

export const storiesMachine = setup({
  actors: {
    story: storyMachine,
  },
  actions: {},
}).createMachine({
  id: "stories",
  context: ({ spawn }: any) => ({
    data: {
      stories: dataStories,
    },
    storyRef: spawn("story", { name: "story" }),

  }),
  on: {
    SELECT_STORY: {
      actions: sendTo(({ context }: any) => context.storyRef, ({ event }: any) => event),
    },
  },
  states: {},
})
