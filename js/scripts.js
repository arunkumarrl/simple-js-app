//repository.forEach (function(element){document.write('(name:'+element.name+') (height:'+element.height+') (types:'+element.types+')<br>');});


  var pokemonRepository=(function () {
  var repository=[];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function addListItem (pokemon){
    var listitemli= document.createElement('li');
    var listitemul= document.createElement('ul');
    var buttonItem = document.createElement('button');
    listitemul.classList.add('ul-container');
    listitemli.setAttribute("type","button");

    listitemli.appendChild(buttonItem);
    buttonItem.innerHTML= pokemon.name;
    document.querySelector("ul").append(listitemli);
    buttonItem.addEventListener('click', function (event) {
      showDetails(pokemon);
    });
}

  function showDetails(item) {
      pokemonRepository.loadDetails(item).then(function () {
        console.log(item);   });
  }

  function add(item) {
      repository.push(item)
    }

  function getAll() {
      return repository;
    }

  function loadDetails(item) {
      var url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = Object.keys(details.types);
      }).catch(function (e) {
        console.error(e);
      });
    }

  return {
      getAll: getAll,
      add: add,
      addListItem: addListItem,
      showDetails: showDetails,
      loadList: loadList,
      loadDetails: loadDetails,
  }; //End of IIFE

})();
pokemonRepository.loadList().then(function() {
  // Get all pokemon and loop through each one
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
