JEIEvents.addItems(event => {
    let books = [
        'hexcasting:thehexbook',
        'thermal:guidebook',
        'sushigocrafting:sushigocrafting'
    ]

    for (let book of books) {
        let item = Item.of('patchouli:guide_book', {"patchouli:book": book})
        event.add(item)
    }
})