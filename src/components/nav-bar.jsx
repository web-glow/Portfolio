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
} from "@chakra-ui/react";
import ThemeToggleButton from "./theme-toggle-button";
import { Link } from "react-router-dom";

const NavBar = () => {
    const activeColor = useColorModeValue("purple.500", "orange.200");

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

            <Spacer />
            <HStack pr={5} display={{ base: "none", md: "flex" }}>
                <Button
                    variant="ghost"
                    _active={{ bg: activeColor, color: "black" }}
                >
                    About
                </Button>
                <Button
                    variant="ghost"
                    _active={{ bg: activeColor, color: "black" }}
                >
                    Projects
                </Button>
            </HStack>

            <ThemeToggleButton />

            <Box display={{ md: "none" }}>noaihs</Box>
        </Box>
    );
};

export default NavBar;
