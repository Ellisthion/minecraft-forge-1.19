ItemEvents.tooltip(tooltip => {
    tooltip.add(/botania:apothecary_/, 'Only available after completing the Age of Discovery.')
    tooltip.add('immersiveengineering:hammer', 'Only available after completing the Age of Magic.')
    tooltip.add('immersiveengineering:wirecutter', 'Only available after completing the Age of Magic.')
    tooltip.add('extendedcrafting:crafting_core', 'Only available via quest from completing the Age of Power.')
    tooltip.add('extendedcrafting:flux_star', 'Only available via quest in the Age of Destiny.')
    tooltip.add('extendedcrafting:ender_star', 'Only available via quest in the Age of Destiny.')
})

ClientEvents.highPriorityAssets(event => {
    function rename(item, newName) {
        event.addLang(Item.of(item).item.getDescriptionId(), newName);
    }

    rename('extendedcrafting:flux_star', 'Destiny Star of Technology');
    rename('extendedcrafting:ender_star', 'Destiny Star of Magic');
})
