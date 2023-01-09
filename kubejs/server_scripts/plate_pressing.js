ServerEvents.recipes(event => {
	let materials = [
        'copper',
        'brass',
        'iron',
        'gold',
        'zinc',
        'cast_iron',
        'aluminum',
        'uranium',
        'steel',
        'rose_gold',
        'netherite',
        'signalum',
        'lumium',
        'enderium',
        'tin',
        'lead',
        'silver',
        'nickel',
        'bronze',
        'electrum',
        'invar',
        'constantan'
    ];

    function rewritePlate(material) {
        let ingotTag = 'forge:ingots/' + material;
        let ingotItem = AlmostUnified.getPreferredItemForTag(ingotTag);

        let plateTag = 'forge:plates/' + material;
        let plateItem = AlmostUnified.getPreferredItemForTag(plateTag);

        if (ingotItem == null || plateItem == null) {
            console.error('null for ' + material);
            console.log('ingot: ' + ingotItem);
            console.log('plate: ' + plateItem);
            return;
        }

        const hasCreateRecipe = event.containsRecipe({
            output: plateItem,
            type: 'create:pressing'
        });

        if (!hasCreateRecipe) {
            event.custom({
                type: 'create:pressing',
                ingredients: [
                  Ingredient.of(ingotItem)
                ],
                results: [
                  Item.of(plateItem)
                ]
            })
        }

        const hasImmersiveEngineeringRecipe = event.containsRecipe({
            result: '#' + plateTag,
            type: 'immersiveengineering:metal_press'
        });

        if (!hasImmersiveEngineeringRecipe) {
            event.custom({
                type: "immersiveengineering:metal_press",
                energy: 2400,
                input: { "tag": ingotTag },
                mold: "immersiveengineering:mold_plate",
                result: { "tag": plateTag },
            });
        }

        const hasThermalRecipe = event.containsRecipe({
            output: '#' + plateTag,
            type: 'thermal:press'
        });

        // Thermal seems to automatically pick up recipes from Immersive Engineering,
        // so adding the recipe causes a duplicate.
        // EXCEPT for the Create-specific materials which ImmEng doesn't know about.

        let createMaterials = ['brass', 'zinc', 'cast_iron'];

        if (!hasThermalRecipe && createMaterials.includes(material)) {
            event.custom({
                type: 'thermal:press',
                ingredients: [
                    Ingredient.of(ingotItem)
                ],
                results: [
                    Item.of(plateItem)
                ]
            });
        }
    }

    for (let mat of materials) {
        rewritePlate(mat);
    }
})