import { STRINGS } from "../lang/messages/en/strings.js";
import { GameButton } from "./GameButton.js";
import {UIController} from "./UIController.js";

export class AppController
{
    constructor()
    {
        this.gameButtons = [];
    }

    runGame(numGameButtons)
    {
        const SECONDS_BETWEEN = 2;
        const MILLISECOND = 1000;

        this.createGameButtons(numGameButtons);
        UIController.displayButtons(this.gameButtons);


        setTimeout(() => {
            this.hideButtonNumbers();
            this.shuffleButtons();
        }, numGameButtons*MILLISECOND);
        // for (let i = 1; i < numGameButtons; i++)
        // {
        //     this.countDownToFunction(SECONDS_BETWEEN, this.shuffleButtons);
        // }
        this.enableButtons();
    }

    countDownToFunction(seconds, callback)
    {
        setTimeout(() => {
            callback();
        }, seconds * 1000);
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
        const screenHeight = window.screen.height;
        const screenWidth = window.screen.width;

        for (const button of this.gameButtons)
        {
            button.shuffleLocation(screenWidth, screenHeight);
        }
    }

    enableButtons()
    {
        for (const button of gameButtons)
        {
            button.enabled = true;
        }
    }

    disableButtons()
    {
        for (const button of gameButtons)
        {
            button.enabled = false;
        }
    }

    hideButtonNumbers()
    {
        UIController.hideButtonNumbers();
    }

}



