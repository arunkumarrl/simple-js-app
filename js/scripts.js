var pokemonRepository=(function () {
  var repository=[];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  var $modalContainer = document.querySelector('#modal-container');
  var $pokemonList = document.querySelector('ul');

  //Function to add new Pokemon data
  function add(pokemon) {
    //Must be an 'object' type
    if (typeof pokemon !== 'object') {
      return 'Not a valid input'
    }else{
      repository.push(pokemon);
    }
  }
  function getAll() {
    return repository;
  }

  function addListItem (pokemon){
    var listitemli= document.createElement('li');
    var buttonItem = document.createElement('button');
    buttonItem.innerHTML= pokemon.name;
    listitemli.appendChild(buttonItem);
    document.querySelector("ul").append(listitemli);
    buttonItem.addEventListener('click', function (event) {
      showDetails(pokemon)
    })
  }
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
  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    })
  }
  //Funtion to create reusable modal
  function createReusableModal() {

    var modal = document.createElement('div');
    var modalElement1 = document.createElement('div');
    var modalElement2 = document.createElement('div');
    modalElement2.classList.add('pokemon-info')
    modal.classList.add('modal');
    modal

    var closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    //closeButtonElement.addEventListener('click', hideModal)

    var nameElement = document.createElement('h1');
    var imageElement = document.createElement('img');
    imageElement.classList.add('pokemon-img');
    var heightElement = document.createElement('h2');
    var weightElement = document.createElement('h3');

    modalElement1.appendChild(closeButtonElement);
    modal.appendChild(modalElement1);
    modalElement2.appendChild(nameElement);
    modalElement2.appendChild(imageElement);
    modalElement2.appendChild(heightElement);
    modal.appendChild(modalElement2)
    $modalContainer.appendChild(modal);
  }
  //Function to show modal for Pokemon data
  function showModal(item) {
    console.log('TCL: showModal -> item', item.name.charAt(0).toUpperCase() + item.name.slice(1));

    //create element for Pokemon name
    var nameElement = document.querySelector('h1');
    nameElement.innerText = item.name.charAt(0).toUpperCase() + item.name.slice(1);

    var imageElement = document.querySelector('.pokemon-img');
    imageElement.setAttribute('src', item.imageUrl);

    var heightElement = document.querySelector('h2');
    heightElement.innerText = 'Height: ' + item.height;

    $modalContainer.classList.add('is-visible');
  }

  //Function to hide modal
  function hideModal() {
    //var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.classList.remove('is-visible');
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      return item;
    }).then(function(item) {
      console.log('TCL: showDetails -> item', item);
      showModal(item);
    });
  }

  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  $modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    var target = e.target;
    console.log('TCL: pokemonRepository -> target', target);
    var $modalClose = document.querySelector('.modal-close');
    if (target === $modalContainer || $modalClose) {
      hideModal();
    }
  })

  return{
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    createReusableModal: createReusableModal,
    showModal: showModal,
    hideModal: hideModal
  };
})();


//Creates list of Pokemon with Pokemon's name on the button
pokemonRepository.loadList().then(function() {
  //Create a reusable modal once
  pokemonRepository.createReusableModal();
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
