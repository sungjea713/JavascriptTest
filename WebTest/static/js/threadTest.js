var w;
function workerStart(){
    if(typeof(w) == 'undefined'){
        w = new Worker('worker.js');
    }
    w.onmessage = function(response) {
        document.getElementById('labelTest').innerText = response.data;
    };
}
