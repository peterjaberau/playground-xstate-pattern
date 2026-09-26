"use client"
import { Box, ClientOnly, Flex } from "@chakra-ui/react"
import { Tilery } from "@tileryjs/react"
import { useRef } from "react"
import { StoriesList } from "./components"
import {
  useLayoutActor,
  useLayoutThemeActor,
  useLayoutWiringActor,
  useStoriesActor,
  useStoryActor,
} from "#hooks"

function defaultTabContent({ tab }: { tab: any }) {
  return <div>{tab.data?.title ?? tab.id}</div>
}

const tabComponents = {
  default: defaultTabContent,
  storiesList: StoriesList,
}

function resolveConfig(value: unknown, story: Record<string, unknown> | null) {
  if (typeof value === "string") {
    return value.replace(/{{story\.([^}]+)}}/g, (_, key) => String(story?.[key] ?? ""))
  }

  if (Array.isArray(value)) return value.map((item) => resolveConfig(item, story))

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, resolveConfig(item, story)]),
    )
  }

  return value
}

export default function Page() {
  const newTabCounterRef = useRef(0)
  const tileryRef = useRef(null)
  const { initialLayout, layoutProps, layoutId } = useLayoutActor()
  const { themeProps } = useLayoutThemeActor()
  const { recipe } = useLayoutWiringActor()
  const { dataStories } = useStoriesActor()
  const { story } = useStoryActor()

  const renderTabContent = (tab: any) => {
    const wiring = recipe?.tabs?.[tab.id]
    const Component = tabComponents[wiring?.component as keyof typeof tabComponents] ?? tabComponents.default
    const config = resolveConfig(wiring?.config ?? {}, story)

    return <Component tab={tab} story={story} stories={dataStories} {...config} />
  }

  return (
    <ClientOnly>
      <Flex minW="0" minH="0" flex="1" align="center" justify="center" overflow="hidden">
        <Flex
          position="relative"
          direction="column"
          h={"full"}
          w={"full"}
          minW="48rem"
          maxW="full"
          overflow="hidden"
          borderWidth="1px"
          borderColor="border"
        >
          <Box minH="0" minW="0" flex="1" style={themeProps?.style}>
            <Tilery
              key={layoutId}
              ref={tileryRef}
              initialLayout={initialLayout}
              onNewTab={(event) => {
                newTabCounterRef.current += 1
                console.log({
                  id: `${event.id}-${newTabCounterRef.current}`,
                  data: {
                    title: `Draft ${newTabCounterRef.current}`,
                    body: "This tab was supplied by the host application.",
                  },
                })

                return {
                  id: `${event.id}-${newTabCounterRef.current}`,
                  data: {
                    title: `Draft ${newTabCounterRef.current}`,
                    body: "This tab was supplied by the host application.",
                  },
                }
              }}
              renderTabHeader={(tab: any) => <span>{tab.data.title}</span>}
              renderTabContent={renderTabContent}
              {...layoutProps}
            />
          </Box>
        </Flex>
      </Flex>
    </ClientOnly>
  )
}
