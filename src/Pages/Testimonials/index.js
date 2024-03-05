import { useContext } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Config_Vars } from "../../Assets/Constants";
import { ThemeContext } from "../../Context/ThemeContextApi";
import CustomSectionTag from "../../Components/CustomSectionTag";
import CustomSectionCaption from "../../Components/CustomSectionCaption";
import {
    TestimonialsContainer,
    TestimonialsList,
    Testimonial,
    AvatarBox,
    TestimonialImage,
    Description,
    Name,
    Specilization,
} from "./StyledComponents";

const Testimonials = () => {
    const { dark } = useContext(ThemeContext);
    return (
        <TestimonialsContainer id="testimonials" theme={dark}>
            <CustomSectionTag name="Testimonials" theme={dark} />
            <CustomSectionCaption theme={dark} text="Nice Things people have have said about me:" />
            <TestimonialsList>
                {Config_Vars.testimonials.map((testimonial) => (
                    <Testimonial key={testimonial.id} theme={dark}>
                        {testimonial?.avatarUrl ? (
                            <TestimonialImage src={testimonial?.avatarUrl} />
                        ) : (
                            <AvatarBox theme={dark}>
                                <PersonIcon sx={{ fontSize: "40px" }} />
                            </AvatarBox>
                        )}
                        <Description theme={dark}>{testimonial?.description}</Description>
                        <Name theme={dark}>{testimonial.name}</Name>
                        <Specilization theme={dark}>{testimonial.specilization}</Specilization>
                    </Testimonial>
                ))}
            </TestimonialsList>
        </TestimonialsContainer>
    );
};

export default Testimonials;
