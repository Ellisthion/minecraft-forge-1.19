ServerEvents.tags('item', event => {
    let glowBerryFoods = [
        // Can't get the sandwich right due to multiple james, so let's just say
        // that making the berry into jam breaks the magic
        // 'delightful:glow_berry_bottle',
        
        'farmersdelight:glow_berry_custard'
    ];

    for (let food of glowBerryFoods) {
        event.add('thephantommenace:phantom_banisher', food);
    }
})