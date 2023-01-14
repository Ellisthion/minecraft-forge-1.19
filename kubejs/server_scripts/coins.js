ServerEvents.recipes(event => {
    // Not trying to hard to standardise coins but at
    // least make coin stacks craftable with Thermal coins
	
    let materials = [
        'copper',
        'iron',
        'gold',
        'netherite',

        // These don't have thermal coins
        // 'zinc',
        // 'brass',
        // 'cast_iron',
    ]

    for (let material of materials) {
        event.shaped(`createdeco:${material}_coinstack`, [
            'CC',
            'CC'
        ], {
            C: `#forge:coins/${material}`
        })
    }
})
