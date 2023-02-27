ServerEvents.recipes(event => {
   let variants = [
      ['quark:blue_blossom_sapling', 'botania:light_blue_petal'],
      ['quark:lavender_blossom_sapling', 'botania:magenta_petal'],
      ['quark:orange_blossom_sapling', 'botania:orange_petal'],
      ['quark:pink_blossom_sapling', 'botania:pink_petal'],
      ['quark:yellow_blossom_sapling', 'botania:yellow_petal'],
      ['quark:red_blossom_sapling', 'botania:red_petal'],
   ]

   for (let variant of variants) {
      let sapling = variant[0];
      let petal = variant[1];
      
      event.custom({
         "type": "ars_nouveau:enchanting_apparatus",
         "keepNbtOfReagent": false,
         "output": {
           "item": sapling
         },
         "pedestalItems": [
           {
             "item": {
               "item": petal
             }
           },
           {
             "item": {
               "item": petal
             }
           },
           {
             "item": {
               "item": petal
             }
           },
           {
             "item": {
               "item": petal
             }
           }
         ],
         "reagent": [
           {
             "tag": "minecraft:saplings"
           }
         ],
         "sourceCost": 0
       })
   }
})