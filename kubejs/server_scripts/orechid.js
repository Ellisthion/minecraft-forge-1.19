ServerEvents.recipes(event => {
	/*
    Example:

    {
        "type": "botania:orechid",
        "input": {
            "type": "block",
            "block": "minecraft:deepslate"
        },
        "output": {
            "type": "block",
            "block": "minecraft:deepslate_lapis_ore"
        },
        "weight": 175
    }

    */

    /*
        Original weights:

        Coal 67415
        Iron 29371
        Copper 7000
        Gold 2647
        Redstone 7654
        Lapis 1079
        Diamond 883
        Emerald 1239        

        Deepslate Coal 75
        Deepslate Iron 250
        Deepslate Copper 75
        Deepslate Gold 125
        Deepslate Redstone 150
        Deepslate Lapis 175
        Deepslate Diamond 100
        Deepslate Emerald 50
    */

    /*
        Original modded vein size and attempts per chunk

        Immersive Engineering:

        Bauxite: size 6, attempts 16
        Lead: size 8, attempts 12
        Silver: size 9, attempts 10
        Nickel: size 5, attempts 7
        Deep Nickel: size 6, attempts 11
        Uranium: size 4, attempts 9 (is this even used?)

        Thermal:

        Apatite: size 9, attempts 3
        Sulfur: size 7, attempts 2
        Tin: size 9, attempts 6
        Silver: size 8, attempts 4
        Oil sand: size 24, attempts 2
        Niter: size 7, attempts 2
        Nickel: size 8, attempts 4
        Lead: size 8, attempts 6
        Cinnabar: size 8, attempts 1
    */

    let originalOrchidRates = {
        coal: 67415,
        iron: 29371,
        copper: 7000,
        gold: 2647,
        redstone: 7654,
        lapis: 1079,
        diamond: 883,
        emerald: 1239    
    }
   
    let vanillaWeights = {
        coal: 20 * 37,
        iron: 40 * 13,
        copper: 6 * 16,
        gold: 4 * 9,
        redstone: 4 * 10,
        lapis: 2 * 10,
        diamond: 7 * 4,
        emerald: 50 * 1 
    }

    let weights = {
        'immersiveengineering:ore_aluminum': 6 * 16,
        'immersiveengineering:ore_lead': (8 * 12 + 8 * 6) / 2,
        'immersiveengineering:ore_silver': (9 * 10 + 8 * 4) / 2,
        'immersiveengineering:ore_nickel': (5 * 7 + 8 * 4) / 2,
        'thermal:apatite_ore': 9 * 3,
        'thermal:sulfur_ore': 7 * 2,
        'thermal:tin_ore': 9 * 6,
        'thermal:niter_ore': 7 * 2,
        'thermal:cinnabar_ore': 8 * 1,
        'create:zinc_ore': 8 * 12
    }

    let deepWeights = {
        'immersiveengineering:deepslate_ore_aluminum': (6 * 16) * 4,
        'immersiveengineering:deepslate_ore_lead': (8 * 12 + 8 * 6) / 2,
        'immersiveengineering:deepslate_ore_silver': (9 * 10 + 8 * 4) / 2,
        'thermal:deepslate_tin_ore': (9 * 6) * 4,
        'thermal:deepslate_nickel_ore': (6 * 11) * 4,
        'create:deepslate_zinc_ore': 8 * 12
    }

    const ores = Object.keys(weights);
    const deeplateOres = Object.keys(deepWeights);

    function addToOrechid(input, output, weight) {
        event.custom({
            "type": "botania:orechid",
            "input": {
                "type": "block",
                "block": input
            },
            "output": {
                "type": "block",
                "block": output
            },
            "weight": weight
        })
    }

    for (let ore of ores) {
        let weight = weights[ore] * 50;
        let item = AlmostUnified.getReplacementForItem(ore).getId();

        addToOrechid("minecraft:stone", item, weight);
    }

    for (let deeplateOre of deeplateOres) {
        let weight = deepWeights[deeplateOre] * 4;
        let item = AlmostUnified.getReplacementForItem(deeplateOre).getId();

        addToOrechid("minecraft:deepslate", item, weight);
    }
})
