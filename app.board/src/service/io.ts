import { Gpio } from 'onoff';

const LED = new Gpio(4, 'out');

export class IOService {
    async toggleLED() {
        const status = await LED.readSync();

        await LED.write(status ? 0 : 1);
    }
}
