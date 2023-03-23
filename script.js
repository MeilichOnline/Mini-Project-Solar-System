const userInput = document.getElementById('userInput')
const weightOutput = document.getElementById('weightOutput')
const selectPlanet = document.getElementById('planet')
const planets = ['Earth','Venus','Saturn','Neptune','Mercury','Mars','Uranus','Moon','Pluto']
for (const planet of planets) {
    const option = document.createElement('option')
    option.value = planet
    option.text = planet
    selectPlanet.appendChild('option')
    console.log(planet)
}