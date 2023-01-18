ServerEvents.recipes(event => {
    function makeItem(output, primaryInput, fourInputs, outputNbt) {
        event.custom({
            type: 'extendedcrafting:combination',
            powerCost: 10000000,
            input: {
                item: primaryInput
            },
            ingredients: [
                {
                    item: 'extendedcrafting:ender_star'
                },
                {
                    item: fourInputs[0]
                },
                {
                    item: 'extendedcrafting:flux_star'
                },
                {
                    item: fourInputs[1]
                },
                {
                    item: 'minecraft:nether_star'
                },
                {
                    item: fourInputs[2]
                },
                {
                    item: 'quark:dragon_scale'
                },
                {
                    item: fourInputs[3]
                },
            ],
            result: {
                item: output,
                nbt: outputNbt ?? '{}'
            }
        })
    }

    makeItem(
        'botania:creative_pool',
        'botania:fabulous_pool',
        [
            'botania:rune_greed',
            'botania:rune_pride',
            'botania:rune_gluttony',
            'botania:rune_envy'
        ]
    )

    makeItem(
        'botania:mana_tablet',
        'botania:mana_tablet',
        [
            'botania:pinkinator',
            'quark:pink_rune',
            'botania:pixie_dust',
            'createdeco:pink_decal'
        ],
        '{ mana: 500000, creative: 1b }'
    )
    
    makeItem(
        'thermal:rf_coil_creative_augment',
        'thermal:rf_coil_augment',
        [
            'thermal:flux_capacitor',
            'redstone_arsenal:flux_gem',
            'thermal:rf_potato',
            'redstone_arsenal:flux_ingot'
        ]
    )

    makeItem(
        'ars_nouveau:creative_source_jar',
        'ars_nouveau:source_jar',
        [
            'ars_nouveau:relay',
            'farmersdelight:tomato_sauce',
            'ars_nouveau:summon_focus',
            'ars_nouveau:source_berry_roll'
        ]
    )

    makeItem(
        'ars_nouveau:creative_spell_book',
        'ars_nouveau:archmage_spell_book',
        [
            'minecraft:enchanted_golden_apple',
            'botania:black_lotus',
            'neapolitan:magic_beans',
            'farmersdelight:glow_berry_custard'
        ]
    )

    makeItem(
        'create:creative_motor',
        'create:steam_engine',
        [
            'create:electron_tube',
            'create:blaze_burner',
            'create:precision_mechanism',
            'create:builders_tea'
        ]
    )

    makeItem(
        'create:creative_blaze_cake',
        'create:blaze_cake_base',
        [
            'minecraft:magma_cream',
            'neapolitan:strawberry_ice_cream',
            'create_confectionery:bar_of_ruby_chocolate',
            'hexcasting:dye_colorizer_pink'
        ]
    )

    makeItem(
        'angelring:angel_ring',
        'ars_nouveau:ring_of_potential',
        [
            'minecraft:feather',
            'minecraft:gold_ingot',
            'quark:bottled_cloud',
            'redstone_arsenal:flux_ingot'
        ]
    )
})

