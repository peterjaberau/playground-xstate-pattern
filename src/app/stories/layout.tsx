import "@tileryjs/react/style.css"
import { Flex } from "@chakra-ui/react"
import { Provider as ChakraProvider } from "../provider"


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <Flex m="0" maxW="full" p="2.5" h="100dvh" minH="0" gap="2.5" bg="bg" direction={"row"}>
        {children}
      </Flex>
    </ChakraProvider>
  )
}
