function stop(){
    let width = 0;
    let el = document.getElementById('progress-bar');
    let interval_id = setInterval(frame, 60);
    function frame() {
       if(width >= 100){
           clearInterval(interval_id);
       }else{
           width++;
           el.style.width = width + '%';
       }
    }

}

/*
animation?
循环？
*/