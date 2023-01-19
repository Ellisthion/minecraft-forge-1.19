JEIEvents.hideItems(event => {
    const items = [
        // Hide uranium since it's not used for anything
        'immersiveengineering:ingot_uranium',
        'immersiveengineering:nugget_uranium',
        'immersiveengineering:raw_uranium',
        'immersiveengineering:plate_uranium',
        'immersiveengineering:dust_uranium',
        'immersiveengineering:sheetmetal_uranium',
        'immersiveengineering:slab_sheetmetal_uranium',
        'immersiveengineering:ore_uranium',
        'immersiveengineering:deepslate_ore_uranium',
        'immersiveengineering:raw_block_uranium',
        'immersiveengineering:storage_uranium',
        'immersiveengineering:slab_storage_uranium',
        'create:crushed_uranium_ore'
    ];

    for (let item of items) {
        event.hide(item);
    }
})