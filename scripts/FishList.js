// Import the function that returns a copy of the fish array
import {fishDatabase} from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = fishDatabase.fish
    console.log(fishDatabase.fish)

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish_info">
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species"> Species : ${fish.species}</div>
            <div class="fish__length"> Length : ${fish.length}</div>
            <div class="fish__location"> Location :${fish.location}</div>
            <div class="fish__diet"> Diet : ${fish.food}</div>
            </div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}