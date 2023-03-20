ServerEvents.recipes(event => {
    // Add missing Immersive Engineering press recipes
    let materials = [
        'netherite',
        'signalum',
        'lumium',
        'enderium',
        'flux'
    ];

    for (let material of materials) {
        event.custom({
            type: "immersiveengineering:metal_press",
            energy: 2400,
            input: {
                "base_ingredient": {
                    "tag": `forge:ingots/${material}`
                },
                "count": 4
            },
            mold: "immersiveengineering:mold_gear",
            result: { "tag": `forge:gears/${material}` },
        }); 
    }

    event.remove({ id: 'thermal:press_gear_die' });
    event.shaped('thermal:press_gear_die', [
        ' P ',
        'PGP',
        ' P '
    ], {
        P: '#forge:plates/invar',
        G: '#forge:gears'
    })
});
