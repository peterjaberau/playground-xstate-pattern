import { assign, setup } from "xstate"
import { defaults } from "#store"
import { layoutThemeTemplates } from "#store"

const toTileryTheme = (theme: any) => {
  const style = Object.fromEntries(
    Object.entries(theme?.style ?? {}).map(([key, value]) => [
      key.startsWith("--view-") ? key.replace("--view-", "--tilery-") : key,
      value,
    ]),
  )

  return { ...theme, style }
}

export const layoutThemeMachine = setup({
  actors: {},
  actions: {
    resolveTheme: assign(({ context }) => ({
      props: toTileryTheme(
        context.props ?? layoutThemeTemplates.find((item) => item.id === context.themeId)?.template ?? {},
      ),
    })),
    selectTheme: assign(({ event }: any) => {
      const themeId = event.themeId
      return {
        themeId,
        props: toTileryTheme(
          event.props ?? layoutThemeTemplates.find((item) => item.id === themeId)?.template ?? {},
        ),
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
