var updateTime = function(){
    postMessage(new Date().toLocaleString());
    setTimeout('updateTime()', 1000);
};
updateTime();