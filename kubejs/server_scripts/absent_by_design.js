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


    // Wool slabs conflict with sleeping bags

    // [slab, wool]
    let colours = [
        ['black', 'black'],
        ['blue', 'blue'],
        ['brown', 'brown'],
        ['cyan', 'cyan'],
        ['gray', 'gray'],
        ['green', 'green'],
        ['light_blue', 'light_blue'],
        ['lime', 'lime'],
        ['magenta', 'magenta'],
        ['orange', 'orange'],
        ['pink', 'pink'],
        ['purple', 'purple'],
        ['red', 'red'],
        ['silver', 'light_gray'],
        ['white', 'white'],
        ['yellow', 'yellow'],
    ]

    for (let colour of colours) {
        let slab = `absentbydesign:slab_wool_${colour[0]}`
        let wool = `minecraft:${colour[1]}_wool`

        event.remove({ id: slab });
        event.shaped(`12x ${slab}`, [
            '   ',
            'WWW',
            'WWW'
        ], {
            W: wool,
        })
    }
})