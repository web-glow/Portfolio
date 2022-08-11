import { VStack } from "@chakra-ui/react";
import NavBar from "../components/nav-bar";
import HomeContent from "../components/home-content";
//personal info

const Home = () => {
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
            <HomeContent history={history} />
        </VStack>
    );
};
export default Home;
