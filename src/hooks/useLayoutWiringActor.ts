import { useSelector } from "@xstate/react"
import { useLayoutActor } from "./useLayoutActor"

export const useLayoutWiringActorRef = () => {
  const { layoutWiringRef } = useLayoutActor()
  return layoutWiringRef
}

export const useLayoutWiringActor = () => {
  const layoutWiringRef = useLayoutWiringActorRef()
  const layoutWiringState = useSelector(layoutWiringRef, (state: any) => state)
  const layoutWiringContext = layoutWiringState.context

  return {
    layoutWiringRef,
    sendToLayoutWiring: layoutWiringRef.send,
    layoutWiringState,
    layoutWiringContext,
    recipe: layoutWiringContext.recipe,
  }
}
