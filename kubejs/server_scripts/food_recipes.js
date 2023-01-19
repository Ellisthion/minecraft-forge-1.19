ServerEvents.recipes(event => {
    // Almost Unified standardises the dough, but we need to
    // remove the Farmer's Delight dough recipes
    event.remove({ output: '#forge:dough', mod: 'farmersdelight' });

    // Clean up
    event.remove({ id: 'farmersdelight:wheat_dough_from_water'});
    event.remove({ id: 'farmersdelight:wheat_dough_from_eggs'});

    // Remove wheat -> bread recipes, must go via dough
    event.remove({ output: 'minecraft:bread', mod: 'minecraft' });
    event.remove({ output: 'minecraft:bread', mod: 'quark' });

    // Dough only made by mixing or bulk washing
    event.remove({ id: 'create:crafting/appliances/dough' })
    event.remove({ id: 'createcafe:crafting/oreo_dough_shapeless' })

    // Cake from flour
    event.remove({ output: 'minecraft:cake' })
    event.shaped('minecraft:cake', [
        ' M ',
        'SES',
        'FFF'
    ], {
        M: '#forge:cheese_or_milk',
        S: '#forge:sugar',
        E: '#forge:eggs',
        F: '#forge:flour'
    })

    // Remove pie crust wheat recipe
    event.remove({ id: 'farmersdelight:pie_crust' })

    // Strawberry scones from dough
    event.remove({ output: 'neapolitan:strawberry_scones' })
    event.shapeless('neapolitan:strawberry_scones', [
        '#forge:dough',
        '#forge:sugar',
        '#forge:fruits/strawberry'
    ])

    // Burger bun from dough
    event.remove({ output: 'some_assembly_required:burger_bun' })
    event.shapeless('some_assembly_required:burger_bun', [
        '#forge:dough',
        '#forge:seeds'
    ])

    // Adzuki bun from dough
    event.remove({ output: 'neapolitan:adzuki_bun' })
    event.shapeless('neapolitan:adzuki_bun', [
        'neapolitan:roasted_adzuki_beans',
        '#forge:cheese_or_milk',
        '#forge:dough'
    ])

    // Cookies from dough
    event.remove({ output: 'minecraft:cookie' })
    event.shapeless('minecraft:cookie', [
        'create_confectionery:bar_of_black_chocolate', // Chocolate instead of cocoa beans
        '#forge:dough'
    ])
    event.remove({ output: 'farmersdelight:honey_cookie' })
    event.shapeless('farmersdelight:honey_cookie', [
        'minecraft:honey_bottle',
        '#forge:dough'
    ])
    event.remove({ output: 'farmersdelight:sweet_berry_cookie' })
    event.shapeless('farmersdelight:sweet_berry_cookie', [
        'minecraft:sweet_berries',
        '#forge:dough'
    ])

    // Replace wheat with flour directly
    event.replaceInput({ input: 'farmersdelight:pie_crust', type: 'minecraft:crafting_shaped' }, 'minecraft:wheat', '#forge:flour')
    event.replaceInput({ output: 'supplementaries:pancake' }, 'minecraft:wheat', '#forge:flour')
    event.replaceInput({ output: 'neapolitan:mint_cake' }, 'minecraft:wheat', '#forge:flour')
    event.replaceInput({ output: 'neapolitan:strawberry_cake' }, 'minecraft:wheat', '#forge:flour')
    event.replaceInput({ output: 'neapolitan:chocolate_cake' }, 'minecraft:wheat', '#forge:flour')
    event.replaceInput({ output: 'neapolitan:banana_cake' }, 'minecraft:wheat', '#forge:flour')
    event.replaceInput({ output: 'neapolitan:vanilla_cake' }, 'minecraft:wheat', '#forge:flour')
    event.replaceInput({ output: 'neapolitan:adzuki_cake' }, 'minecraft:wheat', '#forge:flour')
    event.replaceInput({ output: 'neapolitan:banana_bread' }, 'minecraft:wheat', '#forge:flour')

    // Remove neapolitan chocolate bar recipe
    event.remove({ id: 'neapolitan:chocolate/chocolate_bar' })

    // Farmer's Delight hot cocoa from cocoa powder because why not
    // In datapack
    //event.replaceInput({ id: 'farmersdelight:cooking/hot_cocoa' }, 'minecraft:cocoa_beans', 'create_confectionery:cocoa_powder')

    // Replace Delightful marshmallows with Create Confectionery
    event.replaceInput({ id: 'delightful:food/smore_from_chocolate' }, 'delightful:cooked_marshmallow_stick', 'create_confectionery:marshmallow')
    event.remove({ id: 'delightful:food/marshmallow_stick_from_water_bottle' })
    event.remove({ id: 'delightful:food/marshmallow_stick_create_confectionery' })
    event.remove({ id: 'delightful:campfire/marshmallow_stick' })
});

ServerEvents.tags('item', event => {
    // These aren't food!
    event.remove('forge:eggs', 'minecraft:turtle_egg')
    event.remove('balm:eggs', 'minecraft:turtle_egg')
    event.remove('farmersdelight:cabbage_roll_ingredients', 'minecraft:turtle_egg')
})