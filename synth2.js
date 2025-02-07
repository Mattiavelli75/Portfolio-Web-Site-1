// Basic Synth 2
// Matthew Williams 08/01/2025
// Create 'Audio Context', the stage from which 
// all audio applications are built.
const actx = new(AudioContext || webkitAudioContext)();

const mainGain = actx.createGain();
mainGain.gain.value = 0.5;
mainGain.connect(actx.destination);


// Global variable for createOscillator 
let osc;

// Create volume slider and get value
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
};

myRange.addEventListener('input', (event) => {
    mainGain.gain.value = event.target.value ** 3;
});

// Create waceform slider and get value
const WAVEFORMS = [
    'sine',
    'square',
    'sawtooth',
    'triangle',
];

let waveForm = WAVEFORMS[0];

var wfslider = document.getElementById("wfRange");
var wfoutput = document.getElementById("wfdemo");
wfoutput.innerHTML = 'sine';

wfRange.oninput = function() {
    wfoutput.innerHTML = WAVEFORMS[this.value];
    waveForm = WAVEFORMS[this.value];
};

var unislider = document.getElementById("uniRange");
var unioutput = document.getElementById("unidemo");
unioutput.innerHTML = unislider.value;

let width = 0;
uniRange.oninput = function() {
    unioutput.innerHTML = this.value;
    width = this.value * 5;
};

var fbslider = document.getElementById("fbRange");
var fboutput = document.getElementById("fbdemo");
fboutput.innerHTML = fbslider.value;

let feedback = 0;
fbRange.oninput = function() {
    fboutput.innerHTML = this.value;   
    feedback = this.value;
};

var dtslider = document.getElementById("dtRange");
var dtoutput = document.getElementById("dtdemo");
dtoutput.innerHTML = dtslider.value;

let dTime = 0;
dtRange.oninput = function() {
    dtoutput.innerHTML = this.value;   
    dTime = this.value;
};

// Create keys and notes - the run method.
const NOTES = {
    'C': 261.626,
    'CS': 277.183,
    'D': 293.665,
    'DS': 311.127,
    'E': 329.628,
    'F': 349.228,
    'FS': 369.994,
    'G': 391.995,
    'GS': 415.305,
    'A': 440.000,
    'AS': 466.164,
    'B': 493.883,
    'C1': 523.251,
}

function createDelay() {
    const delayNode = actx.createDelay();
    const feedbackGain = actx.createGain();
    delayNode.delayTime.value = dTime;
    feedbackGain.gain.value = feedback;          
    mainGain.connect(delayNode);  
    delayNode.connect(feedbackGain); 
    feedbackGain.connect(delayNode);      
    delayNode.connect(actx.destination);     
};

const createOscillators = (freq, detune) => {
    osc = actx.createOscillator();   
    mainGain.connect(actx.destination);    
    osc.type = waveForm;
    osc.frequency.value = freq;
    osc.detune.value = detune;     
    createDelay();  
    osc.connect(mainGain);    
    osc.start();
    return osc;
};

const oscBank = new Array(3);
const noteOn = (note) => {
    const freq = NOTES[note];
    oscBank[0] = createOscillators(freq, 0);
    oscBank[1] = createOscillators(freq, -width);
    oscBank[2] = createOscillators(freq, width);
};

const noteOff = () => {    
        if (osc) {
            osc.stop();
            osc.disconnect();           
       }    
};

const notesOff = () => {
    oscBank.forEach((osc, index) => {
        if (osc) {
            osc.stop();
            osc.disconnect();
            oscBank[index] = null; // Clear the oscillator from the array
       }
    });
};

// Event listeners for keys
function keyboard1 () {
    document.querySelectorAll('button[data-note]').forEach((button) => {
        button.addEventListener('mousedown', () => {
            if (width > 0) {
                noteOn(button.dataset.note); // Play the note
            } else {
                createOscillators(NOTES[button.dataset.note], 0);            
            }
        });
        button.addEventListener('mouseup', () => {
            if (width > 0) {
                notesOff();        
            } else {
                noteOff(); // Stop the note
            }       
        });
    });
};

keyboard1();





























