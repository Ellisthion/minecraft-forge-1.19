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
})