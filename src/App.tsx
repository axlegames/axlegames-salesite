import { ChakraProvider, theme, Flex, Box, Text } from "@chakra-ui/react";
import { brandingColors } from "./config/brandingColors";
import AxleInfo from "./pages/Axle/views/AxleInfo";
import UtilityGrid from "./pages/Axle/views/UtilityGrid";
import WhitePaper from "./pages/Axle/views/WhitePaper";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Token from "./pages/Axle/views/Token";
import Banner from "./pages/Axle/dialog/Banner";

export const App = () => {
  const [banner, setBanner] = useState(true);

  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Box
        bg={brandingColors.bgColor}
        backgroundImage={`https://axlegames.s3.ap-south-1.amazonaws.com/assets/bg/token_countdown_bg.png`}
        backgroundSize="contain"
      >
        <Marquee
          gradientWidth={0}
          speed={50}
          style={{
            background: brandingColors.newHighlightColor,
            fontFamily: `'quicksand', sans-serif`,
            color: brandingColors.secondaryTextColor,
            padding: ".5vh 0",
            fontWeight: "bold",
          }}
        >
          <Flex columnGap={"1rem"}>
            <Text>• Zeus sale is live now, Buy $AXLE and get +25% Bonus</Text>
            <Text>• Refer and Earn 5% Bonus $AXLE tokens</Text>
            <Text>• First 100 Buyers {`>`}= 1 BNB will get a Zeus NFT</Text>
            <Text>• Zeus sale is live now, Buy $AXLE and get +25% Bonus</Text>
            <Text>• Refer and Earn 5% Bonus $AXLE tokens</Text>
            <Text>• First 100 Buyers {`>`}= 1 BNB will get a Zeus NFT</Text>
          </Flex>
        </Marquee>
        <Banner close={() => setBanner(false)} isOpen={banner} size="xl" />
        <AxleInfo />
        <Flex
          direction={"column"}
          rowGap="1rem"
          fontFamily={"quicksand"}
          width={{
            base: "100%",
            md: "90%",
            lg: "92%",
            xl: "80%",
            "2xl": "65%",
          }}
          margin="auto"
        >
          <Token />
          <UtilityGrid />
          <WhitePaper />
        </Flex>
      </Box>
    </ChakraProvider>
  );
};
