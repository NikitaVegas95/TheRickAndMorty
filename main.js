const characterCard = document.querySelector('.character__wrapper')
const baseURL = 'https://rickandmortyapi.com/api/character'

const fetchAllCharacter = async () => {
    const response = await fetch(baseURL, {
        method: 'GET',
    })
    if (!response.ok) {
        throw new Error('Ошибка запроса')
    }
    return await response.json()
}

fetchAllCharacter()
    .then(results => {
        results.results.map((results) => {
            characterCard.innerHTML +=
                `<div class="character__card">
                    <p class="character__title">${results.name}</p>
                    <img class="character__img" src="${results.image}" alt="">
                    <div class="character__text-wrapper">
                        <p class="character__text">Specie: <span>${results.species}</span></p>
                        <p class="character__text">State: <span>${results.status}</span></p>
                        <p class="character__text">Location: <span>${results.location.name}</span></p>
                    </div>
                </div>
                `
        })
    })




