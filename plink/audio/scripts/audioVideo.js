console.log("link works");

var mic, recorder, soundFile;

var state = 0; // mousePress will increment from Record, to Stop, to Play

function setup() {
  var myCanvas = createCanvas(800, 400);
  myCanvas.parent('mySketch');
  background(200);
  fill(0);
  console.log("set up");

// create an audio in
  mic = new p5.AudioIn();

// users must manually enable their browser microphone for recording to work properly!
  mic.start();

// create a sound recorder
  recorder = new p5.SoundRecorder();

// connect the mic to the recorder
  recorder.setInput(mic);

// create an empty sound file that we will use to playback the recording
  soundFile = new p5.SoundFile();
}

//get buttons
var record = getElementById('record');
var play = getElementById('play');
var sav = getElementById('save');
var del = getElementById('delete');

//when record button is clicked
record.addEventListener('click', function () {
  // use the '.enabled' boolean to make sure user enabled the mic (otherwise we'd record silence)
  if (state === 0 && mic.enabled) {

    // Tell recorder to record to a p5.SoundFile which we will use for playback
    recorder.record(soundFile);
    background(255,0,0);
    state++;
  } else if (state === 0 && !mic.enabled) {
    text('Enable mic and try again.', 20, 20);
  } else if (state > 0) {
    recorder.stop(); // stop recorder, and send the result to soundFile
    background(0,255,0);
  }
});

//when playback is clicked
play.addEventListener('click', function () {
//check that something has been recorded
  if (state === 0) {
    text('Record something with the record button first.', 20, 20);
  } else {
    soundFile.play(); // play the result!
  }
});

//when save is clicked
//save to a database
/*
sav.addEventListener('click', function () {
//check that something has been recorded
  if (state === 0) {
    text('Record something with the record button first.', 20, 20);
  } else {
    saveSound(soundFile, 'mySound.wav'); //this saves to the computer
  }
});
*/

//when delete is clicked
del.addEventListener('click', function () {
  // use the '.enabled' boolean to make sure user enabled the mic (otherwise we'd record silence)
  if (state === 0) {
    text("You haven't recorded anything yet.", 20, 20);
  } else {
    soundFile = new p5.SoundFile(); //reset and forget
  }
});


/*
function mousePressed() {
  // use the '.enabled' boolean to make sure user enabled the mic (otherwise we'd record silence)
  if (state === 0 && mic.enabled) {

    // Tell recorder to record to a p5.SoundFile which we will use for playback
    recorder.record(soundFile);

    background(255,0,0);
    text('Recording now! Click to stop.', 20, 20);
    state++;
  }

  else if (state === 1) {
    recorder.stop(); // stop recorder, and send the result to soundFile

    background(0,255,0);
    text('Recording stopped. Click to play & save', 20, 20);
    state++;
  }

  else if (state === 2) {
    soundFile.play(); // play the result!
    state++;
  }
}
*/
