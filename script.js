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

function printWeight() {
    let gravity = 1
    switch(selectPlanet.value){
        case 'Earth':
            gravity = 1
            break
        case 'Venus':
            gravity = 0.9
            break
        case 'Saturn':
            gravity = 1.07
            break
        case 'Neptune':
            gravity = 1.14
            break
        case 'Mercury':
            gravity = 2.53
            break
        case 'Mars':
            gravity = 0.38
            break
        case 'Uranus':
            gravity = 0.91
            break
        case 'Moon':
            gravity = 0.16
            break
        case 'Pluto':
            gravity = 0.08
            break  
    }

    const weight = gravity * userInput.value
    weightOutput.innerText = `${weight} KG`
}