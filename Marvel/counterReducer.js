
function getHash(ts, pub, priv){
    let query = ts + priv + pub;
    let hash = md5.create();
    hash.update(query);
    return hash.hex();
}

async function getHeroes(){
    let privateKey = "e4a1dec03a65997e838c7e6bbfe627908a3d89e7";
    let publicKey = "f9ccb865e6d0a66f69166d2168d840f9";
    let timeStamp = Date.now();
    let mainUrl = "http://gateway.marvel.com/v1/public/";

    let hash = getHash(timeStamp, publicKey, privateKey);
    
    let heroesUrl = mainUrl + "characters?offset=0&limit=20&ts=" + timeStamp
                    + "&apikey=" + publicKey + "&hash=" + hash;
    
    let response = await fetch(heroesUrl);
    let json = await response.json();

    let heroes = json.data.results;
    return heroes;
};

async function counterReducer(state, action){
    switch (action.type) {
        case MARVEL:
            return state = await getHeroes();
        default:
            return state;
    }
}