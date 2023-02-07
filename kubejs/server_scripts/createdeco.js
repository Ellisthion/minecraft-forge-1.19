ServerEvents.recipes(event => {
	event.remove({ id: 'createdeco:copper_bars' })
    event.remove({ id: 'createdeco:gold_bars' })
    event.remove({ id: 'createdeco:copper_door' })

    // Allow crafting back and forth between copper door variants
    event.shapeless('createdeco:copper_door', ['copperized:copper_door'])
    event.shapeless('copperized:copper_door', ['createdeco:copper_door'])

    // Allow crafting create deco bars from quark/copperized bars
    event.shapeless('2x createdeco:copper_bars', ['2x copperized:copper_bars'])
    event.shapeless('2x createdeco:gold_bars', ['2x quark:gold_bars'])
})
