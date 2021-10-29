// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010401010101010101010101010401010101010101030104010303030101010101020201010301010101010303030101010102020201010101010101010301010101010104020202020201040101010104010101010101010101010101010401010101020101010101010101010101010101010201010101010401010101010101010102040102020202020202010101010101020202010101010101010204010101010101010201010101010101010101040101010102020101040101010101010301010101010102020101010101010103010104010101010101010101040101030101010101010104010101010101010101010101010101010101010101`, img`
. . 2 . . . . . . . . . . . 2 . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 . . . . . . 2 . . . 
. 2 . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 . . . . . . . . . 2 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
