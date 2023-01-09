MoreJSEvents.playerStartTrading((event) => {
    const isImmEngTrader = event.merchant.getName().toString().includes('immersiveengineering');

    if (!isImmEngTrader) {
        return;
    }

    event.forEachOffers((o, i) => {
        let output = o.getOutput();

        // Don't let players trade for hammer, it skips the progression
        if (output.sameItem(Item.of('immersiveengineering:hammer'))) {
            o.disabled = true;
        }

        // Don't let players trade for wirecutter, it skips the progression
        if (output.sameItem(Item.of('immersiveengineering:wirecutter'))) {
            o.disabled = true;
        }

        // Fix buggy ImmEng trader
        // Treated Sticks showing up as a corrupted Air item stack
        // https://github.com/BluSunrize/ImmersiveEngineering/issues/5435
        const pattern = /^(\d+) air$/;

        const firstItemMatch = o.getFirstInput().toString().match(pattern);
        if (firstItemMatch != null) {
            o.setFirstInput(Item.of(firstItemMatch[1] + 'x immersiveengineering:stick_treated'));
        }

        const outputMatch = output.toString().match(pattern);
        if (outputMatch != null) {
            o.setOutput(Item.of(outputMatch[1] + 'x immersiveengineering:stick_treated'));
        }
    });
});

MoreJSEvents.villagerTrades((event) => {
    // The above method seems more reliable because Immersive Engineering
    // dynamically adds its villager trades.
    // Keeping this code around for now just in case
    return;

    // Currently bugged and will remove ALL modded villager trades,
    // but it looks like it's been fixed on GitHub and just needs a new version.

    // This is re-writing all trades except for gunsmith because of a broken ImmEng
    // stick trade. If all these bugs are fixed, this code could be changed to
    // only remove the Tier 1 hammer/wirecutters trades and rewrite those.
    
    function rewriteTrades(profession, trades) {
        for (var trade of trades) {
            event.addTrade(profession, trade[0], [trade[1]], trade[2]);
        }
    }

    event.removeModdedTrades([
        'immersiveengineering:engineer',
        'immersiveengineering:machinist',
        'immersiveengineering:electrician',
        'immersiveengineering:outfitter'
    ], 1);

    rewriteTrades('immersiveengineering:engineer', [
        [1, 'emerald', 'immersiveengineering:balloon'],
        [1, 'emerald', 'immersiveengineering:treated_wood_horizontal'],
        [2, 'emerald', 'immersiveengineering:alu_scaffolding_standard'],
        [2, 'emerald', 'immersiveengineering:steel_scaffolding_standard'],
        [3, 'emerald', 'immersiveengineering:treated_wallmount'],
        [4, 'emerald', 'immersiveengineering:treated_post'],
    ]);

    rewriteTrades('immersiveengineering:machinist', [
        [1, 'emerald', 'immersiveengineering:component_iron'],
        [2, 'emerald', 'immersiveengineering:component_steel'],
        [3, 'emerald', 'immersiveengineering:waterwheel_segment'],
        [3, '6x emerald', 'immersiveengineering:toolbox'],
        [4, '4x emerald', 'immersiveengineering:earmuffs'],
        [4, '28x emerald', 'immersiveengineering:drillhead_iron'],
        [5, '12x emerald', { item: 'immersiveengineering:blueprint', nbt: { blueprint: 'electrode' }}],
        [5, '32x emerald', 'immersiveengineering:drillhead_steel'],
    ]);

    rewriteTrades('immersiveengineering:electrician', [
        [1, 'emerald', '2x immersiveengineering:wirecoil_copper'],
        [2, 'emerald', 'immersiveengineering:wirecoil_electrum'],
        [2, '5x emerald', 'immersiveengineering:armor_faraday_feet'],
        [2, '9x emerald', 'immersiveengineering:armor_faraday_legs'],
        [2, '4x emerald', 'immersiveengineering:voltmeter'],
        [3, 'emerald', 'immersiveengineering:wirecoil_steel'],
        [3, '11x emerald', 'immersiveengineering:armor_faraday_chest'],
        [3, '5x emerald', 'immersiveengineering:armor_faraday_head'],
        [4, '8x emerald', 'immersiveengineering:toolupgrade_revolver_electro'],
        [4, '8x emerald', 'immersiveengineering:fluorescent_tube'],
        [5, '8x emerald', 'immersiveengineering:toolupgrade_railgun_capacitors'],
    ]);

    rewriteTrades('immersiveengineering:outfitter', [
        [1, '2x emerald', 'immersiveengineering:shader_bag_common'],
        [2, '8x emerald', 'immersiveengineering:shader_bag_uncommon'],
        [3, '14x emerald', 'immersiveengineering:shader_bag_rare'],
    ]);
});

