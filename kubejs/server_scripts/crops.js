ServerEvents.recipes(event => {
    // Prevent hand-crafting rice from crop
	event.remove({ id: 'farmersdelight:rice' })
})

LootJS.modifiers((event) => {
    // Remove Sushi Go rice
    event.addBlockLootModifier("minecraft:grass").removeLoot("sushigocrafting:rice_seeds");
    event.addBlockLootModifier("minecraft:tall_grass").removeLoot("sushigocrafting:rice_seeds");
});