const database = {
    venues: [{
        id: 1,
        name: "First Venue",
        address: "123 Main Street",
        sqFootage: 3000,
        maxOccupancy: 600

    }, {
        id: 2,
        name: "Second Venue",
        address: "456 Electric Avenue",
        sqFootage: 4000,
        maxOccupancy: 800

    }, {
        id: 3,
        name: "Third Venue",
        address: "789 Third Street",
        sqFootage: 2500,
        maxOccupancy: 500

    }, {
        id: 4,
        name: "Fourth Venue",
        address: "101 Dalmatian Avenue",
        sqFootage: 3500,
        maxOccupancy: 700

    }],
    bands: [{
        id: 1,
        name: "Shush",
        numMembers: 4,
        genre: "lullaby",
        yearFounded: 1988

    }, {
        id: 2,
        name: "The Beadles",
        numMembers: 4,
        genre: "rock",
        yearFounded: 1990

    },  {
        id: 3,
        name: "The Whose",
        numMembers: 4,
        genre: "progressive",
        yearFounded: 1993
    }, {
        id: 4,
        name: "Nearvanna",
        numMembers: 3,
        genre: "alternative",
        yearFounded: 1991
    }, {
        id: 5,
        name: "Beyond-see",
        numMembers: 7,
        genre: "pop",
        yearFounded: 2001
    }, {
        id: 6,
        name: "Lincoln Parks Here",
        numMembers: 4,
        genre: "rap",
        yearFounded: 2020
    }, {
        id: 7,
        name: "Second Opinion",
        numMembers: 4,
        genre: "rock",
        yearFounded: 2000
    }, {
        id: 8,
        name: "Taylor Slow",
        numMembers: 2,
        genre: "ballads",
        yearFounded: 1988
    }],
    bookings: [{
        id: 1, 
        venueID: 1,
        bandID: 1,
        date: "3/3/2023",
        time: "9pm"
    }, {
        id: 2, 
        venueID: 1,
        bandID: 2,
        date: "3/3/2023",
        time: "11pm"
    }, {
        id: 3, 
        venueID: 2,
        bandID: 3,
        date: "3/4/2023",
        time: "9pm"
    }, {
        id: 4, 
        venueID: 2,
        bandID: 4,
        date: "3/4/2023",
        time: "11pm"
    }, {
        id: 5, 
        venueID: 3,
        bandID: 5,
        date: "3/10/2023",
        time: "9pm"
    }, {
        id: 6, 
        venueID: 3,
        bandID: 6,
        date: "3/10/2023",
        time: "11pm"
    }, {
        id: 7, 
        venueID: 4,
        bandID: 7,
        date: "3/11/2023",
        time: "9pm"
    }, {
        id: 8, 
        venueID: 4,
        bandID: 8,
        date: "3/11/2023",
        time: "11pm"
    }
]}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}