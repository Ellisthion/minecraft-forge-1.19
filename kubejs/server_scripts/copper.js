ServerEvents.recipes(event => {
	event.remove({ id: 'createdeco:copper_bars' })
    event.remove({ id: 'createdeco:copper_door' })

    // Allow crafting back and forth between copper door variants
    event.shapeless('createdeco:copper_door', ['copperized:copper_door'])
    event.shapeless('copperized:copper_door', ['createdeco:copper_door'])
})
