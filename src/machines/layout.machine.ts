import { assign, sendTo, setup, type ActorRefFrom } from "xstate"
import { defaults } from "#store"
import { layoutTemplates } from "#store"

export const layoutMachine = setup({
  actors: {},
  actions: {
    validateProps: assign(({ context, event }) => {
      const { props } = context
      if ( !props.initialLayout ) {
        context.props.initialLayout = layoutTemplates?.find((template) => template?.id === context?.layoutId)?.template.layout
      }
    })
  },
}).createMachine({
  id: "layout",
  initial: "initiating",
  context: ({ input }: any) => ({
    layoutId: defaults?.layout?.layoutId,
    props: {
      ...input?.props,
      ...defaults?.layout?.props,
    },
    resolved: {}

  }),
  on: {},
  states: {
    initiating: {
      entry: ['validateProps'],
      always: {
        target: "initiated"
      }
    },
    initiated: {

    }
  },
})
