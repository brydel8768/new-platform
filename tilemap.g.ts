// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1400080006060606060606060606060606060606060606030808080808080808080808080808080808080403080808080808080808080808080808080803030308080808080808080808080808080303080808060808080808080808080808080308080808080806080808080808030308080803080808080808080607080803030808080803030808080808080808060101010102020202020202020202020505050505`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . . . 2 2 . . . 2 
. . . . . . . . . . . . 2 . . . . . . 2 
. . . . . . 2 2 . . . 2 . . . . . . . 2 
. . . 2 2 . . . . 2 2 . . . . . . . . 2 
2 2 2 2 . . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles2,sprites.dungeon.hazardLava1,sprites.dungeon.floorLight4,sprites.dungeon.chestClosed,sprites.dungeon.hazardLava0,sprites.dungeon.darkGroundSouthEast1,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
