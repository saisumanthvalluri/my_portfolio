import { SiJirasoftware } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { FaAngular, FaCss3Alt, FaHtml5, FaReact, FaNodeJs, FaSass, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import iLDark from "../Assets/Img/Logos/IL-Logo-dark.svg";
import ilLight from "../Assets/Img/Logos/Logo.svg";
import figma from "../Assets/Img/Skills/icon-figma.svg";
import jobbyapp from "../Assets/Img/ProjectsHomePages/Jobby-app.png";
import nxtTrenz from "../Assets/Img/ProjectsHomePages/NxtTrenz-app.png";
import nexWatch from "../Assets/Img/ProjectsHomePages/NxtWatch-app.png";
import tastyKitchens from "../Assets/Img/ProjectsHomePages/TastyKitchens.png";

export const Config_Vars = Object.freeze({
    testimonials: [
        {
            id: 1,
            avatarUrl: null,
            name: "Jhon Deo",
            specilization: "Founder XYZ.com",
            description:
                "“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”",
        },
        {
            id: 2,
            avatarUrl: null,
            name: "Jhon Deo",
            specilization: "Founder XYZ.com",
            description:
                "“Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.”",
        },
        {
            id: 3,
            avatarUrl: null,
            name: "Jhon Deo",
            specilization: "Founder XYZ.com",
            description:
                "“Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.”",
        },
    ],

    experiences: [
        {
            id: 1,
            companyLogoLight: ilLight,
            companyLogoDark: iLDark,
            Specialization: "Team Lead",
            specializationPoints: [
                { id: 1, pointText: "Acted as team lead in different projects." },
                { id: 2, pointText: "Brainstormed new ideas & gathered requirements for internal projects." },
                { id: 3, pointText: "Worked on enterprise-level projects for a variety of clients." },
                { id: 4, pointText: "Handled sprint planning & task distribution." },
            ],
            timePeriod: "Aug 2023 - Present",
        },
        {
            id: 2,
            companyLogoLight: ilLight,
            companyLogoDark: iLDark,
            Specialization: "Full Stack Developer",
            specializationPoints: [
                { id: 1, pointText: "Worked as a full stack developer (React / Angular / Fast API)" },
            ],
            timePeriod: "Sep 2022 - Aug 2023",
        },
    ],

    aboutText: {
        text1: "I'm a passionate, self-proclaimed Front-end who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.",
        text2: "I began my journey as a web developer in 2022, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 2 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, ReactJs, TypeScript, and much more.",
        text3: "I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.",
        text4: "When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on",
        text5: "where I share tech-related bites and build in public, or you can follow me on",
        text6: `One last thing, I'm available for freelance work, so feel free to reach out and say hello! I
        promise I don't bite 😉`,

        quickBites: [
            { id: 1, text: "B.Tech in Mechanical Engineering" },
            { id: 2, text: "Avid learner" },
            { id: 3, text: "Full time freelancer" },
            { id: 4, text: "Aspiring indie hacker" },
        ],
    },

    introText: `I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally
        designing) exceptional digital experiences that are fast, accessible, visually appealing, and
        responsive. Even though I have been creating web applications for over 2 years, I still love it
        as if it was something new.`,

    skills: [
        {
            id: 1,
            type: "default",
            icon: SiJavascript,
            name: "Javascript",
            color: "#f5de07",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
            id: 2,
            type: "default",
            icon: SiTypescript,
            name: "Typescript",
            color: "#0ba5d9",
            url: "https://www.typescriptlang.org/",
        },
        {
            id: 3,
            type: "default",
            icon: FaReact,
            name: "React",
            color: "#0f84ab",
            url: "https://react.dev/",
        },
        {
            id: 4,
            type: "default",
            icon: FaAngular,
            name: "Angular",
            color: "#e62044",
            url: "https://angular.io/start",
        },
        {
            id: 5,
            type: "toggle",
            icon: { dark: TbBrandNextjs, light: SiNextdotjs },
            name: "Next.js",
            color: { dark: "#fff", light: "#000" },
            url: "https://nextjs.org/",
        },
        {
            id: 6,
            type: "default",
            icon: FaNodeJs,
            name: "Node.js",
            color: "#159923",
            url: "https://nodejs.org/en",
        },
        {
            id: 7,
            type: "colorToggle",
            icon: SiExpress,
            name: "Express",
            color: { dark: "#fff", light: "#000" },
            url: "https://expressjs.com/",
        },
        {
            id: 8,
            type: "img",
            icon: figma,
            name: "Figma",
            url: "https://www.figma.com/",
        },
        {
            id: 9,
            type: "default",
            icon: FaSass,
            name: "SASS/SCSS",
            color: "#c73aa8",
            url: "https://sass-lang.com/",
        },
        {
            id: 10,
            type: "default",
            icon: FaGitAlt,
            name: "Git",
            color: "#f74d0a",
            url: "https://git-scm.com/",
        },
        {
            id: 11,
            type: "default",
            icon: SiJirasoftware,
            name: "Jira",
            color: "#23a3e8",
            url: "https://www.atlassian.com/software",
        },
        {
            id: 12,
            type: "default",
            icon: SiFastapi,
            name: "Fast API",
            color: "#16d987",
            url: "https://fastapi.tiangolo.com/",
        },
        {
            id: 13,
            type: "default",
            icon: FaHtml5,
            name: "HTML5",
            color: "#e63029",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
            id: 14,
            type: "default",
            icon: FaCss3Alt,
            name: "CSS",
            color: "#18a7db",
            url: "https://developer.mozilla.org/en-US/docs/Web/css",
        },
    ],

    works: [
        {
            id: 1,
            direction: "row",
            url: "https://sumanthjobbyapp.ccbp.tech/",
            projectHomePage: {
                homePageImg: jobbyapp,
                borderRadius: "12px 0 0 12px",
            },
            detail: {
                name: "Jobby App",
                borderRadius: "0 12px 12px 0",
                description: `A Platform revolutionizes job searching, offering advanced filters for package, work type, and
                employer ratings. The intuitive interface streamlines the process, providing users a seamless,
                tailored job-hunting experience. Enhancing transparency, it empowers individuals to find ideal
                opportunities effortlessly.`,
                "U&P": "Username: rahul, Password: rahul@2021",

                technologies: [
                    { id: 1, name: "React" },
                    { id: 2, name: "Javascript" },
                    { id: 3, name: "Firebase" },
                    { id: 4, name: "Styled Components" },
                    { id: 5, name: "Authentication" },
                    { id: 6, name: "Authorization" },
                ],
            },
        },
        {
            id: 2,
            direction: "row-reverse",
            url: "https://ntrendsumanth.ccbp.tech/",
            projectHomePage: {
                homePageImg: nxtTrenz,
                borderRadius: "0 12px 12px 0",
            },
            detail: {
                name: "NxtTrendz (Flipkart / Amazon)",
                borderRadius: "12px 0 0 12px",
                description: `A Platform for robust shopping app similar to Flipkart/Amazon, offering diverse products with
                refined filters for easy navigation. The user-friendly cart and secure login system enhance the
                purchasing experience, with exclusive deals for prime members on a responsive platform. My
                project combines versatility, user convenience, and exclusive benefits for a seamless shopping
                journey.`,
                /* I've crafted an all-encompassing shopping application akin to Flipkart/Amazon, offering a
                diverse range of products from clothing, toys, electronics, groceries to appliances. The
                platform boasts refined filters for seamless navigation, categorizing items and allowing users
                to filter by rating. With a user-friendly cart feature, customers can effortlessly manage their
                purchases. The inclusion of a secure register and login system ensures a personalized
                experience, distinguishing between prime and non-prime users. Prime members enjoy exclusive
                deals, all presented through a responsive design for optimal user interaction. This project
                epitomizes a comprehensive and user-centric shopping experience. */
                "U&P": "Username: rahul, Password: rahul@2021",

                technologies: [
                    { id: 1, name: "React" },
                    { id: 2, name: "Javascript" },
                    { id: 3, name: "Firebase" },
                    { id: 4, name: "Styled Components" },
                    { id: 5, name: "Authentication" },
                    { id: 6, name: "Authorization" },
                    { id: 7, name: "Context API" },
                ],
            },
        },
        {
            id: 3,
            direction: "row",
            url: "https://nwatchsumanth.ccbp.tech/",
            projectHomePage: {
                homePageImg: nexWatch,
                borderRadius: "12px 0 0 12px",
            },

            detail: {
                name: "NXTWatch (YouTube)",
                borderRadius: "0 12px 12px 0",
                description: `A platform for immersive video experiences, my YouTube-inspired app provides user
                authentication, personalized sections, and a unique toggle theme for seamless transitions
                between Dark and Light modes. Users can effortlessly save and like videos in this dynamic and
                responsive platform.`,
                /* A platform for immersive video experiences, my YouTube-inspired app provides user
                authentication, video watching, and a powerful search function. With personalized sections such
                as Home, Trending, Gaming, and Saved Videos, users can effortlessly save and like videos. The
                unique toggle theme ensures a seamless transition between Dark and Light modes, enhancing the
                viewing experience on this responsive platform. */
                "U&P": "Username: rahul, Password: rahul@2021",

                technologies: [
                    { id: 1, name: "React" },
                    { id: 2, name: "Javascript" },
                    { id: 3, name: "Firebase" },
                    { id: 4, name: "Styled Components" },
                    { id: 5, name: "Authentication" },
                    { id: 6, name: "Authorization" },
                    { id: 7, name: "Context API" },
                ],
            },
        },
        {
            id: 4,
            direction: "row-reverse",
            url: "https://tasty-kitchens-app.web.app/",
            projectHomePage: {
                homePageImg: tastyKitchens,
                borderRadius: "0 12px 12px 0",
            },

            detail: {
                name: "Tasty Kitchens (Swiggy / Zomato)",
                borderRadius: "12px 0 0 12px",
                description: `A platform for dynamic food delivery experiences, my application mirrors Swiggy/Zomato, offering
                seamless restaurant and food item searches with intuitive pagination. It prioritizes a
                sophisticated rating filter, user-friendly cart system, and secure login/logout features,
                ensuring an optimal and enjoyable experience for users seeking convenient and personalized food
                ordering.`,
                /*  A platform for dynamic food delivery experiences, my crafted application mirrors Swiggy/Zomato,
                providing seamless searches for restaurants and food items with intuitive pagination. This
                platform incorporates a sophisticated rating filter, user-friendly cart system, and secure
                login/logout features. Prioritizing responsive design, the project guarantees an optimal and
                enjoyable experience, catering to users in search of convenient and personalized food ordering.*/
                "U&P": "Username: rahul, Password: rahul@2021",

                technologies: [
                    { id: 1, name: "React" },
                    { id: 2, name: "Javascript" },
                    { id: 3, name: "Firebase" },
                    { id: 4, name: "Styled Components" },
                    { id: 5, name: "Authentication" },
                    { id: 6, name: "Authorization" },
                    { id: 7, name: "Context API" },
                ],
            },
        },
    ],
});
