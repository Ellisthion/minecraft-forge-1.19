JEIEvents.hideItems(event => {
    // We disabled Quark limestone, but due to a Quark bug, the derived blocks
    // like stairs and slabs are still visible in JEI
    // https://github.com/VazkiiMods/Quark/issues/3993

    let items = [
        'limestone_slab',
        'limestone_stairs',
        'limestone_wall',
        'limestone_bricks_slab',
        'limestone_bricks_stairs',
        'limestone_bricks_wall',
        'polished_limestone_slab',
        'polished_limestone_stairs',
        'polished_limestone_wall'
    ];

    for (let item of items) {
        event.hide(`quark:${item}`)
    }
})