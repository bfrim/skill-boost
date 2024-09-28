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

export default Calendar