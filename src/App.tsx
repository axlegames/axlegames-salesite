import { ChakraProvider, theme, Flex, Box } from "@chakra-ui/react";
import { brandingColors } from "./config/brandingColors";
import AxleInfo from "./pages/Axle/views/AxleInfo";
// import NFTs from "./pages/Axle/views/Nfts";
import UtilityGrid from "./pages/Axle/views/UtilityGrid";
import WhitePaper from "./pages/Axle/views/WhitePaper";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bg={brandingColors.bgColor}>
      <Flex
        direction={"column"}
        rowGap="1rem"
        fontFamily={"quicksand"}
        width={{ base: "100%", md: "90%", lg: "92%", xl: "80%", "2xl": "65%" }}
        margin="auto"
      >
        <AxleInfo />
        {/* <NFTs /> */}
        <UtilityGrid />
        <WhitePaper />
      </Flex>
    </Box>
  </ChakraProvider>
);
