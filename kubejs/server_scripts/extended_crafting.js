ServerEvents.recipes(event => {
    // Only using a few blocks/items. Crafting core obtained via quest only.
    event.remove({ mod: 'extendedcrafting' })
    event.shaped('extendedcrafting:pedestal', [
        ' I ',
        ' I ',
        'IBI'
    ], {
        I: '#forge:ingots/steel',
        B: '#forge:storage_blocks/steel'
    })

    event.custom({
        type: 'botania:runic_altar',
        ingredients: [
            {
                item: 'minecraft:nether_star'
            },
            {
                item: 'quark:dragon_scale'
            },
            {
                item: 'botania:life_essence'
            },
            {
                item: 'botania:life_essence'
            },
            {
                item: 'botania:life_essence'
            }
        ],
        mana: 85000,
        output: {
            item: 'extendedcrafting:ender_star'
        }
    })
})