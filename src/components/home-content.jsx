import { StarIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

import {
    Box,
    Center,
    Heading,
    Image,
    Link,
    Text,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import RetroComputer from "./retro-computer";

const HomeContent = ({ history }) => {
    const bg = useColorModeValue("purple.500", "orange.500");
    const bw = useColorModeValue("blackAlpha.600", "white");

    return (
        <Center>
            <VStack w="full" px="10%" minW="500" maxW="1050" mt="4%">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.2,
                    }}
                >
                    <Box>
                        <RetroComputer />
                    </Box>
                </motion.div>

                <motion.div
                    style={{ margin: "0", padding: "0", width: "100%" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.4,
                    }}
                >
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Box
                            w="full"
                            borderRadius="lg"
                            bg={bg}
                            p={3}
                            mb={6}
                            align="center"
                            color="black"
                        >
                            Hi, I'm a Software Developer in Australia!
                        </Box>
                    </motion.div>
                </motion.div>

                <Box w="full" display="flex" justifyContent="space-between">
                    <Box>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay: 0.6,
                            }}
                        >
                            <motion.div whileHover={{ scale: 1.2 }}>
                                <Text fontSize="5xl"> Jay Sehmbey</Text>
                                <Text fontSize="lg">
                                    {"23 (Developer / Designer / Analyst)"}
                                </Text>
                            </motion.div>
                        </motion.div>
                    </Box>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.6,
                        }}
                    >
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Image
                                borderRadius="full"
                                borderWidth={3}
                                borderColor={bw}
                                borderStyle="solid"
                                boxSize="150px"
                                src="https://avatars.githubusercontent.com/u/30743890?v=4"
                                alt="Jay Sehmbey"
                            />
                        </motion.div>
                    </motion.div>
                </Box>
                <Box w="full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.8,
                        }}
                    >
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Heading variant="section-header">Bio</Heading>
                            <Text>
                                Jay is a young passionate IT post-grad who loves
                                programming and designing. He is aspiring to be
                                a software developer and loves to research, plan
                                and execute solutions to various problems with
                                good coding and design practices.
                            </Text>
                        </motion.div>
                    </motion.div>
                </Box>
                <Box w="full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}
                    >
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Heading variant="section-header">History</Heading>
                            {history.map((item, index) => (
                                <Text key={index}>
                                    {" "}
                                    {item.year} | {item.description}{" "}
                                </Text>
                            ))}
                        </motion.div>
                    </motion.div>
                </Box>
                <Box w="full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}
                    >
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Heading variant="section-header">Projects</Heading>

                            <Text></Text>
                        </motion.div>
                    </motion.div>
                </Box>
                <Box w="full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}
                    >
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Heading variant="section-header">
                                Social Media
                            </Heading>

                            <Text>
                                <StarIcon />{" "}
                                <Link color={bg} href={"www.google.com"}>
                                    {"@JaySehmbey"}
                                </Link>
                            </Text>
                        </motion.div>
                    </motion.div>
                </Box>
            </VStack>
        </Center>
    );
};

export default HomeContent;
