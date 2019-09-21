export interface Track {
    name: string;
    length: string
}

export interface Album {
    name: string;
    artist: string;
    artwork: string;
    date: string,
    tracks: Track[]
}