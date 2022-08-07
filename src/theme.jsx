import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "system",
    useSystemColorMode: false,
};

const components = {
    Heading: {
        variants: {
            "section-header": {
                textDecoration: "underline",
                fontSize: 30,
                textUnderlineOffset: 6,
                textDecorationColor: "#525252",
                textDecorationThickness: 5,
                marginTop: 3,
                marginBottom: 4,
            },
        },
    },
};

const theme = extendTheme({ config, components });

export default theme;
