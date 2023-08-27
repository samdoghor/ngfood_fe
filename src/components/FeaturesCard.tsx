import { Box, Text, chakra } from "@chakra-ui/react";
import { MdFingerprint } from "react-icons/md";
import { features } from "../constants/features";

const FeaturesCard = () => {
  return (
    <>
      <Box
        w={"100%"}
        minH={"100vh"}
        bgGradient={"linear(to-r, green.900, green.800,  green.900)"}
        id="features"
      >
        <Box px={{ base: "1rem", lg: "8rem" }} py={"8rem"}>
          <Text
            fontSize={"2.4rem"}
            color={"ngGreenlight"}
            fontWeight={"900"}
            fontFamily={"overpass"}
            display={"flex"}
          >
            <chakra.span pr={"1rem"} fontSize={"3rem"}>
              <MdFingerprint />
            </chakra.span>
            Features
          </Text>
          <Box
            color={"ngOffwhite"}
            textAlign={"left"}
            fontSize={"1.1rem"}
            pt={"1rem"}
          >
            <Text
              lineHeight={"1.8rem"}
              letterSpacing={".08rem"}
              fontFamily={"albertSans"}
            >
              Fuel Your Culinary Creativity! Tailored for developers, chefs,
              bakers, and more, the Nigeria Food Database API is your portal to
              authentic flavors and vital nutritional insights. Elevate your
              creations while celebrating Nigeria's diverse culinary heritage.
            </Text>
          </Box>

          <Box pt={"6rem"}>
            <Box
              display={"grid"}
              gridGap={"8"}
              gridTemplateColumns={{
                lg: "repeat(3, 1fr)",
                md: "repeat(2, 1fr)",
              }}
            >
              {features.map((features, index) => (
                <Box
                  backgroundColor={"ngDarkgreen"}
                  p={"1.8rem"}
                  rounded={"1rem"}
                  boxShadow="2xl"
                  key={index}
                >
                  <Text
                    color={"ngGreenlight"}
                    fontSize={"1.2rem"}
                    pb={"1rem"}
                    fontFamily={"heebo"}
                    letterSpacing={".2rem"}
                    fontWeight={700}
                  >
                    {features.title}
                  </Text>
                  <Text
                    color={"white"}
                    fontFamily={"albertSans"}
                    letterSpacing={".1rem"}
                    fontSize={".9rem"}
                  >
                    {features.details}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FeaturesCard;
