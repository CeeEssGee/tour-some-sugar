import { getVenues, getBookings } from "./database.js";

const venues = getVenues()
const bookings = getBookings()

// create and export a list of venues
export const Venues = () => {
    let html = "<ul>"
    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.name}</li>`
    }

    html += "</ul>"

    return html

}

// create and store a function that compares and stores the bands based on the venue.bandID



// When a venue name is clicked, a window alert should be presented to the user that displays all of the bands that have booked the venue.
document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("venue")) {
        const [,venueId] = itemClicked.id.split("--")
        for (const venue of venues) {
            if (venue.id === parseInt (venueId)) {
                let houseBands = (orders,employee)
                // create the window alert
                window.alert(`${employee.name} sold ${sales} products`)
                }
                
            }

        }

})