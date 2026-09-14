import { STRINGS } from "../lang/messages/en/strings.js";
import { GameButton } from "./components/GameButton.js";
import {UIController} from "./UIController.js";

function validateInput(textValue)
{
    const MAX_VALUE = 7;
    const MIN_VALUE = 3;

    textValue = textValue.trim();
    if (textValue == null || textValue === "")
        return false;

    try
    {
        textValue = Number(textValue);
    } catch (e)
    {
        return false;
    }

    if (textValue > MAX_VALUE || textValue < MIN_VALUE)
        return false;

    if (textValue % 1 !== 0)
        return false;

    return true;
}

function formatInput(textValue)
{
    const success = validateInput(textValue);
    if (success)
    {
        return Number(textValue.trim());
    }
    else
    {
        return 0;
    }
}


export class AppController
{
    constructor()
    {
        this.gameButtons = [];
    }

    displayPrompt()
    {
    UIController.createStartPrompt(() => {
        const textField = document.getElementById("userInput");
        const textValue = textField.value;

        const success = validateInput(textValue);

        if (success)
        {
            UIController.deleteStartPrompt();
            const formattedValue = formatInput(textValue);
            this.runGame(formattedValue);
        }
        else
        {
            UIController.displayError();
        }
    });
}

    createGameButtons(numGameButtons)
    {
        const MAX_COLOUR = 255;

        const POSITION_BETWEEN = 10;
        const y = Math.floor(window.screen.height/2);
        for (let i = 0; i < numGameButtons; i++)
        {
            const x = POSITION_BETWEEN*i
            const number = i + 1;
            const enabled = false;

            const red = Math.floor(Math.random()*MAX_COLOUR);
            const green = Math.floor(Math.random()*MAX_COLOUR);
            const blue = Math.floor(Math.random()*MAX_COLOUR);

            this.gameButtons[i] = new GameButton(x,y,number,red,green,blue,enabled);
        }
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
            await sleep(SECONDS_BETWEEN*MILLISECOND);
            this.shuffleButtons();
        }
        this.hideButtonNumbers();
        this.enableButtons();

    }


    shuffleButtons()
    {
        UIController.shuffleButtonLocations(this.gameButtons);
    }

    hideButtonNumbers()
    {
        UIController.hideButtonNumbers();
    }

    enableButtons()
    {
        for (const button of this.gameButtons)
        {
            UIController.enableButtons();
        }
    }

    displayButtons()
    {
        UIController.displayButtons(this.gameButtons);
    }

}



