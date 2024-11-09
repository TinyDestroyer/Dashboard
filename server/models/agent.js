const mongoose = require('mongoose');
const {Schema} = mongoose;

const agentSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    password : String,
    type: String,
})

const AgentModel = mongoose.model('agent', agentSchema);
module.exports = Agentmodel;