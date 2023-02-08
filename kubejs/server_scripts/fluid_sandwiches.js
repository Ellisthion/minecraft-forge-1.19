// Let's make arbitrary fluids work on sandwiches!pome
// WITHOUT perma-crashing the server
// That would be nice
let alreadyOkay = ['create:tea', 'create:honey', 'minecraft:milk', 'minecraft:water', 'create:potion']
let treatAsWater = ['cofh_core:potion', 'immersiveengineering:potion']
let treatAsPoison = ['immersiveengineering:acetaldehyde', 'immersiveengineering:biodiesel', 'immersiveengineering:creosote', 'immersiveengineering:ethanol', 'immersiveengineering:herbicide', 'immersiveengineering:phenolic_resin', 'immersiveengineering:plantoil', 'immersiveengineering:redstone_acid', 'sliceanddice:fertilizer', 'thermal:creosote', 'thermal:crude_oil', 'thermal:heavy_oil', 'thermal:latex', 'thermal:light_oil', 'thermal:refined_fuel', 'thermal:resin', 'thermal:sap', 'thermal:tree_oil']
let createCafeTeaPattern = /^createcafe:(\w+)_tea$/
let createCafeSyrupPattern = /^createcafe:(\w+)_syrup$/

function makePotion(potionId, displayName) {
    return {
        item: "minecraft:potion",
        nbt: {
            Potion: potionId,
            display: displayName == null ? undefined : {Name:`{"text":"${displayName}"}`},
        },
    }
}

function getTeaFlavour(flavour) {
    switch (flavour) {
        case 'blood':
            return 'blood_orange';
        case 'mana':
            return 'mana_berry';
        default:
            return flavour;
    }
}

let effectIdNumbers = {
    blindness: 15,
    levitation: 25,
}

function makeCustomPotion(effectId, displayName) {
    let effectIdNumber = effectIdNumbers[effectId];
    if (effectIdNumber == null) {
        throw new Error('Could not find effect id for effect name: ' + name);
    }

    return {
        item: "minecraft:potion",
        nbt: {
            CustomPotionEffects: [{ Id: effectIdNumber, Duration: 400 }],
            CustomPotionColor: 60150, // Doesn't seem to work correctly
            display: { Name: `{"text":"${displayName}"}` },
        },
        
    }
}

// Fluids used as this items without re-writing appearance
let replacementLookup = {
    'cofh_core:honey': 'minecraft:honey_bottle',
    
    'thermal:ender': makePotion('ars_nouveau:freezing_potion_strong', 'Resonant Ender'),
    'thermal:glowstone': makeCustomPotion('levitation', 'Energized Glowstone'),
    'thermal:redstone': makeCustomPotion('blindness', 'Destabilized Redstone'),
    'immersiveengineering:concrete': makePotion('minecraft:strong_slowness', 'Concrete'),
    'minecraft:lava': makePotion('ars_nouveau:blasting_potion_strong', 'Lava'),

    'cofh_core:experience': makePotion('minecraft:luck'),
    'sophisticatedcore:xp_still': makePotion('minecraft:luck')
}

// Fluid-item matchups that should change appearance
let asItemLookup = {
    'thermal:syrup': 'thermal:syrup_bottle',

    'create:chocolate': 'create:bar_of_chocolate',
    'create_confectionery:black_chocolate': 'create_confectionery:bar_of_black_chocolate',
    'create_confectionery:white_chocolate': 'create_confectionery:bar_of_white_chocolate',
    'create_confectionery:ruby_chocolate': 'create_confectionery:bar_of_ruby_chocolate',
    'create_confectionery:caramel': 'create_confectionery:bar_of_caramel',

    'create_confectionery:hot_chocolate': 'create_confectionery:hot_chocolate_bottle',
    'createcafe:coffee': 'createcafe:iced_coffee',
}

let itemFluidColours = {
    'thermal:syrup': '0xc76c0e',

    'create:chocolate': '0x9f493b',
    'create_confectionery:black_chocolate': '0x3d1101',
    'create_confectionery:white_chocolate': '0xd89e66',
    'create_confectionery:ruby_chocolate': '0xd066a6',
    'create_confectionery:caramel': '0xdaaf92',

    'create_confectionery:hot_chocolate': '0xcf9e85',
    'createcafe:coffee': '0xc84827',
}

