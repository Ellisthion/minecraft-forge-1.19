ServerEvents.recipes(event => {
    // Require rubber to go through a more interesting process
	event.remove({ id: 'thermal:rubber_from_vine' })
    event.remove({ id: 'thermal:rubber_from_dandelion' })
    event.remove({ id: 'thermal:rubber_3' })

    event.custom({
        type: "create:compacting",
        ingredients: [
          {
            amount: 250,
            fluid: "thermal:latex"
          }
        ],
        results: [
          {
            item: "thermal:rubber"
          }
        ]
    })
})
