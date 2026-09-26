import { assign, sendTo, setup } from "xstate"
import { defaults } from "#store"
import { layoutTemplates } from "#store"
import { layoutWiringMachine } from "./layout-wiring.machine"

export const layoutMachine = setup({
  actors: {
    layoutWiring: layoutWiringMachine,
  },
  actions: {
    resolveLayout: assign(({ context }) => {
      const template = layoutTemplates.find((item) => item.id === context.layoutId)?.template

      return {
        initialLayout: context.props.initialLayout ?? template?.initialLayout ?? template?.layout,
      }
    }),
    selectLayout: assign(({ context, event }: any) => {
      const layoutId = event.layoutId ?? context.layoutId
      const template = layoutTemplates.find((item) => item.id === layoutId)?.template

      return {
        layoutId,
        props: { ...context.props, ...event.props },
        initialLayout: event.initialLayout ?? template?.initialLayout ?? template?.layout,
      }
    }),
    selectStory: assign(({ context, event }: any) => ({
      storyId: event.storyId ?? context.storyId,
    })),
  },
}).createMachine({
  id: "layout",
  initial: "initiating",
  context: ({ input, spawn }: any) => ({
    layoutId: input?.layoutId ?? defaults.layout.layoutId,
    storyId: input?.storyId ?? defaults.story.storyId,
    props: {
      ...defaults.layout.props,
      ...input?.props,
    },
    initialLayout: input?.initialLayout,
    layoutWiringRef: spawn("layoutWiring", {
      name: "layout-wiring",
      input: {
        layoutId: input?.layoutId ?? defaults.layout.layoutId,
        storyId: input?.storyId ?? defaults.story.storyId,
      },
    }),
  }),
  on: {
    SELECT_LAYOUT: {
      actions: [
        "selectLayout",
        sendTo(({ context }: any) => context.layoutWiringRef, ({ context }: any) => ({
          type: "RESOLVE",
          layoutId: context.layoutId,
          storyId: context.storyId,
        })),
      ],
    },
    SELECT_STORY: {
      actions: [
        "selectStory",
        sendTo(({ context }: any) => context.layoutWiringRef, ({ context }: any) => ({
          type: "RESOLVE",
          layoutId: context.layoutId,
          storyId: context.storyId,
        })),
      ],
    },
  },
  states: {
    initiating: {
      entry: [
        "resolveLayout",
        sendTo(({ context }: any) => context.layoutWiringRef, ({ context }: any) => ({
          type: "RESOLVE",
          layoutId: context.layoutId,
          storyId: context.storyId,
        })),
      ],
      always: {
        target: "initiated"
      }
    },
    initiated: {

    }
  },
})
