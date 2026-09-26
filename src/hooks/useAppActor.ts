import { useSelector } from "@xstate/react"
import { RootContext } from "#providers"


export const useAppActorRef = () =>{
  return RootContext.useSelector((state) => state.context.appRef)
}


export const useAppActor = () => {
  const appRef = useAppActorRef()
  const appState = useSelector(appRef, (state: any) => state)
  const appContext = appState?.context
  const { storiesRef } = appContext

  return {
    appRef,
    sendToApp: appRef.send,
    appState,
    appContext,
    storiesRef,
  }
}
