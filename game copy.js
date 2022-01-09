const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const score = document.querySelector("#score");
const grid = document.querySelector('.grid');
const play = document.querySelector('.play');
const btn_play =  document.querySelector('.btn_play');

let data = {
    fill : [],
    score : 0,
    count : 10,
    hitPosition:[]
};


function getRandom(){
    const nums = [0,1,2,3,4,5,6,7,8];
    let result = [];

    function in_array( array, el){
        for( let i = 0; i < array.length; i++){
            if(array[i]==el) return true;
        };
        return false
    };

    function get_rand(array){
        let rand = array[Math.floor(Math.random()*array.length)];
        if(!in_array(result, rand)){
            result.push(rand);
            return result;
        };
        return get_rand(array);
    };

    for(let i = 0; i < 3;i++){
        get_rand(nums);
    }
    return result;
};



function refill(){
    squares.forEach( square => {
        square.classList.remove('mole');    
    });

    data.fill = getRandom();
    data.hitPosition = [];

   for (let i = 0; i < 3; i++){
    let temp = squares[data.fill[i]];  
    temp.classList.add('mole');
    data.hitPosition[i] = temp.id;
    temp = null;
    };
     
};

function init(){
    data.fill = [];
    data.score = 0;
    data.count = 10;
    data.hitPosition = [];
};


squares.forEach( square => {
    square.addEventListener('click', function (event) {
        if(data.hitPosition.includes(square.id)){
            data.score++;
            data.count--;
            score.textContent = data.score;
            data.hitPosition = [];
            if(data.count == 0){
                grid.style.display="none";
                play.style.display='block';  
                init(); 
            }else{
                refill();
            }; 
        }else{
            data.count--;
            data.hitPosition = [];
            if(data.count == 0){
                grid.style.display="none";
                play.style.display='block';
                init();
            }else{
                refill();
            }; 
        };
        
    });

});


btn_play.addEventListener('click', function(){
    grid.style.display="flex";
    play.style.display='none';
});


refill();   
