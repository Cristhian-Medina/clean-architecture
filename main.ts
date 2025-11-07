import { health } from './src/shared/health';

const healthCheck = health();
console.log(`Status: ${healthCheck.status}, Timestamp: ${healthCheck.timestamp.toISOString()}`);
