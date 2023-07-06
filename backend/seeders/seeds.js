const mongoose = require('mongoose');
const User = require('./models/User');
const Trip = require('./models/Trip');
const Group = require('./models/Group');
const Itinerary = require('./models/Itinerary');


mongoose
    .connect('mongodb://localhost:5001/test', { //check if this is correct
        useNewUrlParser: true, useUnifiedTopology: true
    })
    .then(() => {
        console.log('MONGO CONNECTION FUNCTIONING');
    })
    .catch((err) => {
        console.log(err);
    });

const seedUsers = [
    {
        id: "1",
        email: "Kendawg@gmail.com",
        hashedPassword: "123456"
    },
    {
        id: "2",
        email: "ThomasTrain@aol.com",
        hashedPassword: "password"
    },
    {
        id: "3",
        email: "Akea@gmail.com",
        hashedPassword: "password"
    }
]

const seedTrips = [
    {
        id: "1",
        experience: "wine tasing",
        month: "March",
        location: "Napa Valley",
        itinerary: "1",
        group: "1",
        owner: "1"
    },
    {
        id: "2",
        experience: "ATV in the sand dunes",
        month: "July",
        location: "San Diego",
        itinerary: "2",
        group: "2",
        owner: "2"
    },
    {
        id: "3",
        experience: "Fishing for salmon and halibut",
        month: "November",
        location: "Alaska",
        itinerary: "3",
        group: "3",
        owner: "3"
    }
]

const seedGroups = [
    {
        id: "1",
        name: "Booze N' Bros",
        members: 8,
        budget: 5000,
        owner: "1"
    },
    {
        id: "2",
        name: "Dunes N' Dudes",
        members: 5,
        budget: 3500,
        owner: "2"
    },
    {
        id: "3",
        name: "Fishin N' Friends",
        members: 4,
        budget: 3000,
        owner: "3"
    }
]

const seedItineraries = [
    {
        id: "1",
        events: [
            {
                id: "1",
                description: "We Boozin and Cruisin through the hills baby",
                date: "2023-03-29T03:09:00",
                address: "1500 Wine Ave",
                // cost: 1000
            }
        ],
            stays: [
            {
                id: "1",
                description: "Hyatt Hotel",
                check_in_date: "2023-03-29T12:20:00",
                check_out_date: "2023-03-30T12:00:00",
                address: "1200 Fancy Ln",
                // cost: 300
            }
        ]
    },
    {
        id: "2",
        events: [
            {
                id: "2",
                description: "We gettin diiiiirty in the dunes",
                date: "2023-07-07T13:10:00",
                address: "100 Dessert Dr",
                // cost: 1200
            },
            {
                id: "4",
                description: "We chillin at the beach",
                date: "2023-07-08T13:00:00",
                address: "100 Relax Rd",
                // cost: 100
            },
            {
                id: "5",
                description: "We clubbin at the clubs",
                date: "2023-07-09T20:00:00",
                address: "150 Schwifty St",
                // cost: 100
            }
        ],
            stays: [
            {
                id: "2",
                description: "Best Western",
                check_in_date: "2023-07-06T03:18:00",
                check_out_date: "2023-07-10T03:14:00",
                address: "1800 Average Ave",
                // cost: 800
            }
        ]
    },
    {
        id: "3",
        events: [
            {
                id: "3",
                description: "Fishin is Bitchin",
                date: "2023-11-15T07:45:00",
                address: "1020 Oceanside ln",
                // cost: 500
            }
        ],
            stays: [
            {
                id: "3",
                description: "Cabin in the woods",
                check_in_date: "2023-11-15T10:00:00",
                check_out_date: "2023-11-18T15:20:00",
                address: "385 Creep Ct",
                // cost: 200
            }
        ]
    },
]

const seedDB = async () => {
    await User.deleteMany({});
    await User.insertMany(seedUsers);
    await Trip.deleteMany({});
    await Trip.insertMany(seedTrips);
    await Group.deleteMany({});
    await Group.insertMany(seedGroups);
    await Itinerary.deleteMany({});
    await Itinerary.insertMany(seedItineraries);
};

seedDB().then(() => {
    mongoose.connection.close();
});
