import {Game} from "hagame-ts";
import { Home } from "./levels/home";
import { World } from "./levels/world";

export const OLC2022 = (canvas: HTMLCanvasElement) => {
    const game = new Game(canvas);

    const home = new Home(game, "home");
    const world = new World(game, "world");

    game.levels.add("home", home);
    game.levels.add("world", world);
    game.addLevelHooks("home");
    game.addLevelHooks("world");

    game.levels.activate("home");

    game.run();
} 