import { exec } from 'child_process';
import { readFile as readFileCb } from 'fs';
import { promisify } from 'util';
import cpuse from 'cpuse';
import raspiInfo from 'raspberry-info';
import { Registry } from '../lib/registry';

const readFile = promisify(readFileCb);

export class SystemService {
    public async shutdown(restart: boolean) {
        const registry = Registry.get(27, 4, 17);
        await registry.reset();

        exec(`sudo shutdown -${restart ? 'r' : 'h'} now`);
    }

    public async getStatus() {
        return {
            ...(await this.getMemory()),
            ...(await this.getCPU()),
        };
    }

    public async getInfo() {
        return {
            serialNumber: (await raspiInfo.getSerialNumber()).trim(),
            ip: (await raspiInfo.getIP()).trim(),
        };
    }

    private async getCPU() {
        const usage = (await cpuse.usage()) as string[];

        return {
            cpuUsage:
                usage.reduce((result, cpu) => result + parseInt(cpu, 10), 0) /
                usage.length,
            cpuTemperature: parseFloat(await raspiInfo.getCPUTemperature()),
        };
    }

    private async getMemory() {
        const res = (await readFile('/proc/meminfo')).toString('utf8');
        const stats = res.split(/\n/).reduce((result, item) => {
            const parts = item.trim().match(/^([_a-z\(\)]+):\s+(\d+) kB$/i);

            if (parts && parts[1] && parts[2]) {
                result = {
                    ...result,
                    [parts[1]]: parseInt(parts[2], 10),
                };
            }

            return result;
        }, {}) as {
            MemAvailable: number;
            MemFree: number;
        };

        return {
            memoryFree: stats.MemFree,
            memoryAvailable: stats.MemAvailable,
        };
    }
}
