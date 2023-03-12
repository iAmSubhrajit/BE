const os = require('os')
// console.log('OS', os);

const freeMemory = os.freemem()  //in bytes (RAM memory)
console.log(freeMemory / 1024, 'kb');
console.log(freeMemory / 1024 / 1024, 'mb');
console.log(freeMemory / 1024 / 1024 / 1024, 'GB');

const totalMemory = os.totalmem().toFixed(2)
console.log('Total_Memory', totalMemory / 1024 / 1024 / 1024, 'GB');

// console.log('CPU core', os.cpus());
console.log('OS_Version', os.version());
console.log('HostName', os.hostname());
console.log('Machine_Type', os.machine());
console.log('Arch', os.arch());
console.log('OS_Platform', os.platform());
console.log('OS_Name', os.type());
console.log('UP_Time', os.uptime(),'seconds');
console.log('USER_INFO', os.userInfo());
// console.log('network_interfaces', os.networkInterfaces());
console.log('Home Dir', os.homedir());