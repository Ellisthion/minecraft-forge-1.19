JEIEvents.hideItems(event => {
    // Remove variants that overlap with quark

    let items = [
        'slab_tuff',
        'stairs_tuff',
        'wall_tuff',
        'slab_calcite',
        'stairs_calcite',
        'wall_calcite'
    ];

    for (let item of items) {
        event.hide(`absentbydesign:${item}`)
    }
})