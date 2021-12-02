scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    tiles.setTilemap(tilemap`level8`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorOpenNorth)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(12, 15), sprites.dungeon.doorOpenSouth)
    tiles.setTileAt(tiles.getTileLocation(7, 0), sprites.dungeon.purpleSwitchDown)
    tiles.setWallAt(tiles.getTileLocation(12, 15), false)
    tiles.setWallAt(tiles.getTileLocation(7, 0), true)
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level5`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . . f 4 f . . . . . . . 
    . . . . . . 4 4 4 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . 4 2 2 2 2 2 2 2 4 . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorOpenWest)
