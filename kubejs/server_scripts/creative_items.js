ServerEvents.recipes(event => {
    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 10000000,
        input: {
            item: 'botania:fabulous_pool'
        },
        ingredients: [
            {
                item: 'extendedcrafting:ender_star'
            },
            {
                item: 'kubejs:fleatonium_red'
            },
            {
                item: 'kubejs:fleatonium_green'
            },
            {
                item: 'kubejs:fleatonium_black'
            }
        ],
        result: {
            item: 'botania:creative_pool'
        }
    })
})

