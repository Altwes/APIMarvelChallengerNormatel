const marvel = {
    render:()=> {
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=db27713655ed717db8dc05c604718f59&hash=ee080aba54082a9d8e64f01b02268085';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
        .then(res=> res.json())
        .then((json)=> {
            for(const hero of json.data.results){
                let urlHero = hero.urls[0].url;
                contentHTML+= `
                <div class="col-md-4">
                    <a href="${urlHero}" target="_blank">
                       <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                    </a>
                    <h3 class="title">${hero.name}</h3>
                </div>`;
            }
            container.innerHTML = contentHTML;
        })
    }
};
marvel.render();