import { exec } from 'child_process';
import { readFile as readFileCb } from 'fs';
import { promisify } from 'util';

const readFile = promisify(readFileCb);

export class SystemService {
    public async shutdown(restart: boolean) {
        exec(`sudo shutdown -${restart ? 'r' : 'h'} now`);
    }

    public async getStatus() {
        return {
            ...(await this.getMemory()),
            ...(await this.getCPU()),
        };
    }

    /**
     * https://rosettacode.org/wiki/Linux_CPU_utilization
     */
    private async getCPU() {
        const timeString = (await readFile('/proc/stat'))
            .toString('utf8')
            .split(/\n/)[0]
            .substr(3)
            .trim();
        const times = timeString.split(/\s+/).map((item) => parseInt(item, 10));

        const total = times.reduce((result, item) => result + item, 0);
        const activePart = 1 - times[3] / total;

        return {
            cpuUsage: activePart * 100,
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
