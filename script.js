function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

// console.log(generateRandomNumber(4))

// message data
const travelData = {
    travelLength: ['1 week', '2 weeks', '3 weeks'],
    destinations: ['New York', 'Tokyo', 'London'],
    travelCompanion: ['Best friend', 'Mum', 'Dad']
}

// store the message in an array
let travelMessage = [];

// Iterate over the object
for (let prop in travelData) {
    let optionNum = generateRandomNumber(travelData[prop].length)

    // create switch statement using the objects properties to customise message added to travel message

    switch(prop) {
        case 'travelLength' :
            travelMessage.push(`Your holiday will be for ${travelData[prop][optionNum]}.`)
            break
        case 'destinations' :
            travelMessage.push(`You will travel to ${travelData[prop][optionNum]}`)
            break
        case 'travelCompanion' :
            travelMessage.push(`You will travel with your ${travelData[prop][optionNum]}`)
            break
        default:
            travelMessage.push("You are not travelling.")
            
    }
}

function formatTravel(travel) {
    const formatted = travelMessage.join('\n')
    console.log(formatted)
}

formatTravel(travelMessage)
