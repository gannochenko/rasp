import { BinaryValue, Gpio } from 'onoff';
import { riseEdge } from './util';
import { ObjectLiteral } from '../type';

export type Vector = BinaryValue[];

export class Registry {
    private readonly dataPort: Gpio;
    private readonly sRCPort: Gpio;
    private readonly rCPort: Gpio;

    private static instances: ObjectLiteral<Registry> = {};

    public static get(
        dataPortNumber: number,
        shiftRegistryClockPortNumber: number,
        registryClockPortNumber: number,
    ) {
        const key = `${dataPortNumber}_${shiftRegistryClockPortNumber}_${registryClockPortNumber}`;
        if (!(key in this.instances)) {
            this.instances[key] = new this(
                dataPortNumber,
                shiftRegistryClockPortNumber,
                registryClockPortNumber,
            );
        }

        return this.instances[key];
    }

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
