const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: String,
        googleId: {
            type: String,
            required: false,
        },
        email: String,
        gradePB: String,
        avatar: String,
        password: String,
    },
    {
        timestamps: true,
    }
);

module.exports = userSchema;
