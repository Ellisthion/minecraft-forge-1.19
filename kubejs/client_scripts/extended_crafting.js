JEIEvents.hideItems(event => {
    let items = [
        'luminessence_block',
        'black_iron_block',
        'redstone_ingot_block',
        'enhanced_redstone_ingot_block',
        'ender_ingot_block',
        'enhanced_ender_ingot_block',
        'crystaltine_block',
        'the_ultimate_block',
        'nether_star_block',
        'flux_star_block',
        'ender_star_block',
        'frame',
        'luminessence',
        'luminessence_ingot',
        'black_iron_ingot',
        'redstone_ingot',
        'enhanced_redstone_ingot',
        'ender_ingot',
        'enhanced_ender_ingot',
        'crystaltine_ingot',
        'the_ultimate_ingot',
        'luminessence_nugget',
        'black_iron_nugget',
        'redstone_nugget',
        'enhanced_redstone_nugget',
        'ender_nugget',
        'enhanced_ender_nugget',
        'crystaltine_nugget',
        'the_ultimate_nugget',
        'black_iron_slate',
        'basic_catalyst',
        'advanced_catalyst',
        'elite_catalyst',
        'ultimate_catalyst',
        'redstone_catalyst',
        'enhanced_redstone_catalyst',
        'ender_catalyst',
        'enhanced_ender_catalyst',
        'crystaltine_catalyst',
        'the_ultimate_catalyst',
        'basic_component',
        'advanced_component',
        'elite_component',
        'ultimate_component',
        'redstone_component',
        'enhanced_redstone_component',
        'ender_component',
        'enhanced_ender_component',
        'crystaltine_component',
        'the_ultimate_component',
        'recipe_maker'
    ];

    for (let item of items) {
        event.hide(`extendedcrafting:${item}`)
    }

    // Hide Patchouli book
    event.hide(Item.of('patchouli:guide_book', { 'patchouli:book': 'extendedcrafting:guide' }));
})
