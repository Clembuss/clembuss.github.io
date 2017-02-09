var remoteMouseX, remoteMouseY, ranger;
var socket;
var track,
    mic,
    fft,
    spectrum,
    waveform,
    peaks,
    amp;

function setup() {
	  createCanvas( windowWidth, windowHeight );

	  masterVolume( 1 );

	mic = new p5.AudioIn()
	mic.start();

	fft = new p5.FFT();
	fft.setInput( mic );
	// peaks = track.getPeaks( track.duration() * 10 );

	// amplitude = new p5.Amplitude();
	// amplitude.setInput( track );
	textAlign( RIGHT );

	socket = io.connect("http://172.16.128.119:8000");

	socket.on( 'connected', function( data ){
		document.querySelector( 'p' ).innerText = data.msg;
	} );

	// RECEIVE MOUSE POSITION
	socket.on( 'mouse', function( data ){
	      //console.log( JSON.stringify(data) );
		    document.getElementById( 'mouseData' ).innerText = JSON.stringify(data);
	      remoteMouseX = data.mouseX;
	      remoteMouseY = data.mouseY;
	} );

	// RECEIVE RANGER POSITION
	socket.on( 'ranger', function( data ){
	      //console.log( JSON.stringify(data) );
		    document.getElementById( 'rangerData' ).innerText = JSON.stringify(data);
	      ranger = data;
	} );
}



// function draw() {
//   background( 255 );
//
//   fill( 0 );
//   noStroke();
//   text( "spectrum", width - 10, 100 );
//   stroke( 0 );
//   spectrum = fft.analyze();
//   for( var i = 0; i < spectrum.length; i ++ ){
//     line( i, height / 4, i, height / 4 - spectrum[ i ] );
//   }
//
//   noStroke();
//   text( "waveform", width - 10, height/4 + 100 );
//   stroke( 0 );
//   waveform = fft.waveform();
//   for( var i = 0; i < waveform.length; i ++ ){
//     line( i, height / 2, i, height / 2 + waveform[ i ] * 200 );
//   }
//
//
//   noStroke();
//   text( "volume", width - 10, 3 * height/4 + 100 );
//   stroke( 0 );
//   var level = mic.getLevel();
//   rect( 0, height, width, -level * 300 );
//
// }

function draw(){
	background(233);
  stroke("#8AB69A");
  noFill();
	translate(350,100);

  rotation();

    push();
    translate(391,105);
    strokeWeight(1.5);
    scale(0.57);
    rotate(radians(90));
    rotation();
    pop();

    push();
    translate(168.5,166);
    strokeWeight(2);
    scale(0.326);
    rotation();
    pop();

    push();
    translate(296,201);
    strokeWeight(4);
    scale(0.185);
    rotate(radians(90));
    rotation();
    pop();

    push();
    translate(224,221.5);
    strokeWeight(7);
    scale(0.102);
    rotation();
    pop();

    push();
    translate(263.5,233);
    strokeWeight(10);
    scale(0.055);
    rotate(radians(90));
    rotation();
    pop();

    push();
    translate(243,240);
    strokeWeight(25);
    scale(0.028);
    rotation();
    pop();

    push();
    translate(253,244.5);
    strokeWeight(30);
    scale(0.01);
    rotate(radians(90));
    rotation();
    pop();

    //je savais pas faire de polygon sans que ce soit trop compliqué
    push();
    var distance = dist(mouseX, mouseY, 250, 250);
    if (distance < 200) {
      line(90,339,170,200);
      line(410,339,302,155);
      line(170,200,248,62);
      line(302,155,249,62);
      line(90.5,340,248,340);
      line(410,339,248,340);
    }
    else {
    line(90,339,90,155);
    line(410,339,410,155);
    line(90,155,248,62);
    line(410,155,249,62);
    line(90.5,340,248,432);
    line(410,339,248,432);
    }
    pop();

  }

  function rotation(){

    push();
      rotate(radians(ranger*2));
    triangle(90,340,249,63,410,340);
    pop();


    push();
    rotate(radians(ranger/1.2));
    line(248.5,63,249,185);
    line(408,338.5,302,277);
    line(90,340,196,277);
    pop()

    push();
    rotate(radians(ranger));
    line(197,339,143,247);
    line(302,339,355,247);
    line(197,155,302,155);
    pop();

		// prendre toutes les valeurs de son
		var vol = mic.getLevel();

		// Draw an ellipse with height based on volume
		h = map(ranger, 0, 1, 100, 0);
		ellipse(width/2, height/2, h*2, h*2);
}


function windowResized() {
  resizeCanvas( windowWidth, windowHeight );
}
