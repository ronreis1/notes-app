const { Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true}
}, {
    timestamps: true
});
//para cifrar contraseña
UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
};
//true or false si contraseña correcta
UserSchema.methods.matchPassword = async function(password) {
    return bcrypt.compare(password, this.password);
}

module.exports = model('User', UserSchema);
