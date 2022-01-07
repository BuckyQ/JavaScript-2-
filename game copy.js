const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const score = document.querySelector("#score");

let data = {
    fill : [],
    score : 0,
    count : 10,
    total : 0,
    hitPosition:[]
};

function getRandom(){
    const nums = [1,2,3,4,5,6,7,8,9];
    let result = [];

    function in_array(array, el){
        for(let i = 0; i<array.length ;i++){
            if(array[i]==el) return true;
        };
    return false
    };

    function get_rand(array){
        let rand = array[Math.floor(Math.random()*array.length)];
        if(!in_array(result, rand)){
            result.push(rand);
            return result;
        }
        return get_rand(array);
    }
    for(let i =0 ;i<3;i++){
        get_rand(nums);
    }
    return result;
}

function click(addScore){
    data.fill = getRandom();
    data.score += addScore? 1 : 0;
    ++data.count;
}

function initData(){
    data.fill = getRandom();
    data.score = 0;
    data.count = 0;
    total = 0;
    return data;
}

function game(){
   

    squares.forEach( square => {
        square.classList.remove('mole');    
    });

    data.fill = getRandom();

   for (let i =0; i<3;i++){
    let temp = squares[data.fill[i]];  
    squares[data.fill[i]].classList.add('mole');
    data.hitPosition[i] = temp.id;
    temp = null;
    }

   squares.forEach(square =>{
       square.addEventListener('click', function (event){
            if(data.hitPosition.includes(square.id)){
                data.score++;
                console.log(data.score);
                data.count--;
                score.textContent = data.score;
                data.hitPosition == [];
                game();
            }else{
                data.count--; 
                data.hitPosition == [];
                game(); 
            }
       })

   });
    

   
   
}

game();