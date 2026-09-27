"use client"

import { Badge, Box, Flex, Text, VStack, chakra, Link, Button } from "@chakra-ui/react"

type StoryItemProps = {
  id: string
  title: string
  type?: string
  subType?: string
}

export const StoriesList = ({ stories }: { stories: StoryItemProps[] }) => {
  return (
    <>
      <Flex direction="column" h="full" bg={"bg"}>
        <VStack gap="4" align="stretch" py={4}>
          {stories.map((item) => (
            <Button variant={"ghost"} textAlign={"left"} key={item.id}>
              <Badge>{item.subType || "undefined"}</Badge>
              <Text flex="1">{item.title}</Text>
            </Button>
          ))}
        </VStack>
      </Flex>
    </>
  )
}
