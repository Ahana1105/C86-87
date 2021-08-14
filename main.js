var Canvas = new fabric.Canvas('myCanvas');
var player_x = 10;
var player_y = 10;
var block_width = 30;
var block_height = 30;
var player_object = "";
var block_object = "";

function player_update() {
fabric.Image.fromURL("player.png", function(Img){
 player_object = Img;
 player_object.scaleToWidth(150);
 player_object.scaleToheight(140);
 player_object.set({top:player_y , left:player_x});
 Canvas.add(player_object);
});
}

function new_Image(get_Image) {
    fabric.Image.fromURL(get_Image, function(Img){
     block_object = Img;
     block_object.scaleToWidth(block_width);
     block_object.scaleToheight(block_height);
     block_object.set({top:player_y , left:player_x});
     Canvas.add(block_object);
    });
    }

