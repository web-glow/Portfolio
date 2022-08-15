import {
    Box,
    Center,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    Spacer,
    Text,
    useColorModeValue,
    VStack,
    Wrap,
    WrapItem,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsLinkedin, BsYoutube } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { GoMarkGithub } from "react-icons/go";

import RetroComputer from "./retro-computer";

const HomeContent = ({ history }) => {
    const bg = useColorModeValue("purple.500", "orange.500");
    const bw = useColorModeValue("blackAlpha.600", "blackAlpha.600");
    const btags = useColorModeValue("purple.500", "orange.100");
    const project1 = ["React", "JavaScript", "CSS", "REST API", "NodeJS"];
    const project2 = ["React", "JavaScript", "CSS", "SQL", "XAMPP", "NodeJS"];
    const project3 = [
        "Wix",
        "JavaScript",
        "Google Calendar API",
        "Google Console",
        "Google Service Account",
        "Wix backend",
    ];

    return (
        <Center>
            <VStack
                w="full"
                px="10%"
                id="about"
                minW={{ base: "200px", md: "400px", lg: "500px" }}
                maxW="1100"
                mt="4%"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 2,
                    }}
                >
                    <Box>
                        <RetroComputer />
                    </Box>
                </motion.div>

                <motion.div
                    style={{ margin: "0", padding: "0", width: "100%" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 2,
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

                <Wrap w="full" justifyContent="space-between">
                    <Box>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 2,
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
                    <Spacer />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 2,
                        }}
                    >
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Image
                                borderRadius="full"
                                borderWidth={3}
                                borderColor={bw}
                                borderStyle="solid"
                                boxSize={{
                                    base: "150px",
                                    md: "150px",
                                    lg: "150px",
                                }}
                                src="https://avatars.githubusercontent.com/u/30743890?v=4"
                                alt="Jay Sehmbey"
                            />
                        </motion.div>
                    </motion.div>
                </Wrap>
                <Box w="full" py={4}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 2,
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

                <Box w="full" py={4}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                        }}
                    >
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Heading variant="section-header">History</Heading>
                            {history.map((item, index) => (
                                <Wrap>
                                    <Text key={index} pr={1} fontWeight="bold">
                                        {item.year}
                                    </Text>
                                    <Text key={index}>{item.description} </Text>
                                </Wrap>
                            ))}
                        </motion.div>
                    </motion.div>
                </Box>
                <Box w="full" py={4}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                        }}
                    >
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Heading
                                id="projects"
                                style={{
                                    scrollMarginTop: "50px",
                                }}
                                variant="section-header"
                            >
                                Projects
                            </Heading>

                            <Wrap pt={4} justifyContent="space-between">
                                <WrapItem>
                                    <Image
                                        src="./portal-image.png"
                                        maxW={{ base: "350", lg: "400" }}
                                        borderRadius="lg"
                                    />
                                </WrapItem>
                                <WrapItem
                                    w="60"
                                    flex={1}
                                    justifyContent="center"
                                >
                                    <VStack>
                                        <Heading fontSize={18} pt="5" pb="3">
                                            Stock Market Portal App
                                        </Heading>
                                        <Text flex="1" textAlign="center">
                                            A client-side web-app which allows
                                            users to search from NASDAQ 100
                                            stock list and view more information
                                            about the stock using APIs, charts,
                                            and tables.
                                        </Text>
                                    </VStack>
                                </WrapItem>
                            </Wrap>
                            <Wrap p={3}>
                                {project1.map((item, index) => (
                                    <Heading
                                        key={index}
                                        fontSize={16}
                                        bg={btags}
                                        py={1.8}
                                        px={3}
                                        borderRadius="4"
                                        color="black"
                                    >
                                        {item}
                                    </Heading>
                                ))}
                            </Wrap>
                            <HStack px={3}>
                                <Icon as={BsYoutube} />
                                <Link
                                    color={bg}
                                    href={
                                        "https://www.youtube.com/watch?v=z9wirmpAukQ"
                                    }
                                    target="_blank"
                                >
                                    Demo
                                </Link>

                                <Icon as={GoMarkGithub} />
                                <Link
                                    color={bg}
                                    href={
                                        "https://github.com/web-glow/Stock-Market-Portal-Web-App-"
                                    }
                                    target="_blank"
                                >
                                    Github
                                </Link>
                            </HStack>
                        </motion.div>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Wrap pt={4} justifyContent="space-between">
                            <WrapItem w="60" flex={1} justifyContent="center">
                                <VStack>
                                    <Heading fontSize={18} pt="5" pb="3">
                                        Employee Management System
                                    </Heading>
                                    <Text flex="1" textAlign="center">
                                        A proof-of-concept full stack web-app
                                        for a client C-RES in a university
                                        course. Features included employee
                                        recruitment and onboarding process,
                                        leave management, processing payroll,
                                        announcements, emp vs manager vs admin
                                        access controls.
                                    </Text>
                                </VStack>
                            </WrapItem>
                            <WrapItem>
                                <Image
                                    src="./cres.png"
                                    maxW={{ base: "350", lg: "400" }}
                                    borderRadius="lg"
                                />
                            </WrapItem>
                        </Wrap>
                        <HStack
                            p={3}
                            flex={1}
                            justifyContent="flex-end"
                            flexWrap="wrap"
                        >
                            {project2.map((item, index) => (
                                <Heading
                                    key={index}
                                    fontSize={16}
                                    bg={btags}
                                    py={1.8}
                                    px={3}
                                    borderRadius="4"
                                    color="black"
                                >
                                    {item}
                                </Heading>
                            ))}
                        </HStack>
                        <HStack px={3} flex={1} justifyContent="flex-end">
                            <Icon as={BsYoutube} />
                            <Link
                                color={bg}
                                href={
                                    "https://www.youtube.com/watch?v=vT2dvAGCOJ8"
                                }
                                target="_blank"
                            >
                                Demo
                            </Link>

                            <Icon as={GoMarkGithub} />
                            <Link
                                color={bg}
                                href={"https://github.com/web-glow/IFN711"}
                                target="_blank"
                            >
                                Github
                            </Link>
                        </HStack>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                        }}
                    >
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Wrap
                                pt={4}
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <WrapItem>
                                    <Image
                                        src="./qt.png"
                                        maxW={{ base: "350", lg: "400" }}
                                        borderRadius="lg"
                                        mt={3}
                                    />
                                </WrapItem>
                                <WrapItem
                                    w="60"
                                    flex={1}
                                    justifyContent="center"
                                >
                                    <VStack>
                                        <Heading fontSize={18}>
                                            Event Management System
                                        </Heading>
                                        <Text flex="1" textAlign="center">
                                            As an Intern for{" "}
                                            <Link
                                                color={bg}
                                                href={
                                                    "https://www.brisbanedialogues.org/"
                                                }
                                                target="_blank"
                                            >
                                                {" The Brisbane Dialogues"}
                                            </Link>
                                            , I worked upon their project
                                            <Link
                                                color={bg}
                                                href={
                                                    "https://www.queenslandtalks.com/"
                                                }
                                                target="_blank"
                                            >
                                                {" Queensland Talks "}
                                            </Link>
                                            to create a event management system
                                            where a user can add an event and an
                                            admin can publish, change or delete
                                            that event. Also created a feature
                                            to search and display all the
                                            upcoming events with different
                                            filters.
                                        </Text>
                                    </VStack>
                                </WrapItem>
                            </Wrap>
                            <Wrap p={3}>
                                {project3.map((item, index) => (
                                    <Heading
                                        key={index}
                                        fontSize={16}
                                        bg={btags}
                                        py={1.8}
                                        px={3}
                                        borderRadius="4"
                                        color="black"
                                    >
                                        {item}
                                    </Heading>
                                ))}
                            </Wrap>
                            <HStack px={3}>
                                <Icon as={CgWebsite} />
                                <Link
                                    color={bg}
                                    href={
                                        "https://github.com/web-glow/Stock-Market-Portal-Web-App-"
                                    }
                                    target="_blank"
                                >
                                    Queensland Talks Website
                                </Link>
                            </HStack>
                        </motion.div>
                    </motion.div>
                </Box>

                <Box id="contacts" w="full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                        }}
                    >
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Heading variant="section-header">
                                Social Media
                            </Heading>

                            <Box>
                                <HStack px={5} py={2}>
                                    <Icon as={BsYoutube} w={6} h={6} />
                                    <Link
                                        color={bg}
                                        href={
                                            "https://www.youtube.com/channel/UCjjszrF77-vrupCHthZw5vQ"
                                        }
                                        target="_blank"
                                    >
                                        <Text fontWeight="Bold" fontSize="20">
                                            {"@Jaskaran"}
                                        </Text>
                                    </Link>
                                </HStack>
                                <HStack px={5} py={2}>
                                    <Icon as={GoMarkGithub} w={6} h={6} />
                                    <Link
                                        color={bg}
                                        href={"https://github.com/web-glow"}
                                        target="_blank"
                                    >
                                        <Text fontWeight="Bold" fontSize="20">
                                            {"@web-glow"}
                                        </Text>
                                    </Link>
                                </HStack>
                                <HStack px={5} py={2}>
                                    <Icon as={BsLinkedin} w={6} h={6} />
                                    <Link
                                        color={bg}
                                        href={
                                            "https://www.linkedin.com/in/jaskaran-singh-sehmbey-8009ab156/"
                                        }
                                        target="_blank"
                                    >
                                        <Text fontWeight="Bold" fontSize="20">
                                            {"@Jaskaran (Jay) Singh Sehmbey"}
                                        </Text>
                                    </Link>
                                </HStack>
                            </Box>
                        </motion.div>
                    </motion.div>
                </Box>
            </VStack>
        </Center>
    );
};

export default HomeContent;
