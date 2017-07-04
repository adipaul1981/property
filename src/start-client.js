const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'new', shell: true }; //todo Current Working Directory to "Client"
require('child_process').spawn('npm', args, opts);   //todo child_process.spawn(command[, args][, options])
