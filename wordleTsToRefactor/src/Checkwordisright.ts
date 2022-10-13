import { Game } from "./Game.js";
class chekwordiseight implements gamecheck {
    #game : Game ;
    #pickedWord: string;
    #currentWord = "";
    constructor (game :Game,  pickedWord: string, currentWord: string){
         this.#game = game;
         this.#pickedWord = pickedWord;}
    pressed ():void{
        if (this.#currentWord == this.#pickedWord){
        location.assign("/winner");
    }
}
        
    }
    