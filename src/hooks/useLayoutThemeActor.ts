import { useSelector } from "@xstate/react"
import { useAppActor } from "./useAppActor"

export const useLayoutThemeActorRef = () => {
  const { layoutThemeRef } = useAppActor()
  return layoutThemeRef
}

export const useLayoutThemeActor = () => {
  const layoutThemeRef = useLayoutThemeActorRef()
  const layoutThemeState = useSelector(layoutThemeRef, (state: any) => state)
  const layoutThemeContext = layoutThemeState.context

  return {
    layoutThemeRef,
    sendToLayoutTheme: layoutThemeRef.send,
    layoutThemeState,
    layoutThemeContext,
    themeId: layoutThemeContext.themeId,
    themeProps: layoutThemeContext.props,
  }
}
