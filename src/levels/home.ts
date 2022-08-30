import { ArcRotateCamera, UniversalCamera, Vector3 } from "babylonjs";
import { Level } from "hagame-ts/dist/core/level";
import { Entity, Component } from "hagame-ts/dist/core/ecs";

class TestComponent extends Component {

}

class Test2Component extends TestComponent {

}

export class Home extends Level {

    public onActivate() {
        const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, Vector3.Zero(), this);
        camera.attachControl(this.game.canvas, true);
        const test = new Entity("Test");
        test.addComponent(new Component());
        test.addComponent(new TestComponent());
        test.addComponent(new Test2Component());

        console.log(TestComponent.name);

        console.log(test.getComponent(TestComponent).extends(Component));
    }

    public onUpdate(dt: number) {
    }
}