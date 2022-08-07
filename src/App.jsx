import { VStack } from "@chakra-ui/react";
import NavBar from "./components/nav-bar";
import HomePage from "./pages/home-page";
//personal info

const App = () => {
    const history = [
        {
            year: "1999 - 2000",
            description: "Born baby",
        },
        {
            year: "2000 - 2022",
            description: "khali deemag",
        },
    ];

    return (
        <VStack spacing={4} align="stretch" display="flex">
            <NavBar />
            <HomePage history={history} />
        </VStack>
    );
};

export default App;
