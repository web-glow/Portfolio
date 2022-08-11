import { VStack } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/nav-bar";
import Home from "./pages/home";
import { useRef } from "react";

//personal info

const App = () => {
    return (
        <div>
            <Home />
        </div>
    );
};

export default App;
