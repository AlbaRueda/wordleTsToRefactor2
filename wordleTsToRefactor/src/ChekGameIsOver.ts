import { Game } from "./Game.js";
import { MAX_ATTEMPTS, MAX_WORD_SIZE} from "./env.js";
class checkGameIsOver implements gamecheck {
    #game : Game ;
    #turn: number;
    constructor (game :Game,turn: number){
        this.#game = game;
        this.#turn = 1;
    }
        pressed ():void{
            if (this.#turn == MAX_ATTEMPTS ){
                location.assign("/loser");}}}