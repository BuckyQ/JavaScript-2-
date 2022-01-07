
const OPTIONS = [
   { name: "♥♥"},
   { name: 'CA'},
   { name: 'AZ'},
   { name: 'WA'},
   { name: 'NY'},
   { name: 'OR'},
   { name: 'TX'},
   { name: 'TS'},
   { name: 'ML'},
   { name: 'MX'},
  ];

  const list = document.getElementById("list");

  function setList(group){
     clearList();
     for (const keyword of group){
        const item = document.createElement("li");
        //item.classList.add('list-group-item');
        const text = document.createTextNode(keyword.name);
        item.appendChild(text);
        list.appendChild(item);
     }
     if(group.length === 0){
        setNoResult();
     }
  }

  function clearList(){
     while(list.firstChild){
        list.removeChild(list.firstChild);
     }
  }

  function setNoResult(){
      const item = document.createElement("li");
      //item.classList.add('list-group-item');
      const text = document.createTextNode('No result found');
      item.appendChild(text);
      list.appendChild(item);
  }

  let searchInput = document.getElementById('search');
  /* 
  searchInput == null 
  because js file should put at end of the HTML file!!!!!!
  */

  function getRelevancy(value, Term){
     if (value === Term){
        return 2;
     } else if (value.startsWith(Term)){
        return 1;
     } else if (value.includes(Term)){
        return 0; 
     } else {
        return -1;
     }
  }
 
  searchInput.addEventListener('input', (event) => {
    let value = event.target.value;
    if(value && value.trim().length > 0){
      value = value.trim().toUpperCase();
      setList(OPTIONS.filter(key => {
         return key.name.includes(value);
      }).sort((keyA, keyB) => {
         return getRelevancy(keyB.name, value) - getRelevancy(keyA.name, value);
      }));
   }else{
      clearList();
   }
});