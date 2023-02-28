import { getBands, getVenues, getBookings } from "./database.js"

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()

// Function whose responsibility is to find the venue for a booking
const findVenue = (booking, allVenues) => {
    let bookingVenue = null
    
    for (const venue of allVenues) {
        if (venue.id === booking.venueID) {
            bookingVenue = venue
        }
    }
    
    return bookingVenue
}



// Function whose responsibility is to find the band for a booking
const findBand = (booking, allBands) => {
    let bookingBand = null

    for (const band of allBands) {
        if (band.id === booking.bandID) {
            bookingBand = band
        }
    }

    return bookingBand
}


// export booking html
export const Bookings = () => {
    let html = ""
    html += "<ul>"

    for (const booking of bookings) {
        const band = findBand(booking, bands)
        const venue = findVenue(booking, venues)
        
        html += `<li>${band.name} are playing at The ${venue.name} on ${booking.date} at ${booking.time}.`
    }

    html += "</ul>"

    return html
}

