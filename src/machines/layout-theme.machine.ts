import { assign, sendTo, setup, type ActorRefFrom } from "xstate"
import { defaults } from "#store"
import { layoutThemeTemplates } from "#store"

export const layoutThemeMachine = setup({
  actors: {},
  actions: {
    validateProps: assign(({ context, event }) => {
      const { props } = context
      if (Object.keys(props).length === 0) {
        context.props = layoutThemeTemplates?.find((template) => template?.id === context?.themeId)?.template
      }
    }),
  },
}).createMachine({
  id: "layout-theme",
  initial: "initiating",
  context: ({ input }: any) => ({
    themeId: input?.themeId || defaults?.layoutTheme?.themeId,
    props: {
      ...input?.props,
      ...defaults?.layoutTheme?.props,
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
