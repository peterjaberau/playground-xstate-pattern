import { useSelector } from "@xstate/react"
import { useStoriesActor } from "./useStoriesActor"

export const useStoryActorRef = () => {
  const { storyRef } = useStoriesActor()
  return storyRef
}

export const useStoryActor = () => {
  const storyRef = useStoryActorRef()
  const storyState = useSelector(storyRef, (state: any) => state)
  const storyContext = storyState.context

  return {
    storyRef,
    sendToStory: storyRef.send,
    storyState,
    storyContext,
    storyId: storyContext.storyId,
    story: storyContext.story,
  }
}
