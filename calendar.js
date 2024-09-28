class CalendarEntry {
    constructor(startDate, endDate, activity, notes) {
        this.startDate = startDate
        this.endDate = endDate
        this.activity = activity
        this.notes = notes
    }
}

class Calendar {
    constructor() {
        this.entries = []
    }

    addEntry(entry) {
        this.entries.push(entry)
    }

    removeEntry(entry) {
        const ind = this.entries.indexOf(entry)

        if (ind > -1) {
            this.entries.splice(ind, 1)
        }
    }
}

let calendar = new Calendar()
calendar.addEntry(new CalendarEntry(
    new Date('December 17, 1995 03:24:00'),
    new Date('December 17, 1995 04:24:00'),
    "guitar",
    "played well"
))

const json = JSON.stringify(calendar)


console.log(json)