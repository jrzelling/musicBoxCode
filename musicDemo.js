var mapping = {
    81, //a -> q
    87, //s -> w
    69, //d -> e
    82, //f -> r
    84, //g -> t
    89, //h -> y
    85, //arrow left -> u
    73, //arrow up -> i
    79, //arrow down -> o
    80  //arrow right -> p
};
$("body").keydown(function(e){
    console.log(e.which + " pressed");
    for (key in mapping){
        if(e.which == key){
            var keydown = $.Event('keydown');
            keydown.which = mapping[key];
            $(this).trigger(keydown);
            console.log(keydown.which + " is triggered to be pressed");
            break;
        }
    }
});
var buttons = [$("#loop0"),$("#loop3"),$("#loop4"),$("#loop5"),$("#loop6")],
a = 0, blocker = $("<div id='blocker'/>");
$("body").append(blocker);
blocker.css({width:"100%",height:"100%",position:"fixed",left:"0",top:"0"});
blocker.mousedown(function(e) {
    if(e.which == 3) {
        //light click to start looping
        var b = a - 1;
        if(b===-1){
            b = 4;
        }
        buttons[b].trigger("click");
    }else{
        //left click to change instrument
        buttons[a].trigger("click");
        buttons[a].trigger("click");
        a++;
        if(a===5){
            a = 0;
        }
    }
});
blocker.on('contextmenu', function(e) {
    return false;
});