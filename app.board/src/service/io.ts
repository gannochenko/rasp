import { BinaryValue, Gpio } from 'onoff';

const SRCLK = new Gpio(4, 'out'); // считать данные в shift registry
const RCLK = new Gpio(17, 'out'); // применить данные в
const SER = new Gpio(27, 'out'); // данные

let negate = false;

export class IOService {
    async toggleLED() {
        const vector = [false, true, false, true, false, true, false, true];

        for (let i = 0; i < vector.length; i += 1) {
            let data = vector[i];
            if (negate) {
                data = !data;
            }

            await SER.write(data ? 1 : 0);
            await SRCLK.write(0);
            await SRCLK.write(1);
        }

        await RCLK.write(0);
        await RCLK.write(1);

        negate = !negate;
    }
}
