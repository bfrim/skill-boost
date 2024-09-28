class CalendarEntry {
    constructor(date, startTime, endTime, activity, notes) {
        this.date = date
        this.startTime = startTime
        this.endTime = endTime
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

const calendar = new Calendar()

function updateView() {
    
}

function submitFile() {
    const file = document.getElementById("file-input").files[0]
    
    if (!file) {
        return
    }
    
    if (!file.name.endsWith(".skillboost")) {
        document.getElementById("error-message-label").textContent = "You must submit a .skillboost file"
        return
    }
    
    const reader = new FileReader()
    reader.readAsText(file)

    reader.onload = () => {
        const calendar = JSON.parse(reader.result)
    }
}

function saveFileLocally(data, fileName, type) {
    let file = new Blob([data], {type})
    let a = document.createElement("a")
    let url = URL.createObjectURL(file)
    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    setTimeout(() => {
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
    }, 0)
}

function saveCalendar() {
    saveFileLocally(
        JSON.stringify(calendar),
        "calendar.skillboost",
        "text/plain"
    )
}

function addEntry() {
    const date = document.getElementById("date-input").value
    if (!date) {
        return
    }

    const startTime = document.getElementById("start-time-input").value
    if (!startTime) {
        return
    }

    const endTime = document.getElementById("end-time-input").value
    if (!endTime) {
        return
    }

    const activity = document.getElementById("activity-input").value
    if (!activity) {
        return
    }

    const notes = document.getElementById("notes-input").value

    calendar.addEntry(new CalendarEntry(date, startTime, endTime, activity, notes))
    console.log(calendar.entries)
}