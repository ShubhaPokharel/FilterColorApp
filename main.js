function preload() {
    
}
function setup() {
    canvas = createCanvas(500, 500);
     canvas.position(500, 250);
    
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}
function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
}
function take_snapshot() {
    save('my_HELLOTHERETHISISSHUBHAmage.png')
}
function filter_tint() {
    tint_color = document.getElementById("colour_name").value;
}
function remove_filcolour() {
    
}