"use client"

import type { ColorPalette, DrawerRootProps } from "@chakra-ui/react"
import {
  Badge,
  Box,
  Button,
  Drawer,
  Flex,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  Portal,
  Span,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react"
import {
  LuAtom,
  LuBaseline,
  LuBook,
  LuBookOpen,
  LuBraces,
  LuChevronDown,
  LuChevronRight,
  LuCode,
  LuCookingPot,
  LuExternalLink,
  LuHeading,
  LuImage,
  LuLayoutDashboard,
  LuList,
  LuMenu,
  LuNewspaper,
  LuPanelRight,
  LuPanelTop,
  LuRecycle,
  LuSearch,
  LuSlack,
  LuSquareMousePointer,
  LuText,
} from "react-icons/lu"
import { Fragment } from "react"

// block.tsx
type StoryItemProps = {
  id: string
  title: string
  type?: string
  subType?: string
}

export const StoriesList = (props: StoryItemProps[]) => {
  return (
    <>
      <Box
        bg="bg"
        top="0"
        left="0"
        bottom="0"
        zIndex="20"
        width="18rem"
        hideBelow="lg"
        position="fixed"
        borderRightWidth="1px"
      >
        <Flex direction="column" h="full">
          <Box flex="1" minH="0" overflowY="auto" px="3" pb="6">
            <VStack gap="4" align="stretch">
              {props.map((item, index) => (
                <Box key={index}>
                  <Flex align="center" h="7" px="3" py="1">
                    <Text fontSize="xs" color="fg.muted" fontWeight="medium" textTransform="uppercase">
                      APPLICATION
                    </Text>
                  </Flex>

                  <VStack gap="0" align="stretch">
                    <ItemLinkWrapper href="#" variant="filled">
                      {item.subType && <ItemBadge text={item.subType} />}
                      <Text flex="1" fontSize="sm">
                        {item.title}
                      </Text>
                    </ItemLinkWrapper>
                  </VStack>
                </Box>
              ))}
            </VStack>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

const ItemBadge = (props: { text: string }) => {
  const { text } = props
  return (
    <Badge size="xs" fontWeight="semibold" variant="subtle">
      {text}
    </Badge>
  )
}

const ItemLinkWrapper = chakra("a", {
  base: {
    gap: "3",
    display: "flex",
    textStyle: "sm",
    alignItems: "center",
    textDecoration: "none",
    transitionProperty: "color, border-color",
    transitionDuration: "normal",
    transitionTimingFunction: "default",
    focusVisibleRing: "inside",
    focusRingWidth: "2px",
    _current: {
      fontWeight: "medium",
      color: "colorPalette.fg",
    },
  },

  variants: {
    variant: {
      minimal: {},
      filled: {
        borderRadius: "l2",
        _hover: {
          bg: "bg.muted",
        },
        _current: {
          color: { base: "colorPalette.fg", _hover: "colorPalette.fg" },
          bg: { base: "colorPalette.subtle", _hover: "colorPalette.subtle" },
        },
      },
      line: {
        borderStartWidth: "1px",
        borderStartColor: "bg.muted",
        _hover: {
          borderStartColor: "bg.emphasized",
        },
        _current: {
          borderStartColor: "colorPalette.fg!",
        },
      },
    },

    size: {
      sm: {
        px: "2",
        py: "1",
      },
      md: {
        px: "4",
        py: "1.5",
      },
    },
  },

  defaultVariants: {
    variant: "minimal",
    size: "md",
  },
})
