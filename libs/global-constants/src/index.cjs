const REMOTE_NAMES = require('./lib/remote_names.cjs');
const REMOTE_PORTS =  require('./lib/remote_ports.cjs');


module.exports = {
    ...REMOTE_NAMES,
    ...REMOTE_PORTS
}


