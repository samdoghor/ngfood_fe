import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { AboutContent } from "../constants/about";
import GetAPI from "../components/GetAPI";
import { motion } from "framer-motion";

const textVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 2,
    },
  },
};

const About = () => {
  useEffect(() => {
    document.title = "About | NIFDA";
  }, []);

  return (
    <>
      <Box>
        <Box w={"100%"} minH={"100vh"} bg="gray.100" id="tryit">
          <Box px={{ base: "1rem", lg: "8rem" }} py={"4rem"}>
            <Box>
              <Text
                fontSize={"2.4rem"}
                color={"ngDarkblue"}
                fontWeight={"900"}
                fontFamily={"overpass"}
                display={"flex"}
                mt={"4rem"}
                as={motion.p}
                viewport={{ once: true }}
                variants={textVariant}
                initial="initial"
                whileInView="animate"
              >
                About
              </Text>
              {AboutContent.map((about, index) => (
                <>
                  <Text
                    key={index}
                    fontFamily={"albertSans"}
                    letterSpacing={".1rem"}
                    fontSize={"1.2rem"}
                    fontWeight={"500"}
                    lineHeight={"2rem"}
                    as={motion.p}
                    viewport={{ once: true }}
                    variants={textVariant}
                    initial="initial"
                    whileInView="animate"
                  >
                    <Text py={"1rem"} pe={{ lg: "20rem" }}>
                      {about.p1}
                    </Text>
                    <Text py={"1rem"} pe={{ lg: "20rem" }}>
                      {about.p2}
                    </Text>
                    <Text py={"1rem"} pe={{ lg: "20rem" }}>
                      {about.p3}
                    </Text>
                  </Text>
                </>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Get API Key */}
        <GetAPI />
      </Box>
    </>
  );
};

export default About;
