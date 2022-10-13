import { Game } from "./Game.js";
import { MAX_WORD_SIZE} from "./env.js";
import { UIChanger } from "./UIChanger.js";
export class chekrightletter implements gamecheck {
    #game : Game ;
    #pickedWord: string
    #currentWord: string
    #userInterface: UIChanger
    #turn: number
    constructor (game :Game, pickedWord: string, currentWord: string, userInterface: UIChanger,turn: number ){
        this.#game = game;
        this.#pickedWord = pickedWord;
        this.#currentWord = "";
        this.#userInterface = new UIChanger();
        this.#turn = 1;
    }
        pressed(): void {
            for(let i=0; i<MAX_WORD_SIZE; i++)
            if (this.#pickedWord[i]==this.#pickedWord)
            if (this.#pickedWord[i]==this.#currentWord[i]){
                this.#userInterface.changeBackgroundPosition(this.#turn, i, "rightLetter");
            }
        }}
