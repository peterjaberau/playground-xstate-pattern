"use client"
import { Box, ClientOnly, Flex } from "@chakra-ui/react"
import { Tilery } from "@tileryjs/react"
import { defaults, currentlayout, currentTheme } from "./_store"
import { useRef } from "react"
import { StoriesList } from "./components"

function defaultTabContent(tab: any) {
  return <div>{tab.id}</div>
}

const tabComponents = {
  default: defaultTabContent,
  storiesList: StoriesList,
}

export default function Page() {
  const newTabCounterRef = useRef(0)
  const tileryRef = useRef(null)

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
          <Box minH="0" minW="0" flex="1" style={currentTheme}>
            <Tilery
              ref={tileryRef}
              initialLayout={currentlayout}
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
              renderTabContent={(tab: any) => <div>{tab.data.title} content</div>}
              resizable={true}
              minSize={10}
              resizeHandleHitSize={24}
              showActionsButton={true}
              showNewTabButton={true}
            />
          </Box>
        </Flex>
      </Flex>
    </ClientOnly>
  )
}
