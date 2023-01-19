ItemEvents.tooltip(tooltip => {
    tooltip.add(/botania:apothecary_/, 'Only available after completing the Age of Discovery.')
    tooltip.add('immersiveengineering:hammer', 'Only available after completing the Age of Magic.')
    tooltip.add('immersiveengineering:wirecutter', 'Only available after completing the Age of Magic.')
    tooltip.add('extendedcrafting:crafting_core', 'Only available via quest from completing the Age of Power.')
    tooltip.add('extendedcrafting:flux_star', 'Only available via quest in the Age of Destiny.')
    tooltip.add('extendedcrafting:ender_star', 'Only available via quest in the Age of Destiny.')

    tooltip.add(/kubejs:fleatonium_/, 'Used for quest in the Age of Destiny.');
    tooltip.add('kubejs:age_proof_discovery', 'The Flea of Destiny must conduct the Ritual of Discovery to complete the Age of Discovery.');
    tooltip.add('kubejs:age_proof_magic', 'The Flea of Destiny must conduct the Ritual of Magic to complete the Age of Magic.');
    tooltip.add('kubejs:age_proof_technology', 'The Flea of Destiny must conduct the Ritual of Power to complete the Age of Power.');
    tooltip.add('kubejs:age_proof_destiny', 'The Flea of Destiny must conduct the Ritual of Destiny to complete the Age of Destiny.');
})

ClientEvents.highPriorityAssets(event => {
    function rename(item, newName) {
        event.addLang(Item.of(item).item.getDescriptionId(), newName);
    }

    rename('extendedcrafting:flux_star', 'Destiny Star of Technology');
    rename('extendedcrafting:ender_star', 'Destiny Star of Magic');
})
