import { exec } from 'child_process';

export class SystemService {
    public async shutdown(restart: boolean) {
        console.log('EXEC! ' + restart);
        // exec(`sudo shutdown -${restart ? 'r' : 'h'} now`);
    }
}
