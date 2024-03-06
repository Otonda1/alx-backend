const redis = require('redis');

const client = redis.createClient({
    host: 'localhost',
    port: 6379
});
client.on('connect', () => {
    console.log('Redis client connected to the server');
});
client.on('error', (err) => {
    console.log(`Redis client not connected to the server: ${err}`);
});
client.quit();

function setNewSchool(schoolName, value) {
    client.set(schoolName, value, redis.print);
}
function displaySchoolValue(schholname) {
    client.get(schholname, (err, res) => {
        console.log(res);
    });
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');