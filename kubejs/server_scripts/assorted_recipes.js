ServerEvents.recipes(event => {
    // Only allow fancy cake recipe
    event.remove({ output: 'minecraft:cake' })
    event.shaped('minecraft:cake', [
        ' M ',
        'SES',
        ' D '
    ], {
        M: '#forge:cheese_or_milk',
        S: '#forge:sugar',
        E: '#forge:eggs',
        D: '#forge:dough'
    })

    // Almost Unified standardises the dough, but we need to
    // remove the Farmer's Delight dough recipes
    event.remove({ output: '#forge:dough', mod: 'farmersdelight' });

    // Remove wheat -> bread recipes, must go via dough
    event.remove({ output: 'minecraft:bread', mod: 'minecraft' });
    event.remove({ output: 'minecraft:bread', mod: 'quark' });
});

ServerEvents.tags('item', event => {
    // These aren't food!
    event.remove('forge:eggs', 'minecraft:turtle_egg')
    event.remove('balm:eggs', 'minecraft:turtle_egg')
    event.remove('farmersdelight:cabbage_roll_ingredients', 'minecraft:turtle_egg')
})