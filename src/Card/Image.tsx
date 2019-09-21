import * as React from "react";
import { motion } from "framer-motion";
import { closeSpring } from "../animations";

interface Props {
    src: string;
    name: string;
}
export const Image = ({ src, name }: Props) => {
    return (
        <motion.div
            className="card-image-container"
            style={{ originX: 0, originY: 0 }}
        >
            <motion.img
                className="card-image"
                src={src}
                alt={name}
                initial={false}
                transition={closeSpring}
            />
        </motion.div>
    );
};
