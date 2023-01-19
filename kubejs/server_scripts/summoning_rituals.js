SummoningRituals.start(event => {
    let fleaOfDestiny = 'MutantFlea';
    
    let fleaStartedRitual = event.player != null && event.player.getName().equals(Text.of(fleaOfDestiny));
    if (!fleaStartedRitual) {
        event.server.tell(Text.red('Only the Flea of Destiny can perform rituals.'));
        event.cancel();
        return;
    }

    event.level.spawnLightning(event.pos.x + 0.5, event.pos.y, event.pos.z + 0.5, true);

    if (event.recipe.getId() === 'kubejs:ritual_of_destiny') {
        event.server.tell(Text.aqua('More sacrifices are needed! Sacrificing all players to the Flea of Destiny!'));
        let killPlayersCommand = `/execute at ${fleaOfDestiny} as @a unless entity @s[distance=0] run kill @s`;
        event.player.server.runCommandSilent(killPlayersCommand);
    }
})

ServerEvents.recipes(event => {
    // Craft altar itself
    event.shaped('summoningrituals:altar', [
        'CSC',
        'GRG',
        ' L '
    ], {
        C: 'minecraft:candle',
        S: 'minecraft:wither_skeleton_skull',
        G: '#forge:plates/gold',
        R: 'minecraft:red_carpet',
        L: 'minecraft:dark_oak_log'
    })

    // Ritual of Discovery
    event.recipes.summoningrituals
        .altar('quark:dragon_scale')
        .id('kubejs:ritual_of_discovery')
        .itemOutput('kubejs:age_proof_discovery')
        .input('9x minecraft:diamond')
        .input('9x minecraft:firework_rocket')
        .input('9x minecraft:echo_shard')
        .sacrifice('minecraft:cow')
        .sacrifice('minecraft:sheep')
        .sacrifice('minecraft:goat')
        .sacrifice('minecraft:chicken')
        .sacrificeRegion(5, 5)
        .recipeTime(200)
        .blockBelow('minecraft:amethyst_block')
        .dayTime('day')
        .weather('clear')

    // Ritual of Magic
    event.recipes.summoningrituals
        .altar('botania:life_essence')
        .id('kubejs:ritual_of_magic')
        .itemOutput('kubejs:age_proof_magic')
        .input('9x minecraft:iron_block')
        .input('9x minecraft:coal_block')
        .input('ars_nouveau:wilden_tribute')
        .sacrifice('minecraft:zombie')
        .sacrifice('minecraft:skeleton')
        .sacrifice('minecraft:creeper')
        .sacrifice('minecraft:enderman')
        .sacrificeRegion(5, 5)
        .recipeTime(200)
        .blockBelow('botania:terrasteel_block')
        .dayTime('day')
        .weather('clear')

    // Ritual of Technology
    event.recipes.summoningrituals
        .altar('immersiveengineering:component_electronic_adv')
        .id('kubejs:ritual_of_technology')
        .itemOutput('kubejs:age_proof_technology')
        .input('9x #forge:ingots/aluminum')
        .input('9x #forge:ingots/lumium')
        .input('thermal:refined_fuel_bucket')
        .sacrifice('minecraft:villager')
        .sacrifice('minecraft:pillager')
        .sacrifice('minecraft:vindicator')
        .sacrifice('minecraft:witch')
        .sacrificeRegion(5, 5)
        .recipeTime(200)
        .blockBelow('immersiveengineering:coil_mv')
        .dayTime('day')
        .weather('clear')

    // Ritual of Destiny
    event.recipes.summoningrituals
        .altar('minecraft:player_head')
        .id('kubejs:ritual_of_destiny')
        .itemOutput('kubejs:age_proof_destiny')
        .input('minecraft:gold_block')
        .input('minecraft:gold_block')
        .input('minecraft:gold_block')
        .input('minecraft:gold_block')
        .sacrifice('minecraft:villager', 157)
        .sacrificeRegion(5, 5)
        .recipeTime(200)
        .blockBelow('minecraft:obsidian')
        .dayTime('day')
        .weather('clear')
})

