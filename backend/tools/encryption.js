const bcrypt = require('bcryptjs');

const salt = '$2a$10$Qam3avh/.pvDSNhJB3gXee';


module.exports = {
    encryptPassword: function (password) {
        return bcrypt.hashSync(password, salt);
    },
    comparePassword: function (password, encryptedPassword) {
        return bcrypt.compareSync(password, encryptedPassword);
    }
}
