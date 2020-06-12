import { BinaryValue, Gpio } from 'onoff';
import { riseEdge } from './util';

export type Vector = BinaryValue[];

export class Registry {
    private dataPort: Gpio;
    private sRCPort: Gpio;
    private rCPort: Gpio;

    constructor(
        dataPortNumber: number,
        shiftRegistryClockPortNumber: number,
        registryClockPortNumber: number,
        private length: number = 8,
    ) {
        // reset here
        this.dataPort = new Gpio(dataPortNumber, 'out');
        this.sRCPort = new Gpio(shiftRegistryClockPortNumber, 'out');
        this.rCPort = new Gpio(registryClockPortNumber, 'out');
    }

    async reset() {
        const resetVector: Vector = [];
        for (let i = 0; i < this.length; i += 1) {
            resetVector.push(Gpio.LOW);
        }

        return this.set(resetVector);
    }

    async set(data: Vector) {
        for (let i = 0; i < data.length; i += 1) {
            const bit = data[i];

            await this.dataPort.write(bit);
            await riseEdge(this.sRCPort);
        }

        await riseEdge(this.rCPort);
    }
}
