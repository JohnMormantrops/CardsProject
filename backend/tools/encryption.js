const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const passwordSalt = '$2a$10$Qam3avh/.pvDSNhJB3gXee';
const jwtPrivateKey = '$2a$31$kOe8TyvtwlIYa567qNrxGu';


module.exports = {
    encryptPassword: function (password) {
        return bcrypt.hashSync(password, passwordSalt);
    },
    comparePassword: function (password, encryptedPassword) {
        return bcrypt.compareSync(password, encryptedPassword);
    },
    jwtSign: function ({ id, email }) {
        return jwt.sign({ id: id, email: email }, jwtPrivateKey);
    },
    jwtVerify: function (jwtToken) {
        return jwt.verify(jwtToken, jwtPrivateKey);
    }
}
