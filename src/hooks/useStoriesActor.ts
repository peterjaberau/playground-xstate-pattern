import { useAppActorRef } from "./useAppActor"
import { useSelector } from "@xstate/react"

export const useStoriesActorRef = () => {
  const appRef = useAppActorRef()
  return useSelector(appRef, (state: any) => state.context.storiesRef)
}

export const useStoriesActor = () => {
  const storiesRef = useStoriesActorRef()
  const storiesState = useSelector(storiesRef, (state: any) => state)
  const storiesContext = storiesState?.context
  const dataStories = storiesContext?.data.stories
  const storyRef = storiesContext?.storyRef

  return {
    storiesRef,
    sendToStories: storiesRef.send,
    storiesState,
    storiesContext,
    dataStories,
    storyRef
  }
}
