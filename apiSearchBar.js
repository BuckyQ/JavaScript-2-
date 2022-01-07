
const searchApi = document.getElementById("searchApi");
const listApi = document.getElementById("listApi");

let pokemonCharacters = [];

//console.log(pokemonCharacters.result;
searchApi.addEventListener('keyup', (e) => {
    const searchString = e.target.value;
    if (searchString && searchString.trim().length > 0){
        const filterCharacter = pokemonCharacters.filter( (character) => {
            return (character.name.toLowerCase().includes(searchString)
            );
        });
        setList(filterCharacter);
    }else{
        clearList();
    }
   
    
});     

const loadCharacter = async () => {
    try {
        const result = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=70');
        let temp = await result.json(); 
        pokemonCharacters = temp.results;
        //displayCharacters(pokemonCharacters);
        //console.log(pokemonCharacters);
    } catch (err){
        console.error(err);
    };
};
/*
const displayCharacters = (characters) => {
   const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
              <h2>${character.name}<h2>
            </li>
        `;
        }).join('');
        
    listApi.innerHTML = htmlString;
};
*/


function setList(group){
    clearList();
    for (const keyword of group){
       const item = document.createElement("li");
       const text = document.createTextNode(keyword.name);
       item.appendChild(text);
       listApi.appendChild(item);
    }
    if(group.length === 0){
       setNoResult();
    }
 }

 function clearList(){
    while(listApi.firstChild){
       listApi.removeChild(listApi.firstChild);
    }
 }


function setNoResult(){
     const item = document.createElement("li");
     const text = document.createTextNode('No result found');
     item.appendChild(text);
     listApi.appendChild(item);
}


loadCharacter();



