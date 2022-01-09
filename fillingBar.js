/*
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

animation?
循环？
*/


function movingBar(bar_container, model) {

// adding element 
  let btnElem = document.querySelector(".stop_btn");
  btnElem.textContent = "STOP";
  bar_container.innerHTML = "<div class='bar_container_filling'></div>";

  // event
  btnElem.addEventListener("click", function(e) {
    model.action();
    btnElem.textContent = (btnElem.textContent === "STOP") ? "RESUME" : "STOP";
  });

  //for CSS. react, update the information to DOM
  function render(data) {
    let innerElem = document.querySelector(".bar_container_filling");
    innerElem.style.width = data + "%";
  }
  //subscribe() to store for changes
  model.subscribe(render);
  //
  render();
}


function pbModel() {

  let from = 0;
  let subscriber;
  let changeRate = 0.25;
  let updateStatus = true;

  let intervalId = setInterval(update, 5);

  //back and force
  function update() {
    if ( from === 0 && changeRate < 0 || from === 100 && changeRate > 0 ) {
        changeRate = -changeRate;
    };

    from += changeRate;

    subscriber(from);
  }

  function _action() {
    if (updateStatus) {
      clearInterval(intervalId);
    } else {
      intervalId = setInterval(update, 5);
    }
    updateStatus = updateStatus ? false : true;
  }

  return {
    subscribe: function(cb) {
      if (!subscriber) {
        subscriber = cb;
      }
    },
    action: _action,
  };

};



let bar_container = document.querySelector(".bar_container");
movingBar(bar_container, pbModel());


