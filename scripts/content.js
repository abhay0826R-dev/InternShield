
function removeInternships() {
    let removed_internships_array = []
    let remove_internship_array = ["Across The Globe", "Zdminds", "She Can Foundation", "InAmigos Foundation", "NayePankh Foundation"]

    let x = document.querySelectorAll(".individual_internship")
    x.forEach(elem => {
        if (remove_internship_array.some(name => elem.innerText.includes(name))) {
            elem.remove()
            console.log("got 1")
        }
    })

}

removeInternships()