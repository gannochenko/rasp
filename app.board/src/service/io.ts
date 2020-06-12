import { Gpio } from 'onoff';
import { Registry, Vector } from '../lib/registry';

export class IOService {
    async updateLEDArray() {
        const registry = Registry.get(27, 4, 17);

        const vector: Vector = [];
        for (let i = 0; i < 8; i += 1) {
            vector.push(Math.random() > 0.5 ? Gpio.LOW : Gpio.HIGH);
        }

        await registry.set(vector);
    }
}
