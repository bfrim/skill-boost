function hello() {
    console.log("hello")
}

function onSubmitFile() {
    const file = document.getElementById("file").files[0]

    if (!file) {
        return
    }

    console.log(file.name)
}