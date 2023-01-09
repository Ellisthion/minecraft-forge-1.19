// priority: 0

JEIEvents.hideItems(event => {
	event.hide('alexsmobs:banana')
	event.hide('alexsmobs:spawn_egg_cockroach')
	event.hide('alexsmobs:cockroach_wing_fragment')
	event.hide('alexsmobs:cockroach_wing')
	event.hide('alexsmobs:cockroach_ootheca')

	event.hide(Item.of('minecraft:potion', { Potion: 'alexsmobs:bug_pheromones' }));
	event.hide(Item.of('minecraft:splash_potion', { Potion: 'alexsmobs:bug_pheromones' }));
	event.hide(Item.of('minecraft:lingering_potion', { Potion: 'alexsmobs:bug_pheromones' }));
	event.hide(Item.of('minecraft:tipped_arrow', { Potion: 'alexsmobs:bug_pheromones' }));
});

