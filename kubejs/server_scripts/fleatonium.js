ServerEvents.recipes(event => {
    function make(input, deployItem, fluid, result) {
        let intermediary = result + '_partial';

        event.custom({
            type: 'create:sequenced_assembly',
            ingredient: {
              item: input
            },
            loops: 3,
            results: [
              {
                item: result
              }
            ],
            sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: intermediary
                    },
                    {
                        item: deployItem
                    }
                ],
                results: [
                    {
                        item: intermediary
                    }
                ]
            },
            {
                type: 'create:filling',
                ingredients: [
                {
                    item: intermediary
                },
                {
                    amount: 500,
                    fluid: fluid,
                    nbt: {}
                }
            ],
                results: [
                {
                    item: intermediary
                }
            ]
            },
            {
                type: 'create:pressing',
                ingredients: [
                {
                    item: intermediary
                }
            ],
                results: [
                {
                    item: intermediary
                }
            ]
            }
        ],
            transitionalItem: {
                item: intermediary
            }
        })
    }

    make('minecraft:prismarine_crystals', 'immersiveengineering:plate_duroplast', 'thermal:ender', 'kubejs:fleatonium_green');
    make('ars_nouveau:source_gem', 'thermal:cured_rubber', 'thermal:redstone', 'kubejs:fleatonium_black');
    make('botania:dragonstone', 'thermal:rosin', 'thermal:glowstone', 'kubejs:fleatonium_red');
})