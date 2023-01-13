ServerEvents.recipes(event => {
	event.remove({ id: 'thermal:storage/apple_block' })
    event.remove({ id: 'thermal:storage/carrot_block' })
	event.remove({ id: 'thermal:storage/potato_block' })
    event.remove({ id: 'thermal:storage/beetroot_block' })
    event.remove({ id: 'thermal:storage/gunpowder_block' })

    event.remove({ id: 'thermal:storage/apple_from_block' })
    event.remove({ id: 'thermal:storage/carrot_from_block' })
	event.remove({ id: 'thermal:storage/potato_from_block' })
    event.remove({ id: 'thermal:storage/beetroot_from_block' })
    event.remove({ id: 'thermal:storage/gunpowder_from_block' })
})
