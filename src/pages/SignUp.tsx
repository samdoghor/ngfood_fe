import {
  Box,
  Text,
  Input,
  Stack,
  Button,
  InputGroup,
  InputRightElement,
  FormControl,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi";

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

const textVariant2 = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 1,
    },
  },
};

const SignUp = () => {
  useEffect(() => {
    document.title = "Sign Up | NIFODA ";
  }, []);

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <Box>
        <Box w={"100%"} minH={"100vh"}>
          <Box px={{ base: "1rem", lg: "8rem" }} py={"8rem"}>
            <Box
              display={"grid"}
              overflow={"hidden"}
              gridTemplateColumns={{
                md: "repeat(2, 1fr)",
              }}
            >
              <Box p={"1.5rem"}>
                <Text
                  viewport={{ once: true }}
                  as={motion.p}
                  fontSize={"2.4rem"}
                  color={"green.900"}
                  fontWeight={"900"}
                  fontFamily={"overpass"}
                  display={"flex"}
                  variants={textVariant}
                  initial="initial"
                  whileInView="animate"
                >
                  Sign Up.
                </Text>

                <Text
                  textColor={"black"}
                  fontSize={"1.2rem"}
                  pt={"1rem"}
                  lineHeight={"2rem"}
                  overflow={"hidden"}
                >
                  Please share some of your details with us so that we can
                  authorize your access to the Nigeria Food Database API
                  (NIFODA).
                </Text>
                <FormControl>
                  <Stack spacing={2} pt={"2rem"} overflow={"hidden"}>
                    <Text fontWeight={600} fontSize={"1.2rem"} pt={"1.2rem"}>
                      First name
                    </Text>
                    <Input placeholder="First Name" size="lg" type="text" />
                    <Text fontWeight={600} fontSize={"1.2rem"} pt={"1.2rem"}>
                      Last name
                    </Text>
                    <Input placeholder="Last Name" size="lg" type="text" />
                    <Text fontWeight={600} fontSize={"1.2rem"} pt={"1.2rem"}>
                      Email address
                    </Text>
                    <Input placeholder="Email address" size="lg" type="email" />
                    <Text fontWeight={600} fontSize={"1.2rem"} pt={"1.2rem"}>
                      Password
                    </Text>
                    <InputGroup size="lg">
                      <Input
                        pr="4.5rem"
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                      />
                      <InputRightElement width="4.5rem">
                        <Button
                          size="lg"
                          onClick={handleClick}
                          fontSize={"2rem"}
                          backgroundColor={"green.800"}
                          textColor={"white"}
                          roundedRight={"md"}
                          _hover={{
                            backgroundColor: "green.900",
                            textColor: "gray.300",
                          }}
                        >
                          {show ? <PiEyeBold /> : <PiEyeClosedBold />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>

                    <Button
                      mt={"2rem"}
                      backgroundColor={"green.800"}
                      textColor={"white"}
                      _hover={{
                        backgroundColor: "green.900",
                        textColor: "gray.300",
                      }}
                      size="lg"
                      as={motion.button}
                      viewport={{ once: true }}
                      variants={textVariant2}
                      initial="initial"
                      whileInView="animate"
                    >
                      Create Account
                    </Button>
                  </Stack>
                </FormControl>
              </Box>
              <Box
                backgroundImage="url('/img/nigeria_flag_2.png')"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize={"cover"}
                textAlign={"left"}
                fontSize={"1.1rem"}
                pt={"1rem"}
                display={{ base: "none", md: "block" }}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
