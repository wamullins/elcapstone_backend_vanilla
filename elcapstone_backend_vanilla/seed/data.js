const db = require("../db");
const { Climb, Feature, User, SendLog } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
    const climbs = [
        new Climb({
            name: "the dawn wall",
            type: "full ascent",
            grade: "5.hard",
            description: "it's all glass",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the nose",
            type: "full ascent",
            grade: "5.hard",
            description: "it's a nose",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the dawn wall ",
            type: "full ascent",
            grade: "5.??",
            description: "it's all glass",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the nose",
            type: "full ascent that has a really long name to test a howthiswholething works",
            grade: "very  hard",
            description: "it's a nose",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the dawn wall",
            type: "full ascent",
            grade: "very very hard",
            description: "it's all glass",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the nose",
            type: "full ascent",
            grade: "very  hard",
            description: "it's a nose",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the dawn wall",
            type: "full ascent",
            grade: "very very hard",
            description: "it's all glass",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the nose",
            type: "full ascent",
            grade: "very  hard",
            description: "it's a nose",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the dawn wall",
            type: "full ascent",
            grade: "very very hard",
            description: "it's all glass",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the nose",
            type: "full ascent",
            grade: "very  hard",
            description: "it's a nose",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the dawn wall",
            type: "full ascent",
            grade: "very very hard",
            description: "it's all glass",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the nose",
            type: "full ascent",
            grade: "very  hard",
            description: "it's a nose",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the dawn wall",
            type: "full ascent",
            grade: "very very hard",
            description: "it's all glass",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the nose",
            type: "full ascent",
            grade: "very  hard",
            description: "it's a nose",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the dawn wall",
            type: "full ascent",
            grade: "very very hard",
            description: "it's all glass",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the nose",
            type: "full ascent",
            grade: "very  hard",
            description: "it's a nose",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the dawn wall",
            type: "full ascent",
            grade: "very very hard",
            description: "it's all glass",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the nose",
            type: "full ascent",
            grade: "very  hard",
            description: "it's a nose",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the dawn wall",
            type: "full ascent",
            grade: "very very hard",
            description: "it's all glass",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the nose",
            type: "full ascent",
            grade: "very  hard",
            description: "it's a nose",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the dawn wall",
            type: "full ascent",
            grade: "very very hard",
            description: "it's all glass",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the nose",
            type: "full ascent",
            grade: "very  hard",
            description: "it's a nose",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the dawn wall",
            type: "full ascent",
            grade: "very very hard",
            description: "it's all glass",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the nose",
            type: "full ascent",
            grade: "very  hard",
            description: "it's a nose",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the dawn wall",
            type: "full ascent",
            grade: "very very hard",
            description: "it's all glass",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the nose",
            type: "full ascent",
            grade: "very  hard",
            description: "it's a nose",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the dawn wall",
            type: "full ascent",
            grade: "very very hard",
            description: "it's all glass",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the nose",
            type: "full ascent",
            grade: "very  hard",
            description: "it's a nose",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the dawn wall",
            type: "full ascent",
            grade: "very very hard",
            description: "it's all glass",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Climb({
            name: "the nose",
            type: "full ascent",
            grade: "very  hard",
            description: "it's a nose",
            pitches: 10,
            length: 4000,
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
    ];
    ///
    const climbMap = new Map(climbs.map((clm) => [clm.name, clm._id]));

    const features = [
        new Feature({
            name: "Dawn Wall",
            climbId: climbMap.get("the dawn wall"),
            description: "big ol flat surface",
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Feature({
            name: "Dawn Wall",
            climbId: climbMap.get("the dawn wall"),
            description: "big ol flat surface",
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Feature({
            name: "Dawn Wall",
            climbId: climbMap.get("the dawn wall"),
            description: "big ol flat surface",
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Feature({
            name: "Dawn Wall",
            climbId: climbMap.get("the dawn wall"),
            description: "big ol flat surface",
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Feature({
            name: "Dawn Wall",
            climbId: climbMap.get("the dawn wall"),
            description: "big ol flat surface",
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Feature({
            name: "Dawn Wall",
            climbId: climbMap.get("the dawn wall"),
            description: "big ol flat surface",
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
        new Feature({
            name: "Dawn Wall",
            climbId: climbMap.get("the dawn wall"),
            description: "big ol flat surface",
            images: [
                "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/47/1479827758-gettyimages-549385191.jpg?resize=980:*",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
        }),
    ];

    const users = [
        new User({
            name: "Andrew",
            email: "mullinsa428@gmail.com",
            gradePB: "5.11d",
            password: "letmeinplease",
        }),
        new User({
            name: "Stefano Ghisolfi",
            email: "climb@climbing.com",
            gradePB: "9b+",
            password: "letmeinplease",
        }),
    ];

    const sendLogs = [
        new SendLog({
            routeID: climbMap.get("the dawn wall"),
            userID: users[0]._id,
            grade: "much harder than I can do",
            description: "had a nice time checking it out from the ground",
        }),
        new SendLog({
            routeID: climbMap.get("the dawn wall"),
            userID: users[0]._id,
            grade: "much harder than I can do",
            description: "had a nice time checking it out from the ground",
        }),
        new SendLog({
            routeID: climbMap.get("the dawn wall"),
            userID: users[0]._id,
            grade: "much harder than I can do",
            description: "had a nice time checking it out from the ground",
        }),
        new SendLog({
            routeID: climbMap.get("the dawn wall"),
            userID: users[0]._id,
            grade: "much harder than I can do",
            description: "had a nice time checking it out from the ground",
        }),
        new SendLog({
            routeID: climbMap.get("the dawn wall"),
            userID: users[0]._id,
            grade: "much harder than I can do",
            description: "had a nice time checking it out from the ground",
        }),
        new SendLog({
            routeID: climbMap.get("the dawn wall"),
            userID: users[0]._id,
            grade: "much harder than I can do",
            description: "had a nice time checking it out from the ground",
        }),
    ];

    await Climb.insertMany(climbs);
    console.log("seeding climbs");

    await Feature.insertMany(features);
    console.log("seeding features");

    await User.insertMany(users);
    console.log("seeding users");

    await SendLog.insertMany(sendLogs);
    console.log("seeding sendlogs");
};

const run = async () => {
    await Climb.deleteMany({});
    await Feature.deleteMany({});
    await User.deleteMany({});
    await SendLog.deleteMany({});
    await main();
    db.close();
};

run();
