import type { SlideProps } from "@mui/material/Slide";
import Slide from "@mui/material/Slide";
import { forwardRef } from "react";

const SlideTransition = forwardRef<unknown, SlideProps>(
    function SlideTransition(props, ref) {
        return (
            <Slide
                direction="up"
                timeout={{ enter: 450, exit: 350 }}
                ref={ref}
                {...props}
            />
        );
    },
);

export default SlideTransition;
