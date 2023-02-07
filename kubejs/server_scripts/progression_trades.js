MoreJSEvents.playerStartTrading((event) => {
    // Disable trades for items that are part of progression or quests
    let bannedItems = [
        'immersiveengineering:hammer',
        'immersiveengineering:wirecutter',
        'minecraft:cookie',
        'neapolitan:vanilla_cake'
    ]
    
    event.forEachOffers((o, i) => {
        let output = o.getOutput();

        for (let item of bannedItems) {
            if (output.sameItem(Item.of(item))) {
                o.disabled = true;
                break;
            }
        }
    });
});
