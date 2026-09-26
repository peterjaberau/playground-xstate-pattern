import { assign, setup } from "xstate"
import { layoutWiringRecipes } from "#store"

export const layoutWiringMachine = setup({
  actors: {},
  actions: {
    resolveRecipe: assign(({ context, event }: any) => {
      const layoutId = event.layoutId ?? context.layoutId
      const storyId = event.storyId ?? context.storyId
      const recipe = layoutWiringRecipes.find((item) =>
        item.layoutId === layoutId && Object.values(item.tabs).some((tab: any) => tab.story === storyId),
      ) ?? null

      return { layoutId, storyId, recipe }
    }),
  },
}).createMachine({
  id: "layout-wiring",
  initial: "initiating",
  context: ({ input }: any) => ({
    layoutId: input?.layoutId,
    storyId: input?.storyId,
    recipe: null,
  }),
  on: {
    RESOLVE: { actions: "resolveRecipe" },
  },
  states: {
    initiating: {
      entry: "resolveRecipe",
      always: "initiated",
    },
    initiated: {},
  },
})
