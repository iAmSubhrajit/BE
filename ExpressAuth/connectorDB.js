const { connect } = require('mongoose');

const URL = process.env.MONGODB_CONNECTION_URL;
const options = {
    dbName: 'UserAuth'
}
connect(URL, options)
    .then(() => console.log('Connection Successful With MongoDB Server'))
    .catch((error) => console.log('error while connecting MongoDB', error))