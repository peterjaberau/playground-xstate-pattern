import { assign, sendTo, setup, type ActorRefFrom } from "xstate"
import { defaults } from "#store"
import { themeTemplates } from "#store"

export const themeMachine = setup({
  actors: {},
  actions: {
    validateProps: assign(({ context, event }) => {
      const { props } = context
      if (Object.keys(props).length === 0) {
        context.props = themeTemplates?.find((template) => template?.id === context?.themeId)?.template
      }
    }),
  },
}).createMachine({
  id: "theme",
  context: ({ input }: any) => ({
    themeId: input?.themeId || defaults?.theme?.themeId,
    props: {
      ...input?.props,
      ...defaults?.theme?.props,
    },
    resolved: {},
  }),
  on: {},
  states: {
    initiating: {
      entry: ["validateProps"],
      always: {
        target: "initiated",
      },
    },
    initiated: {},
  },
})
