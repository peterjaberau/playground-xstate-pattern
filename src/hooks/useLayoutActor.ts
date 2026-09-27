import { useSelector } from "@xstate/react"
import { useAppActor } from "./useAppActor"

export const useLayoutActorRef = () => {
  const { layoutRef } = useAppActor()
  return layoutRef
}

export const useLayoutActor = () => {
  const layoutRef = useLayoutActorRef()
  const layoutState = useSelector(layoutRef, (state: any) => state)
  const layoutContext = layoutState.context

  return {
    layoutRef,
    sendToLayout: layoutRef.send,
    layoutState,
    layoutContext,
    layoutId: layoutContext.layoutId,
    initialLayout: layoutContext.initialLayout,
    layoutProps: layoutContext.props,
    layoutWiringRef: layoutContext.layoutWiringRef,
  }
}
