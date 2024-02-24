import { useState } from "react";
import Navbar from "./Pages/Navbar";
import { ThemeContext } from "./Context/ThemeContextApi";
import { BgContainer } from "./App.StyledComponents";
import "./App.css";
import Intro from "./Pages/Intro";
// import AboutMe from "./Pages/About_Me";

const App = () => {
    const [dark, setDark] = useState(false);

    return (
        <ThemeContext.Provider value={{ dark, setDark }}>
            <BgContainer theme={dark}>
                <Navbar />
                <Intro />
                {/* <AboutMe /> */}
            </BgContainer>
        </ThemeContext.Provider>
    );
};

export default App;
