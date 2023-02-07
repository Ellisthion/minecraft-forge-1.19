// Flavours that can't be crafted due to dependency on    
// mods we didn't include
let teas = [
    'mango', 'lime', 'lychee', 'kiwi', 'blood', 'lemon', 'blueberry', 'orange', 'peach', 'pineapple', 'yucca', 'cherry', 'plum', 'aloe', 'blackberry', 'jackfruit', 'coconut', 'dragonfruit', 'apricot', 'durian', 'fig', 'tamarind', 'gooseberry', 'grape', 'grapefruit', 'papaya', 'guava', 'passionfruit', 'pomegranate', 'persimmon', 'raspberry', 'starfruit', 'lavender', 'pomelo', 'mandarin', 'citron', 'redlove', 'barberry'
]

let syrups = [
    'raspberry', 'coconut'
]

JEIEvents.hideItems(event => {
    for (let tea of teas) {
        event.hide(`createcafe:${tea}_tea_bucket`)
    }

    for (let syrup of syrups) {
        event.hide(`createcafe:${syrup}_syrup_bucket`)
        event.hide(`createcafe:${syrup}_iced_coffee`)
    }
})

JEIEvents.hideFluids(event => {
    for (let tea of teas) {
        event.hide(`createcafe:${tea}_tea`)
    }

    for (let syrup of syrups) {
        event.hide(`createcafe:${syrup}_syrup`)
    }
})