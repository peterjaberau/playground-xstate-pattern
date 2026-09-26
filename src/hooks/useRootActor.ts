import { RootContext } from "#providers"
import { useSelector } from "@xstate/react"



export const useRootActor = () => {
  const rootRef = RootContext.useActorRef()
  const rootState = useSelector(rootRef, (state: any) => state)
  const rootContext = rootState?.context


  return {
    sendToRoot: rootRef.send,
    rootRef,
    appRef: rootContext?.appRef,
    templateRef: rootContext?.templateRef,
    rootState,
    rootContext,
  }
}

export const useRootActorRef = () => {
  return RootContext.useSelector((state) => state.context.rootRef)
}
