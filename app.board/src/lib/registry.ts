import { Gpio } from 'onoff';

type Vector = number[];

export class Registry {
    private inputPort: Gpio;
    private setPort: Gpio;

    constructor(
        inputPortNumber: number,
        setPortNumber: number,
        private dimension: number,
    ) {
        // reset here
        this.inputPort = new Gpio(inputPortNumber, 'out');
        this.setPort = new Gpio(setPortNumber, 'out');
    }

    set(data: Vector) {}
}
