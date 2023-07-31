const db = require("../db");
const { Climb, Feature, User, SendLog } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
    const climbs = [
        new Climb({
            name: "the dawn wall",
            type: "full ascent",
            grade: "5.14d",
            description:
                "The Dawn Wall, 5.14d, Grade VI, FA Tommy Caldwell and Kevin Jorgeson, January 2015. It’s had one repeat by Adam Ondra in eight days, November 2016. The hardest big wall climb in the world by far, and perhaps the hardest climb, if commitment, exposure and sustained difficulty are counted along with grades. You've all seen the movie. You all know the story. The Yosemite legend and the pebble wrestling apprentice working for years on the blankest big wall in the world. Tommy sends the traverses, Kevin keeps falling. Plenty of drama for cinema to milk. They send it. Voila, hardest big wall in the world. Obviously I haven't climbed this route, but I did some research on pitch-by-pitch stuff so we can all enjoy, dream, and imagine. There isn't much pitch-by-pitch beta to be found on the Internet, in Tommy's book, or elsewhere. Here's what I could piece together.P1 (5.12b) - It doesn't start easy. Begins on Mescalito for the first five pitches. Climb a blank, low-angle slab to a shallow crack. P2 (5.13a) - Continue on Mescalito up slabs that trend slowly steeper. P3 (5.13c) - Intermittent cracks/features on Mescalito. P4 (5.12b) - And so on. P5 (5.12d) - And so on. P6 (5.13c) - And.... so on. P7 (5.14a) - Leave Mescalito and begin following Adrift, a once-repeated aid route, at Anchorage Ledge. Follows an offset seam for a hundred feet. Protected by beaks only. P8 (5.13d) - Climb up and move right to join Mescalito again. P9 (5.13c) - Climb up and move right to join Mescalito again. P10 (5.14a) - Continue following Mescalito up the intermittent crack/dihedral system. P11 (5.13c) - Prepare for the Molar Traverse. P12 (5.14b) - The Molar Traverse. P13 (5.13b) - Preparing for the big-deal traverses. Climb off the flake up and left to the belay at the lighter-colored band. P14 (5.14d) - Traverse number one. Tiny pinches along the yellow band. P15 (5.14d) - Continuing to traverse along tiny edges and crimps until you're done! Oh wait.... P16 (5.14c) - Either the Loop Pitch (.14c) or the Dyno (.14d). Loop Pitch downclimbs, traverses, and loops around the blank 8-foot section that is otherwise done in a eight-foot double dyno to a two-hand edge. P17 (5.14a) - Up through some upward-facing flakes. P18 (5.13c) - Continues through an intermittent crack system. P19 (5.13c) - Ascend crossing New Dawn and traversing right. P20 (5.13c) - Climb up the 'features' to the left of the large dihedral in which New Dawn climbs. P21 (5.13c) - Keep on climbing up. P22 (5.12c) - To Wino Tower! P23 (5.9) - Easy pitch above Wino Tower P24 (5.11) - Long blank but moderate pitches heading up and right. P25 (5.11) - Continue as above. P26 (5.11d) - Up and around a flake, then traverse slightly right. P27 (5.11c) - Climb up then a longer traverse to join Mescalito once again. P28 (5.12c) - Joining Mescalito, and climbing higher in its crack system. P29 (5.12b) - Long pitch up to the Ship’s Bow. P30 (5.13a) - Begin a long traverse right, breaking away from Mescalito. P31 (5.12a) - Continue traversing. P32 (5.12b) - The final pitch, on the Tempest. You’re done!",
            pitches: 32,
            length: 758,
            images: [
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
                "https://api.time.com/wp-content/uploads/2015/01/el-capitan-climb.jpg",
                "https://cdn.climbing.com/wp-content/uploads/2016/12/pitch-14_dsf9581_gn-webjpg.jpg?width=730",
                "https://mountainproject.com/assets/photos/climb/109951921_medium_1494366127.jpg?cache=1616855320",
            ],
            camera: {
                position: [2.5, -1.4, 3.5],
                target: [0.85, 0.1, 1.05],
            },
            points: [
                [0.99, 1.45, 0.88],
                [1, 1.22, 0.95],
                [0.84, 1.28, 1.02],
                [0.76, 0.8, 1.06],
                [0.7, 0.42, 1.12],
                [0.65, 0.02, 1.17],
                [0.68, -0.04, 1.16],
                [0.72, 0.06, 1.12],
                [0.82, 0.06, 1.06],
                [0.92, -0.1, 1.02],
                [0.75, -0.32, 1.11],
                [0.7, -0.72, 1.2],
                [0.78, -1.08, 1.28],
                [0.87, -1.1, 1.35],
            ],
        }),
        new Climb({
            name: "freerider",
            type: "full ascent",
            grade: "5.13a",
            description:
                "Freerider is the Astroman of the new millennium. This route is climbing at its finest. The route follows complex crack systems up the southwest face of El Capitan. Essentially it is the Salathe wall with a few variations used (pioneered by Alex Huber) to avoid the numerous 5.13 crux pitches first freed by Paul Piana and Todd Skinner in the mid 80's. Famously free soloed by Alex Honnold in June 2017.",
            pitches: 30,
            length: 1000,
            images: [
                "https://i.natgeofe.com/n/e3759aac-18c0-4519-9b4f-3b80410abace/alex-honnold-free-solo-el-capitan-2016.jpg?w=1084.125&h=724.5",
                "https://www.planetmountain.com/img/1/48806.jpg",
                "https://images.squarespace-cdn.com/content/v1/5ee06f2bd2eb670e23f4559e/1592027611522-OD20M20WU85B1TR3ZEG0/A+-+Traverse++-+or+cover%3F.JPG",
            ],
            camera: {
                position: [-3, -1.4, 3.5],
                target: [-0.1, 0.1, 0.85],
            },
            points: [
                [-0.3, 1.65, 0.69],
                [-0.39, 1.56, 0.74],
                [-0.38, 1.15, 0.72],
                [-0.34, 1.15, 0.75],
                [-0.35, 1.03, 0.74],
                [-0.3, 0.9, 0.76],
                [-0.3, 0.78, 0.76],
                [-0.31, 0.58, 0.76],
                [-0.28, 0.54, 0.79],
                [-0.28, 0.04, 0.79],
                [-0.22, -0.38, 0.94],
                [-0.2, -0.3, 0.94],
                [-0.04, -0.42, 1.05],
                [0.01, -0.33, 1.1],
                [0.13, -0.6, 1.29],
                [0.11, -0.78, 1.35],
                [0.11, -1.38, 1.65],
            ],
        }),
    ];
    ///
    const climbMap = new Map(climbs.map((clm) => [clm.name, clm._id]));

    const features = [
        new Feature({
            name: "the dawn wall",
            climbId: climbMap.get("the dawn wall"),
            description: "Large flat surface... this needs work",
            images: [
                "https://i.pinimg.com/originals/b1/43/d8/b143d8635dde37df525587ac4d9968cd.jpg",
                "https://wp-cpr.s3.amazonaws.com/uploads/2019/05/tommy_caldwall_24_-_the_middle_of_the_dawn_wall_-_credit_brett_lowell_-_big_up_productions.jpg",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
            camera: {
                position: [2.5, 2, 3.5],
                target: [0.85, 0.5, 1.05],
            },
            highlight: {
                args: [0.3, 0.4, 0.2],
                position: [0.7, 0.8, 1.02],
                rotation: [Math.PI / 2, 0, -0.5],
            },
        }),
        new Feature({
            name: "the north america wall",
            // climbId: climbMap.get("the dawn wall"),
            description: "big section of the wall that looks a bit like north america",
            images: [
                "https://mountainproject.com/assets/photos/climb/107781075_smallMed_1494210977.jpg?cache=1574971026",
                "https://i0.wp.com/www.climbingyosemite.com/wp-content/uploads/2015/06/Bissell_NA-wall-5.jpg?w=1300s",
                "https://i2.wp.com/www.climbingyosemite.com/wp-content/uploads/2015/06/Bissell_NA-wall-8.jpg?w=1300",
            ],
            camera: {
                position: [2.5, 1.2, 3.5],
                target: [1.4, 0.2, 0.75],
            },
            highlight: {
                args: [0.2, 0.4, 0.2],
                position: [1.4, 0.2, 0.75],
                rotation: [Math.PI / 2, 0, 0],
            },
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
            grade: "5.impossible",
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
