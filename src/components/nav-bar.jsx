import {
    Box,
    Flex,
    Text,
    useColorModeValue,
    Spacer,
    HStack,
    Button,
    Container,
    Heading,
    Link,
} from "@chakra-ui/react";
import ThemeToggleButton from "./theme-toggle-button";
const NavBar = () => {
    const activeColor = useColorModeValue("teal.500", "teal.200");

    return (
        <Box
            position="fixed"
            w="full"
            css={{ backdropFilter: "blur(10px)" }}
            zIndex={2}
            display="flex"
            alignContent="center"
            alignItems="center"
            py={2}
            px={{ base: "6%", md: "18%" }}
        >
            <Heading fontSize={{ base: "18px", md: "27px", lg: "20px" }}>
                Jay Sehmbey
            </Heading>

            <HStack pl={5} display={{ base: "none", md: "flex" }}>
                <Button
                    variant="ghost"
                    _active={{ bg: activeColor, color: "black" }}
                    isActive={true}
                >
                    Home
                </Button>
                <Button
                    colorScheme="teal"
                    variant="ghost"
                    _active={{ bg: activeColor, color: "black" }}
                >
                    Projects
                </Button>
            </HStack>

            <Spacer />

            <ThemeToggleButton />

            <Box display={{ md: "none" }}>noaihs</Box>
        </Box>
    );
};

export default NavBar;
