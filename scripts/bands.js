import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands()
const bookings = getBookings()
const venues = getVenues()

// create and export a list of bands
export const Bands = () => {
    let html = "<ul>"
    for (const band of bands) {
        html += `<li id="band--${band.id}">${band.name}</li>`
    }

    html += "</ul>"

    return html

}

