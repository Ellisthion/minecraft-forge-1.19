JEIEvents.hideItems(event => {
    let items = [
        'luminessence_block'
    ];

    for (let item of items) {
        event.hide(`extendedcrafting:${item}`)
    }
})

ItemEvents.tooltip(tooltip => {
    tooltip.add('extendedcrafting:crafting_core', 'Only available via a quest.')
})