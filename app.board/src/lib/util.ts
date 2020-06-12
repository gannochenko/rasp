import { Gpio } from 'onoff';

export const riseEdge = async (gpio: Gpio) => {
    await gpio.write(Gpio.LOW);
    await gpio.write(Gpio.HIGH);
};

export const fallEdge = async (gpio: Gpio) => {
    await gpio.write(Gpio.HIGH);
    await gpio.write(Gpio.LOW);
};
