// the exports can be imported by using their names
import { yellowCylinder, Cylinder, MAX_HEIGHT, cylinders, printVolume } from './cylinder-module';

const redCylinder: Cylinder = { radius: 2, height: MAX_HEIGHT, colour: 'red' };
cylinders.push(redCylinder);

for (const cylinder of cylinders) {
    printVolume(cylinder);
}