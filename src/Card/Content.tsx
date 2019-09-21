import * as React from "react";
import { motion } from "framer-motion";
import { Track } from '../types';

interface Props {
    isSelected: boolean;
    tracksList: Track[]
}

export const Content = React.memo(({tracksList, isSelected}: Props) => {
  let tabIndex: number = isSelected ? 0 : -1;
  return (
    <motion.div
      className="content-container"
      style={{ originY: 0, originX: 0 }}
    >
        <ul>
            {tracksList.map((song: Track) => (
                <li key={song.name} className="song-title">
                    <a href={`https://open.spotify.com/search/`+encodeURIComponent(song.name)} target="_blank" rel="noopener noreferrer" tabIndex={tabIndex}>
                        <span>{song.name}</span>
                        <span>{song.length}</span>
                    </a>
                </li>
            ))}
        </ul>
    </motion.div>
  );
});
