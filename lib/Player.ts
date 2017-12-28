
import { Song } from "./Song";

export class Player {

    public currentlyPlayingSong: Song;
    public isPlaying: boolean;

    public play(song: Song) {
        this.currentlyPlayingSong = song;
        this.isPlaying = true;
    }

    public pause() {
        this.isPlaying = false;
    }

    public resume() {
        if (this.isPlaying) {
            throw new Error("song is already playing");
        }

        this.isPlaying = true;
    }

    public makeFavorite() {
        this.currentlyPlayingSong.persistFavoriteStatus(true);
    }
}
