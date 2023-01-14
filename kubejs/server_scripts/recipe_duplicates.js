ServerEvents.recipes(event => {
    // Don't leave this enabled, only for debugging
    return;
    let itemList = Item.getList();
    let itemMap = {};

    console.log('Looking for duplicate items by display name...');

    for (let item of itemList) {
        let displayName = item.getDisplayName().getString().toString();

        itemMap[displayName] = (itemMap[displayName] || 0) + 1;
    }

    for (let key of Object.keys(itemMap)) {
        let value = itemMap[key];
        if (value === 1) {
            continue;
        }

        console.log(`${key}: ${value}`);
    }
})  