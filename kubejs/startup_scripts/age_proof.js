StartupEvents.registry('item', event => {
    function makeVariant(id, name) {
        event.create(`age_proof_${id}`).displayName(`Proof of ${name}`);
    }
    
    makeVariant('discovery', 'Discovery');
    makeVariant('magic', 'Magic');
    makeVariant('technology', 'Technology');
    makeVariant('destiny', 'Destiny');
})