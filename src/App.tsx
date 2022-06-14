import * as React from "react"
import Input from "./components/TestimonialItem"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import TestimonialItem from "./components/TestimonialItem"


export const App = () => (
  <ChakraProvider theme={theme}>
  <TestimonialItem/>
  </ChakraProvider>
)
