import { useEffect, useState } from "react";
import Navbar from "./Pages/Navbar";
import { ThemeContext } from "./Context/ThemeContextApi";
import { BgContainer } from "./App.StyledComponents";
import Intro from "./Pages/Intro";
import AboutMe from "./Pages/About_Me";
import "./App.css";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";
import Work from "./Pages/Work";
import Testimonials from "./Pages/Testimonials";

const App = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            // User prefers dark mode
            setDark(true);
        } else {
            // User prefers light mode
            setDark(false);
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ dark, setDark }}>
            <BgContainer theme={dark}>
                <Navbar />
                <Intro />
                <AboutMe />
                <Skills />
                <Experience />
                <Work />
                <Testimonials />
            </BgContainer>
        </ThemeContext.Provider>
    );
};

export default App;
