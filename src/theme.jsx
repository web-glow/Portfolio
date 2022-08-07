import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
    initialColorMode: "system",
    useSystemColorMode: false,
};

const styles = {
    global: (props) => ({
        body: {
            bg: mode("#f0e7db", "#202023")(props),
        },
    }),
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

const theme = extendTheme({ config, components, styles });

export default theme;
