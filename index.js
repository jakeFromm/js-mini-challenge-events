/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

let header = document.querySelector("h1#header")
header.addEventListener("click", function(){
  toggleColor(header)
})


/***** Deliverable 2 *****/
const form = document.querySelector("#new-player-form")
form.onsubmit = function createPlayer(e) {
  e.preventDefault()
  let newPlayer =  {}
  newPlayer.name = form.name.value
  newPlayer.nickname = form.nickname.value
  newPlayer.photo = form.photo.value
  newPlayer.number = form.number.value
  renderPlayer(newPlayer)
}

/***** Deliverable 3 *****/
const likeButtons = document.querySelectorAll(".like-button")
for(const button of likeButtons)
  button.addEventListener("click", function(e){
    const button = e.target
    const parentDiv = button.parentElement
    const likes = parentDiv.querySelector(".likes")
    const currentLikes = parseInt(likes.textContent)
    const newLikes = currentLikes + 1
    likes.textContent = `${newLikes} likes`
})

