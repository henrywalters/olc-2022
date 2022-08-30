import { Level } from "hagame-ts/dist/core/level";
import { ArcRotateCamera, HemisphericLight, MeshBuilder, Vector3 } from "babylonjs";

export class World extends Level {

    public onActivate() {
        new HemisphericLight("Light", new Vector3(0, 1, 0), this);
        MeshBuilder.CreateBox("Box", {}, this);
        const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, Vector3.Zero(), this);
        camera.attachControl(this.game.canvas, true);
    }


    public onUpdate(dt: number) {
        
    }
}