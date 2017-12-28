
import { Player } from "../../lib/Player";
import { Song } from "../../lib/Song";

beforeEach(function () {
    jasmine.addMatchers({
        toBePlaying: () => {
            return {
                compare: function (actual: Player, expected: Song) {
                    var player = actual;

                    return {
                        pass: player.currentlyPlayingSong === expected && player.isPlaying
                    }
                }
            };
        }
    });
});
