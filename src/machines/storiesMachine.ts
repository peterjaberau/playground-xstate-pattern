import { assign, sendTo, setup, type ActorRefFrom } from "xstate"
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
  on: {},
  states: {},
})
