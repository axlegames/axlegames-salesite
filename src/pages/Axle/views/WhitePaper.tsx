import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { brandingColors } from "../../../config/brandingColors";

import NeuButton from "../component/NeuButton";

const WhitePaper = (props: any) => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      rowGap={"8rem"}
      color={brandingColors.secondaryTextColor}
      p={{ base: "4" }}
      fontWeight="bold"
    >
      <Flex
        alignItems={"center"}
        columnGap={"2rem"}
        rowGap={"1rem"}
        direction={{ base: "column", xl: "row" }}
      >
        <Box borderRadius="xl">
          <Image
            width={{ base: "32", lg: "64" }}
            src={`https://axlegames.s3.ap-south-1.amazonaws.com/assets/gamein/whitepaper.png`}
            m={4}
            data-aos={`fade-left`}
          />
        </Box>
        <Flex
          data-aos={`fade-right`}
          p={4}
          borderRadius="xl"
          rowGap={".5rem"}
          direction={"column"}
        >
          <Text
            fontFamily={`'Russo One', sans-serif`}
            color={brandingColors.primaryTextColor}
            fontSize={{ base: "xl", lg: "3xl" }}
          >
            A well-designed Deflationary token model
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }}>
            Axle games tokenomics is designed to create solid, reliable and
            attractive ways for users to benefit from the platform.
          </Text>
          <Box columnGap={"1rem"} display={"flex"} mt={3}>
            <Box>
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: "100%" }}
                href="https://axlegames.s3.ap-south-1.amazonaws.com/AxleGames_EconomicsPaper.pdf"
              >
                <NeuButton
                  onClick={() => {}}
                  bg={"#A34400"}
                  shadow={"#FF7C1F"}
                  label={`Economics Paper`}
                ></NeuButton>
              </a>
            </Box>
            <Box>
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: "100%" }}
                href="https://whitepaper.axlegames.io/"
              >
                <NeuButton
                  onClick={() => {}}
                  bg={"#A34400"}
                  shadow={"#FF7C1F"}
                  label={`White Paper`}
                ></NeuButton>
              </a>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default WhitePaper;
