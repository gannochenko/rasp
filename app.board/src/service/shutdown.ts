import { exec } from 'child_process';

export class ShutdownService {
    public async shutdown(restart: boolean) {
        exec(`sudo shutdown -${restart ? 'r' : 'h'} now`);
    }
}
