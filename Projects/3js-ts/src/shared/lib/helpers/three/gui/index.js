import { GUI } from "three/examples/jsm/libs/dat.gui.module";

export default class GUIHelper {
  constructor(data) {
    this.add(data);
  }

  add = ({ obj, targets, min, max, step, name }) => {
    const gui = new GUI();

    targets.forEach((target) => {
      gui.add(obj, target, min, max, step).name(`${name}.${target.toString()}`);
    });
  };
}
