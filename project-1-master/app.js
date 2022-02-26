const displayPage = document.querySelector(".display-page")
const splashPage = document.querySelector(".splash-main")
const schwifty = document.querySelector(".schwifty")

//! Picking URL based on the selection from the dropdown menu
const genderSelect = document.querySelector("#gender")
const speciesSelect = document.querySelector("#species")
const statusSelect = document.querySelector("#status")
//! Gender select has an event listener of type 'chnage' which changes the url as per the selection made 
genderSelect.addEventListener("change", () => {
  if (genderSelect.value === "all" & speciesSelect.value === "all" & statusSelect.value === "all") {
    const url = "https://rickandmortyapi.com/api/character"
    console.log(url)
    schwifty.addEventListener("click", () => runCode(url))
  } else if (genderSelect.value === "Male" & speciesSelect.value === "all" & statusSelect.value === "all") {
    const url = "https://rickandmortyapi.com/api/character/?gender=male"
    console.log(url)
    schwifty.addEventListener("click", () => runCode(url))
  } else if (genderSelect.value === "Female" & speciesSelect.value === "all" & statusSelect.value === "all") {
    const url = "https://rickandmortyapi.com/api/character/?gender=female"
    schwifty.addEventListener("click", () => runCode(url))
  } else if (genderSelect.value === "Genderless" & speciesSelect.value === "all" & statusSelect.value === "all") {
    const url = "https://rickandmortyapi.com/api/character/?gender=genderless"
    schwifty.addEventListener("click", () => runCode(url))
  } else if (genderSelect.value === "Unknown" & speciesSelect.value === "all" & statusSelect.value === "all") {
    const url = "https://rickandmortyapi.com/api/character/?gender=unknown"
    schwifty.addEventListener("click", () => runCode(url))
  }
})

//! Species select has an event listener of type 'chnage' which changes the url as per the selection made 
speciesSelect.addEventListener("change", () => {
  if (genderSelect.value === "all" & speciesSelect.value === "all" & statusSelect.value === "all") {
    const url = "https://rickandmortyapi.com/api/character"
    console.log(url)
    schwifty.addEventListener("click", runCode(url))
  } else if (genderSelect.value === "all" & speciesSelect.value === "Human" & statusSelect.value === "all") {
    const url = "https://rickandmortyapi.com/api/character/?species=human"
    console.log(url)
    schwifty.addEventListener("click", () => runCode(url))
  } else if (genderSelect.value === "all" & speciesSelect.value === "Alien" & statusSelect.value === "all") {
    const url = "https://rickandmortyapi.com/api/character/?species=alien"
    schwifty.addEventListener("click", () => runCode(url))
  } else if (genderSelect.value === "all" & speciesSelect.value === "Unknown" & statusSelect.value === "all") {
    const url = "https://rickandmortyapi.com/api/character/?species=unknown"
    schwifty.addEventListener("click", () => runCode(url))
  }
})

//! Status select has an event listener of type 'chnage' which changes the url as per the selection made 
statusSelect.addEventListener("change", () => {
  if (genderSelect.value === "all" & speciesSelect.value === "all" & statusSelect.value === "all") {
    const url = "https://rickandmortyapi.com/api/character"

    schwifty.addEventListener("click", () => runCode(url))
  } else if (genderSelect.value === "all" & speciesSelect.value === "all" & statusSelect.value === "Dead") {
    const url = "https://rickandmortyapi.com/api/character/?status=dead"

    schwifty.addEventListener("click", () => runCode(url))
  } else if (genderSelect.value === "all" & speciesSelect.value === "all" & statusSelect.value === "all") {
    const url = "https://rickandmortyapi.com/api/character/?status=alive"
    schwifty.addEventListener("click", () => runCode(url))
  } else if (genderSelect.value === "all" & speciesSelect.value === "all" & statusSelect.value === "Unknown") {
    const url = "https://rickandmortyapi.com/api/character/?species=unknown"
    schwifty.addEventListener("click", () => runCode(url))
  }
})

// //! Setting deafult fetch URL
// //! Code to run when you directly press button without selecting filters!
schwifty.addEventListener("click", () => {
  if (genderSelect.value === "all" & speciesSelect.value === "all" & statusSelect.value === "all") {
    const url = "https://rickandmortyapi.com/api/character"
    runCode(url)
  }
})

//! Defining a function that runs the entire code from fetching the URL to adding event listeners and displaying the display page.
function runCode(url) {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      // console.log(data)
      //! Extract results which is an array of objects from data. Each object is a character!
      const charList = data.results
      // console.log(charList)

      //! Create divs for each character with their image and details in it.
      const chars = charList.map((char) => {
        return ` 
      <div class="card">
        <img src="${char.image}">
        <div class="details">
          <h5>Name: &nbsp &nbsp ${char.name}</h5>
          <h5>Species: &nbsp &nbsp ${char.species}</h5>
          <h5>Gender: &nbsp &nbsp ${char.gender}</h5>
          <h5>Origin: &nbsp &nbsp ${char.origin.name}</h5>
          <h5>Status: &nbsp &nbsp ${char.status}</h5>
        </div>
      </div>`
      })

      //! Show all character images in display page
      displayPage.innerHTML = chars.join("")
      //! Hide Splash page and show display page instead
      splashPage.style.display = "none"
      displayPage.classList.add("display-page-now")
      const displayCharBox = Array.from(document.querySelectorAll(".display-page-now div"))
      const displayCharImage = Array.from(document.querySelectorAll(".display-page-now div img"))
      const displayCharDetails = Array.from(document.querySelectorAll(".details"))

      //! Add event listener to each character card to toggle between showing the image or the details
      displayCharBox.forEach((element, index) => {
        element.addEventListener("click", () => {
          console.log(element, index)
          displayCharImage[index / 2].classList.toggle("hide")
          displayCharDetails[index / 2].classList.toggle("details-display")
          displayCharDetails[index / 2].classList.toggle("details")
        })
      })
    })
}