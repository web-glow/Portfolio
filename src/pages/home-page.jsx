import {
    Box,
    Center,
    useColorModeValue,
    Text,
    Heading,
    AccordionButton,
    Link,
    Accordion,
    AccordionItem,
    AccordionPanel,
    Icon,
    Image,
    VStack,
    ComponentStyleConfig,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const HomePage = ({ history }) => {
    const bg = useColorModeValue("teal.500", "teal.200");
    const bw = useColorModeValue("blackAlpha.600", "white");

    return (
        <Center>
            <VStack w="full" px="10%" minW="400" maxW="1200" mt="4%">
                <Box
                    borderRadius="lg"
                    bg={bg}
                    w="100%"
                    p={3}
                    mb={6}
                    mx={100}
                    align="center"
                    color="black"
                >
                    Hello, I'm a Web Developer in Australia!
                </Box>

                <Box w="full" display="flex" justifyContent="space-between">
                    <Box>
                        <Text fontSize="5xl"> Jay Sehmbey</Text>
                        <Text fontSize="lg">
                            {"23 (Developer / Designer / Analyst)"}
                        </Text>
                    </Box>
                    <Image
                        borderRadius="full"
                        borderWidth={3}
                        borderColor={bw}
                        borderStyle="solid"
                        boxSize="150px"
                        src="https://avatars.githubusercontent.com/u/30743890?v=4"
                        alt="Jay Sehmbey"
                    />
                </Box>
                <Box w="full">
                    <Heading variant="section-header">Bio</Heading>
                    <Text>
                        A young passionate IT post-grad who loves coding and
                        designing. Aspire to be a web developer or game
                        developer. A young passionate IT post-grad who loves
                        coding and designing. Aspire to be a web developer or
                        game developer. A young passionate IT post-grad who
                        loves coding and designing. Aspire to be a web developer
                        or game developer.
                    </Text>
                </Box>
                <Box w="full">
                    <Heading variant="section-header">History</Heading>
                    {history.map((item) => (
                        <Text>
                            {" "}
                            {item.year} | {item.description}{" "}
                        </Text>
                    ))}
                </Box>
                <Box w="full">
                    <Heading variant="section-header">Social Media</Heading>

                    <Text>
                        <StarIcon />{" "}
                        <Link color="teal.500" href={"www.google.com"}>
                            {"@JaySehmbey"}
                        </Link>
                    </Text>
                </Box>

                {/* <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                        <AccordionButton></AccordionButton>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion> */}
            </VStack>
        </Center>
    );
};

export default HomePage;
