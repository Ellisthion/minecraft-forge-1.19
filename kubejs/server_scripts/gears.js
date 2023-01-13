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
            input: { "tag": `forge:ingots/${material}` },
            mold: "immersiveengineering:mold_gear",
            result: { "tag": `forge:gears/${material}` },
        }); 
    }
});
