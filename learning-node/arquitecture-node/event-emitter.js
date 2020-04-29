const EventEmitter = require('events');

class Logger extends EventEmitter {
    execute(cb) {
        console.log('Before');
        this.emit('start');
        cb();
        this.emit('finish');
        console.log('After');
    }
}

const logger = new Logger();

logger.on('start', () => console.log('Starting'));
logger.on('finish', () => console.log('finishing'));
logger.on('finish', () => console.log('Its Done'));


logger.execute( () => console.log('hello worls'));