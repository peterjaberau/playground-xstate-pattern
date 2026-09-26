import { assign, sendTo, setup, type ActorRefFrom, type AnyActorRef } from "xstate"
import { appMachine, templatesMachine } from "."
export const rootMachine = setup({
  actors: {
    app: appMachine,
    templates: templatesMachine,
  },
  actions: {},
}).createMachine({
  id: "root",
  context: ({ spawn }: any) => ({
    appRef: spawn("app", { name: "app" }),
    templatesRef: spawn("templates", { name: "templates" }),
  }),
  on: {},
  states: {},
})
