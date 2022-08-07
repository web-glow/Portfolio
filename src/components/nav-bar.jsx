import {
    Box,
    Flex,
    Text,
    Spacer,
    HStack,
    Button,
    Container,
    Heading,
    Link,
} from "@chakra-ui/react";
import ThemeToggleButton from "./theme-toggle-button";
const NavBar = () => {
    return (
        <Box
            css={{ backdropFilter: "blur(10px)" }}
            zIndex={2}
            display="flex"
            alignContent="center"
            alignItems="center"
            py={2}
            px={{ base: "6%", md: "18%" }}
        >
            <Heading fontSize={{ base: "18px", md: "27px", lg: "40px" }}>
                Jay Sehmbey
            </Heading>
            <HStack pl={5} display={{ base: "none", md: "flex" }}>
                <Button colorScheme="teal" variant="ghost" isActive={true}>
                    Home
                </Button>
                <Button colorScheme="teal" variant="ghost">
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
