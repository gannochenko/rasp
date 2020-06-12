import { BinaryValue, Gpio } from 'onoff';
import { riseEdge } from './util';

export type Vector = BinaryValue[];

export class Registry {
    private readonly dataPort: Gpio;
    private readonly sRCPort: Gpio;
    private readonly rCPort: Gpio;

    constructor(
        dataPortNumber: number,
        shiftRegistryClockPortNumber: number,
        registryClockPortNumber: number,
        private readonly length: number = 8,
    ) {
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
            const flag = data[i];

            await this.dataPort.write(flag);
            await riseEdge(this.sRCPort);
        }

        await riseEdge(this.rCPort);
    }
}
