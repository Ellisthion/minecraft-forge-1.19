StartupEvents.registry('item', event => {
    function makeVariant(id, name) {
        event.create(`fleatonium_${id}`).displayName(`${name} Fleatonium`);
        event.create(`fleatonium_${id}_partial`).displayName(`Unfinished ${name} Fleatonium`);
    }
    
    makeVariant('green', 'Green');
    makeVariant('red', 'Red');
    makeVariant('black', 'Black');
})