let teaFlavourColours = {
    'melted_sugar': '0xc8fff7e0',
    'filling': '0xc8ededed',
    'oreo': '0xc8dedad3',
    'mango': '0xc8fcc03d',
    'lime': '0xc8b3ff26',
    'lychee': '0xc8ff9a96',
    'kiwi': '0xc894fc90',
    'mana': '0xc817e4ff',
    'blood': '0xc8fc3003',
    'lemon': '0xc8ffe645',
    'watermelon': '0xc8b83b56',
    'strawberry': '0xc8ffa6b8',
    'blueberry': '0xc89f8cff',
    'vanilla': '0xc8ede6d8',
    'orange': '0xc8de9c33',
    'peach': '0xc8edc29f',
    'pineapple': '0xc8ffd752',
    'banana': '0xc8ffe79e',
    'yucca': '0xc8c8f25e',
    'cherry': '0xc8c7445e',
    'plum': '0xc8ffb8f5',
    'aloe': '0xc898de52',
    'apple': '0xc8fceb77',
    'blackberry': '0xc8875284',
    'pumpkin': '0xc8f7e0ad',
    'jackfruit': '0xc8f5cc71',
    'coconut': '0xc8fcf9e3',
    'dragonfruit': '0xc8ff1f8f',
    'apricot': '0xc8ffcb94',
    'avocado': '0xc896b366',
    'sweetberry': '0xc8db2e48',
    'durian': '0xc8f4c672',
    'fig': '0xc8773c65',
    'tamarind': '0xc8ffbd7f',
    'gooseberry': '0xc8fcd946',
    'grape': '0xc8ea77c8',
    'grapefruit': '0xc8ff8060',
    'papaya': '0xc8ffb163',
    'guava': '0xc8ff835b',
    'passionfruit': '0xc8fecc35',
    'pomegranate': '0xc8ba485b',
    'persimmon': '0xc8e89166',
    'raspberry': '0xc8ff7d7d',
    'starfruit': '0xc8ffda65',
    'lavender': '0xc8deaef2',
    'pomelo': '0xc8ff6f4c',
    'mandarin': '0xc8ffc216',
    'citron': '0xc8ffc300',
    'redlove': '0xc8e24f63',
    'barberry': '0xc8a1153c',
    'coffee': '0xc8482713',
    'icedcoffee': '0xc85c3721',
}

function getFluids() {
    let fluidList = Fluid.getTypes();
    let result = [];

    for (let fluid of fluidList) {
        if (fluid === 'minecraft:empty') {
            continue;
        }

        if (fluid.includes('flowing')) {
            continue;
        }

        result.push(fluid);
    }

    return result;
}

ServerEvents.recipes(event => {
    function registerSpouting(fluidId, item) {
        let resultObject = null;
        if (typeof item === 'string' || item instanceof String) {
            resultObject = {
                "item": item
            }
        } else {
            resultObject = item
        }

        event.custom({
            "type": "some_assembly_required:sandwich_spouting",
            "fluid": {
                "amount": 250,
                "fluid": fluidId,
                "nbt": {}
            },
            "result": resultObject
        });
    }

    function findItem(fluidId) {
        let fluidName = Fluid.getType(fluidId).getFluidType().getDescription().getString().toString();

        if (alreadyOkay.includes(fluidId)) {
            return null;
        }
        
        if (treatAsWater.includes(fluidId)) {
            return makePotion('minecraft:water', fluidName);
        }

        if (treatAsPoison.includes(fluidId)) {
            return makePotion('minecraft:strong_poison', fluidName);
        }

        let replacement = replacementLookup[fluidId];
        if (replacement != null) {
            return replacement;
        }

        let asItem = asItemLookup[fluidId];
        if (asItem != null) {
            return asItem;
        }

        let createCafeTea = fluidId.match(createCafeTeaPattern);
        if (createCafeTea != null) {
            let flavour = createCafeTea[1];
            return `createcafe:${getTeaFlavour(flavour)}_milk_tea`;
        }

        let createCafeSyrup = fluidId.match(createCafeSyrupPattern);
        if (createCafeSyrup != null) {
            // Cafe syrups aren't directly edible so this is close enough
            return 'thermal:syrup_bottle'; 
        }

        // Unknown
        return makePotion('minecraft:strong_poison', fluidName);
    }

    let fluidList = getFluids();
    for (let fluid of fluidList) {
        let item = findItem(fluid)
        if (item == null) {
            continue;
        }
        
        registerSpouting(fluid, item)
    }
})

ServerEvents.highPriorityData(event => {
    function makeData(fluidId, itemId, fluidColourHex) {
        if (fluidColourHex.length === 10) {
            // Remove alpha from 0xARGB format
            fluidColourHex = '0x' + fluidColourHex.substring(4, fluidColourHex.length)
        }

        let fluidColourDecimal = parseInt(fluidColourHex);

        let fluidName = Fluid.getType(fluidId).getFluidType().getDescription();

        return {
            "displayItem": Item.of('some_assembly_required:spread', `{ Color: ${fluidColourDecimal} }`),
            "item": itemId,
            "fullName": fluidName,
            "soundEvent": "some_assembly_required:block.sandwich.add_item.moist"
        }
    }

    function mapFluidToSpread(fluidId, itemId, fluidColourHex) {
        let data = makeData(fluidId, itemId, fluidColourHex);
        let jsonFileName = itemId.replace(':', '_');
        let dataPath = `some_assembly_required/ingredients/${jsonFileName}.json`;

        event.addJson(dataPath, data);
    }

    let fluidList = getFluids();

    for (let fluid of fluidList) {
        let asItem = asItemLookup[fluid];
        if (asItem != null) {
            let fluidColourHex = itemFluidColours[fluid];
            if (fluidColourHex == null) {
                console.error('Missing fluid colour for ' + fluid);
                continue;
            }
            mapFluidToSpread(fluid, asItem, fluidColourHex);
            continue;
        }

        let createCafeTea = fluid.match(createCafeTeaPattern);
        if (createCafeTea != null) {
            let flavour = createCafeTea[1];

            let fluidColourHex = teaFlavourColours[flavour];
            if (fluidColourHex == null) {
                console.error('Missing fluid colour for ' + fluid);
                continue;
            }

            mapFluidToSpread(fluid, `createcafe:${getTeaFlavour(flavour)}_milk_tea`, fluidColourHex);
            continue;
        }
    }
})