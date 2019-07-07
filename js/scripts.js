//repository.forEach (function(element){document.write('(name:'+element.name+') (height:'+element.height+') (types:'+element.types+')<br>');});
var pokemonRepository=(function () {
  var repository=[
  {
    name:'Bulbasaur',
    height:7,
    types:['grass','poison']
  },
  {
    name:'Squirtle',
    height:0.5,
    types:['grass','electric']
  },
  {
    name:'Pikachu',
    height:0.4,
    types:['ground']
  }];
  return {
    add: function(pokemon) {
      repository.push(pokemon);
    },
    getAll: function() {
      return repository;
    },
    filterPokemon: function(){
    return repository.filter(element=>(element.name==='Pikachu'));//Bonus task filter function
  },
  addListItem: function(pokemon){
    var listitem= document.createElement('li')
    var buttonItem = document.createElement('button');
    buttonItem.classList.add('liButton');
    buttonItem.innerText= pokemon.name;
    pokemonRepository.buttonEvent(buttonItem,pokemon);
    listitem.appendChild(buttonItem);
    list_ul.appendChild(listitem);
  },
  showDetails: function(pokemon){
    console.log(pokemon);
  },
  buttonEvent: function(buttonItem,pokemon){
    buttonItem.addEventListener('click', function (event) {
    pokemonRepository.showDetails(pokemon);
});
  }
  };
})();
//console.log(pokemonRepository.filterPokemon());
//Bonus task 1, checking if the parameter is an object
var item1={
  name:'Xatu',
  height:4.11,
  types:['psychic','flying']
};
var item2="Arun";
var item3=4;
var test2=[item1,item2,item3];
test2.forEach(function(element){
  if(typeof(element)==="object"){
    pokemonRepository.add(element);
  }
});
//To compare the keys of the object
var repositoryKeys=(Object.keys(pokemonRepository.getAll()[0]));
var item4={
  name:'Poliwag',
  height:0.6,
  types:['grass','electric']
};
var test3=(Object.keys(item4));
if(test3.length===3){
  if (test3[0]===repositoryKeys[0] && test3[1]===repositoryKeys[1] && test3[2]===repositoryKeys[2]){
    pokemonRepository.add(item4);
  }
}
var test=(pokemonRepository.getAll());
var list_ul = document.querySelector('ul');
test.forEach (function(pokemon){
  pokemonRepository.addListItem(pokemon);
  });
