ServerEvents.recipes(event => {
    let syrups = [
        'raspberry', 'coconut'
    ]

    for (let syrup of syrups) {
	    event.remove({ id: `createcafe:filling/coffee/${syrup}_iced_coffee_filling` })
    }
})
