// - Make sure you check and understand the data that is given to you! ✅
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object

// Name: pokemon.name
// Image: pokemon.sprites.other['official-artwork'].front_default
// Stat name: pokemon.stats[0].stat.name
// Stat value: pokemon.stats[0].base_stat

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

// input: pokemon
// action: create a card for this pokemon
// output: undefined
function createPokemonCard(pokemon) {
  // let facingForwards = true

  let cardLi = document.createElement('li')
  cardLi.className = 'card'
  cardLi.addEventListener('click', function () {
    // way 1
    if (pokeImg.src === pokemon.sprites.front_default) {
      pokeImg.src = pokemon.sprites.back_default
    } else {
      pokeImg.src = pokemon.sprites.front_default
    }

    // way 2
    // if (facingForwards) {
    //   pokeImg.src = pokemon.sprites.back_default
    // } else {
    //   pokeImg.src = pokemon.sprites.front_default
    // }

    // facingForwards = !facingForwards

    // way 3
    // pokeImg.src =
    //   pokeImg.src === pokemon.sprites.front_default
    //     ? pokemon.sprites.back_default
    //     : pokemon.sprites.front_default
  })

  // cardLi.addEventListener('mouseenter', function () {
  //   pokeImg.src = pokemon.sprites.front_default
  // })

  // cardLi.addEventListener('mouseleave', function () {
  //   pokeImg.src = pokemon.sprites.back_default
  // })

  let titleH2 = document.createElement('h2')
  titleH2.className = 'card--title'
  titleH2.textContent = pokemon.name.toUpperCase()

  let pokeImg = document.createElement('img')
  pokeImg.width = 256
  pokeImg.className = 'card--img'
  pokeImg.src = pokemon.sprites.back_default

  let statsUl = document.createElement('ul')
  statsUl.className = 'card--text'

  for (let statInfo of pokemon.stats) {
    let statLi = document.createElement('li')
    statLi.textContent = `${statInfo.stat.name.toUpperCase()}: ${
      statInfo.base_stat
    }`
    statsUl.appendChild(statLi)
  }

  cardLi.append(titleH2, pokeImg, statsUl)

  let cardsUl = document.querySelector('.cards')
  cardsUl.append(cardLi)
}

for (let pokemon of data) {
  createPokemonCard(pokemon)
}

// function createAddPokemonForm() {
//   let formEl = document.createElement('form')
// }

// Console log Hello when the form is submitted
// - find the form ✅
// - add a "submit" event listener on the form ✅
// - don't let the form refresh the page ✅
// - add a function that console logs hello when the form is submitted ✅

let addPokemonForm = document.querySelector('.add-pokemon-form')
addPokemonForm.addEventListener('submit', function (event) {
  event.preventDefault()

  let pokemon = {
    name: addPokemonForm.name.value,
    sprites: {
      back_default: addPokemonForm.backImage.value,
      front_default: addPokemonForm.frontImage.value,
    },
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
      {
        base_stat: 9001,
        effort: 0,
        stat: {
          name: 'cuteness',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
  }

  addPokemonForm.reset()

  createPokemonCard(pokemon)
})
