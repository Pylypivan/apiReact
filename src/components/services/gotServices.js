export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }

    getAllBooks() {
        return this.getResource(`/books/`);
    }
    
    getBook(id) {
        return this.getResource(`/books/${id}/`);
    }
    
    async getAllCharacters() {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map( this._transormCharacter);
    }
    
    async getCharacter (id) {
         const character = await this.getResource(`/characters/${id}`);
         return this._transormCharacter(character);
    } 
    
    getAllHouses() {
        return this.getResource(`/houses/`);
    }
    
    getHouse(id) {
        return this.getResource(`/houses/${id}/`);
    }

    _transormCharacter(char) {
        return {
        name:char.name,
        gender:char.gender,
        born:char.born,
        died:char.died,
        culture:char.culture
        }
    }
    _transormHouse(house) {
        return {
            name:house.name,
            region:house.region,
            words:house.words,
            tites:house.tites,
            overlord:house.overlord,
            ancestralWeapons:house.ancestralWeapons
        }
    }

    _transormBook(book) {
        return {
            name:book.name,
            numberOfPages:book.numberOfPages,
            publiser:book.publiser,
            released:book.released

        }
    }
}