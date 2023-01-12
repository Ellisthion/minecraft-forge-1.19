/*
Most progression recipes are done in datapacks

- Botania: Petal apothecary requires mana diamond instead of flower petal
- Ars: Ars book made with manasteel tools
- Hex: Staves made with livingwood twigs
- Hex: Cypher replace one ingot with with manasteel, trinket with elementium, artifact with terrasteel
- Thermal: Remove crafting recipe for gears, only made via ImmEng automation
- Flux: Flux Core replace Eye of Ender with Enderium coin

*/

ServerEvents.recipes(event => {
    event.replaceInput({ id: 'fluxnetworks:fluxcore', type: 'minecraft:crafting_shaped' }, 'minecraft:ender_eye', '#forge:coins/enderium')
})  