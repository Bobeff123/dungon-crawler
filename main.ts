tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
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
pause(5000)
tiles.setTilemap(tilemap`level2`)
pause(1000)
tiles.setTilemap(tilemap`level4`)
