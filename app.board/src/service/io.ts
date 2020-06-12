import { Gpio } from 'onoff';
import { Registry, Vector } from '../lib/registry';

const registry = new Registry(27, 4, 17);

export class IOService {
    async toggleLED() {
        const vector: Vector = [];
        for (let i = 0; i < 8; i += 1) {
            vector.push(Math.random() > 0.5 ? Gpio.LOW : Gpio.HIGH);
        }

        await registry.set(vector);
    }
}
