import { VStack } from "@chakra-ui/react";
import NavBar from "../components/nav-bar";
import HomeContent from "../components/home-content";
//personal info

const Home = () => {
    const history = [
        {
            year: "1999",
            description: "Born in Chandigarh, India",
        },
        {
            year: "2017",
            description: "Finished Secondary School.",
        },
        {
            year: "2017 - 2020",
            description:
                "Bachelor of Information Technology - University of Queensland, Australia.",
        },
        {
            year: "2020 - 2022",
            description:
                "Master of Information Technology - Queensland University of Technology, Australia.",
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
