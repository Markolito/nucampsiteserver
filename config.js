const secret = require('./appSecret');

module.exports = {
    'secretKey': '12345-67890-09876-54321',
    'mongoUrl': 'mongodb://localhost:27017/nucampsite',
    'facebook': {
        clientId: '532524078129581',
        clientSecret: secret
    }
}
