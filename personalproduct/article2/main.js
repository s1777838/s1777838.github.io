function runUserCode(){
        let textArea = document.getElementById('codeInputArea');
        console.log(textArea.value);
}













/*



// Create a new Web Worker
const worker = new Worker('worker.js');

// Get the canvas and its context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Listen for messages from the Web Worker
worker.onmessage = function(event) {
  // Handle the message from the worker
  const imageData = event.data;
  // Draw the image data to the canvas
  ctx.putImageData(imageData, 0, 0);
};

// Send a message to the Web Worker to start drawing
worker.postMessage('startDrawing');


function createUserCodeBlob(userCode) {
  const blob = new Blob([userCode], { type: 'application/javascript' });
  return URL.createObjectURL(blob);
}
function runUserCodeInWorker(userCode, data) {
  const blobUrl = createUserCodeBlob(userCode);

  const worker = new Worker(blobUrl);

  // Pass data to the worker
  worker.postMessage(data);

  // Handle messages from the worker
  worker.onmessage = function (event) {
    // Handle messages from the worker if needed
    console.log(event.data);

    // Terminate the worker when done
    worker.terminate();

    // Clean up the Blob URL
    URL.revokeObjectURL(blobUrl);
  };
}
*/
