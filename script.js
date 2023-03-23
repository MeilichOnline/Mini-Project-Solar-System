const userInput = document.getElementById('userInput')
const weightOutput = document.getElementById('weightOutput')
const selectPlanet = document.getElementById('planet')
const planetImage = document.getElementById('imagePlanet')
console.log(planetImage)
const planets = ['Earth','Venus','Saturn','Neptune','Mercury','Mars','Uranus','Moon','Pluto']
for (const planet of planets) {
    const option = document.createElement('option')
    option.value = planet
    option.text = planet
    selectPlanet.appendChild(option)
}
selectPlanet.addEventListener('change',(planet)=>{
    switchPlanet(planet.target.value)
    printWeight()
})
function switchPlanet(planet) {
    console.log(planet)
    switch(planet){
        case 'Earth':
            planetImage.src = 'images/earth.png'
            break
        case 'Venus':
            planetImage.src = 'images/venus.png'
            break
        case 'Saturn':
            planetImage.src = 'images/saturn.png'
            break
        case 'Neptune':
            planetImage.src = 'images/neptune.png'
            break
        case 'Mercury':
            planetImage.src = 'images/mercury.png'
            break
        case 'Mars':
            planetImage.src = 'images/mars.png'
            break
        case 'Uranus':
            planetImage.src = 'images/uranus.png'
            break
        case 'Moon':
            planetImage.src = 'images/moon.png'
            break
        case 'Pluto':
            planetImage.src = 'images/pluto.png'
            break  
    }
}

userInput.addEventListener('change', (number) => {
    printWeight()
})

function calcWeight(weight) {
    const result = weight <= 0 ? 0 : 
    weightOutput.innerText = `${result} Kg`
}

function printWeight() {
    console.log(userInput.value)
    console.log(selectPlanet.value)
    let gravity = 9.18
    let radius = 6.371
    switch(selectPlanet.value){
        case 'Earth':
            gravity = 9.18
            break
        case 'Venus':
            gravity = 12
            break
        case 'Saturn':
            gravity = 65
            break
        case 'Neptune':
            gravity = 5
            break
        case 'Mercury':
            gravity = 1
            break
        case 'Mars':
            gravity = 43
            break
        case 'Uranus':
            gravity = 54
            break
        case 'Moon':
            gravity = 3
            break
        case 'Pluto':
            gravity = 34
            break  
    }
    /* g = G * M / r²*/
    const weight = ((gravity * userInput.value) / (radius*radius)*1000)
    weightOutput.innerText = `${weight} KG`
}