import { assign, setup } from "xstate"
import { dataStories, defaults } from "#store"
export const storyMachine = setup({
  actors: {},
  actions: {
    selectStory: assign(({ context, event }: any) => {
      const storyId = event.storyId ?? context.storyId
      return {
        storyId,
        story: dataStories.find((item: any) => item.id === storyId) ?? null,
      }
    }),
  },
}).createMachine({
  id: "story",
  context: ({ input }: any) => ({
    storyId: input?.storyId ?? defaults.story.storyId,
    story: dataStories.find((item: any) => item.id === (input?.storyId ?? defaults.story.storyId)) ?? null,
  }),
  on: {
    SELECT_STORY: { actions: "selectStory" },
  },
  states: {},
})
