import React from "react";
import { motion, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { Album } from "../types";
import { Title } from "./Title";
import { Image } from "./Image";
import { Content } from "./Content";
import { openSpring, closeSpring } from "../animations";

interface Props extends Album {
    isSelected: boolean;
    history: {
        push: (route: string) => void;
    };
}

export const Card = React.memo(
    ({ isSelected, name, artwork, tracks, date }: Props) => {
        const y = useMotionValue(0);
        const zIndex = useMotionValue(isSelected ? 2 : 0);

        function setZIndex(latest: { scaleX: number; }) {
            if (isSelected) {
                zIndex.set(2);
            } else if (!isSelected && latest.scaleX < 1.01) {
                zIndex.set(0);
            }
        }

        return (
            <li className={`card`}>
                <Overlay isSelected={isSelected} />
                <div className={`card-content-container ${isSelected && "open"}`}>
                    <motion.div
                        className="card-content"
                        style={{ zIndex, y }}
                        layoutTransition={isSelected ? openSpring : closeSpring}
                        onUpdate={setZIndex}
                    >
                        <Image src={artwork} name={name}/>
                        <Title title={name} date={date} isSelected={isSelected} />
                        <Content tracksList={tracks} isSelected={isSelected} />
                    </motion.div>
                </div>
                {!isSelected && <Link to={name} className={`card-open-link`}/>}
            </li>
        );
    },
    (prev: Props, next: Props) => prev.isSelected === next.isSelected
);

const Overlay = ({ isSelected }: { isSelected: boolean }) => (
    <motion.div
        initial={false}
        animate={{ opacity: isSelected ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: isSelected ? "auto" : "none" }}
        className="overlay"
    >
        <Link to="/" />
    </motion.div>
);
