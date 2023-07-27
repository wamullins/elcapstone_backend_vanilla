const { Schema } = require("mongoose");

const featureSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        climbId: {
            type: Schema.Types.ObjectId,
            ref: "Climb",
        },
        description: {
            type: String,
            required: true,
        },
        images: {
            type: [],
        },
    },
    { timestamps: true }
);

module.exports = featureSchema;
