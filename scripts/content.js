
async function removeInternships() {
    let result = await chrome.storage.local.get("BlockedList")
    let remove_internship_array = result.BlockedList

    let x = document.querySelectorAll(".individual_internship")
    x.forEach(elem => {
        if (remove_internship_array.some(name => elem.innerText.includes(name))) {
            elem.remove()
            console.log("got 1")
        }
    })
}

removeInternships()
setInterval(removeInternships, 3000);