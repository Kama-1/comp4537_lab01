import { STRINGS } from "../lang/messages/en/strings.js";
import { GameButton } from "./GameButton.js";
import {UIController} from "./UIController.js";

export class AppController
{
    constructor()
    {
        this.gameButtons = [];
    }


    async runGame(numGameButtons)
    {
        const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        const SECONDS_BETWEEN = 2;
        const MILLISECOND = 1000;

        this.createGameButtons(numGameButtons);
        UIController.displayButtons(this.gameButtons);

        await sleep(numGameButtons * MILLISECOND);
        this.shuffleButtons();
        for (let i = 0; i < numGameButtons; i++)
        {
            console.log(`Shuffle ${i}`);
            await sleep(SECONDS_BETWEEN*MILLISECOND);
            this.shuffleButtons();
        }
        this.hideButtonNumbers();
    }

    createGameButtons(numGameButtons)
    {
        const MAX_COLOUR = 255;

        const SCREEN_PADDING = Math.floor(window.screen.width / 32);
        const POSITION_BETWEEN = Math.floor((window.screen.width-SCREEN_PADDING-SCREEN_PADDING)/numGameButtons);
        const y = Math.floor(window.screen.height/2);
        for (let i = 0; i < numGameButtons; i++)
        {
            const x = POSITION_BETWEEN*i + SCREEN_PADDING;
            const number = i + 1;
            const enabled = false;

            const red = Math.floor(Math.random()*MAX_COLOUR);
            const green = Math.floor(Math.random()*MAX_COLOUR);
            const blue = Math.floor(Math.random()*MAX_COLOUR);

            this.gameButtons[i] = new GameButton(x,y,number,red,green,blue,enabled);
        }
    }

    shuffleButtons()
    {
        UIController.shuffleButtonLocations(this.gameButtons);
    }

    hideButtonNumbers()
    {
        UIController.hideButtonNumbers();
    }

}



