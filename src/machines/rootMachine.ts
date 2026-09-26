import { setup } from "xstate"
import { appMachine } from "./appMachine"
import { templatesMachine } from "./templatesMachine"
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
