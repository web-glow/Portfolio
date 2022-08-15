import { DownloadIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Heading,
    Link,
    Spacer,
    Text,
    useColorModeValue,
    Wrap,
} from "@chakra-ui/react";
import ThemeToggleButton from "./theme-toggle-button";

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
            <Wrap pr={5}>
                <Link href={"#about"} textDecoration="none">
                    <Button
                        display={{ base: "none", md: "flex" }}
                        variant="ghost"
                        _active={{ bg: activeColor, color: "black" }}
                    >
                        About
                    </Button>
                </Link>
                <Link href={"#projects"} textDecoration="none">
                    <Button
                        display={{ base: "none", md: "flex" }}
                        variant="ghost"
                        _active={{ bg: activeColor, color: "black" }}
                    >
                        Projects
                    </Button>
                </Link>
                <Link href={"#contacts"} textDecoration="none">
                    <Button
                        display={{ base: "none", md: "flex" }}
                        variant="ghost"
                        _active={{ bg: activeColor, color: "black" }}
                    >
                        Contact
                    </Button>
                </Link>
                <Link
                    href={"./Jaskaran-resume.pdf"}
                    target="_blank"
                    textDecoration="none"
                >
                    <Button
                        variant="solid"
                        colorScheme="teal"
                        _active={{ bg: activeColor, color: "black" }}
                    >
                        <DownloadIcon />
                        <Text>{"Resumé"}</Text>
                    </Button>
                </Link>
            </Wrap>

            <ThemeToggleButton />
        </Box>
    );
};

export default NavBar;
