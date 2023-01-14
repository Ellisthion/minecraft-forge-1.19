ServerEvents.recipes(event => {
    let items = [
        'slab_tuff',
        'stairs_tuff',
        'wall_tuff',
        'slab_calcite',
        'stairs_calcite',
        'wall_calcite'
    ];

    for (let item of items) {
        let id = `absentbydesign:${item}`;
        event.remove({ input: id, mod: 'absentbydesign' });
        event.remove({ output: id, mod: 'absentbydesign' });
    }
})