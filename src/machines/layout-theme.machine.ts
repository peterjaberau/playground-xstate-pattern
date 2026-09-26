import { assign, setup } from "xstate"
import { defaults } from "#store"
import { layoutThemeTemplates } from "#store"

export const layoutThemeMachine = setup({
  actors: {},
  actions: {
    resolveTheme: assign(({ context }) => ({
      props: context.props ?? layoutThemeTemplates.find((item) => item.id === context.themeId)?.template ?? {},
    })),
    selectTheme: assign(({ event }: any) => {
      const themeId = event.themeId
      return {
        themeId,
        props: event.props ?? layoutThemeTemplates.find((item) => item.id === themeId)?.template ?? {},
      }
    }),
  },
}).createMachine({
  id: "layout-theme",
  initial: "initiating",
  context: ({ input }: any) => ({
    themeId: input?.themeId ?? defaults.layoutTheme.themeId,
    props: input?.props,
  }),
  on: {
    SELECT_LAYOUT_THEME: { actions: "selectTheme" },
  },
  states: {
    initiating: {
      entry: ["resolveTheme"],
      always: {
        target: "initiated",
      },
    },
    initiated: {},
  },
})
