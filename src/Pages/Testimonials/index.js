import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContextApi";
import CustomSectionTag from "../../Components/CustomSectionTag";
import CustomSectionCaption from "../../Components/CustomSectionCaption";
import { TestimonialsContainer } from "./StyledComponents";

const Testimonials = () => {
    const { dark } = useContext(ThemeContext);
    return (
        <TestimonialsContainer id="testimonials" theme={dark}>
            <CustomSectionTag name="Testimonials" theme={dark} />
            <CustomSectionCaption theme={dark} text="Nice Things people have have said about me:" />
        </TestimonialsContainer>
    );
};

export default Testimonials;
