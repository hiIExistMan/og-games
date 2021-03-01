// where they are in the /games directory
const games = ["Battler"];
for(let game of games) {
  // make a div to hold it
  let g = document.createElement("div");
  // add image and title from images folder and the "game" variable
  g.innerHTML =
  `
  <button onclick="window.location.replace('/games/${game}')">
  ${game}<br/>
  <img width="100" height="150" src="/images/${game}.png"/>
  </button>`;
  //append game to list
  console.log(document.querySelector("#games"));
  document.querySelector("#games").appendChild(g);
}