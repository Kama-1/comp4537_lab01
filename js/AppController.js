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
        this.currentGuessedButton = 1;
        this.UI = new UIController();
    }

    startGame()
    {
        this.currentGuessedButton = 1;
        this.displayPrompt();
    }

    displayPrompt()
    {
        this.UI.createStartPrompt(() => {
            const textField = document.getElementById("userInput");
            const textValue = textField.value;

            const success = validateInput(textValue);

            if (success)
            {
                this.UI.deleteStartPrompt();
                const formattedValue = formatInput(textValue);
                this.runGame(formattedValue);
            }
            else
            {
                this.UI.displayError();
            }
        });
    }

    checkUserAnswer(button)
    {
        const delimiter = "button";
        const buttonID = button.id;
        const numID = buttonID[delimiter.length];


        if (numID == this.currentGuessedButton)
        {
            button.innerHTML = numID;
            if (this.currentGuessedButton === this.gameButtons.length)
            {
                this.winGame();
            }
            this.currentGuessedButton++;
        }
        else
        {
            this.loseGame();
        }
    }

    winGame()
    {
        this.UI.displayWinGame();
    }

    loseGame()
    {
        this.disableButtons();
        this.UI.displayLoseGame();
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
        this.UI.displayButtons(this.gameButtons, this.checkUserAnswer.bind(this));

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
        this.UI.shuffleButtonLocations(this.gameButtons);
    }

    hideButtonNumbers()
    {
        this.UI.hideButtonNumbers();
    }

    enableButtons()
    {
        for (const button of this.gameButtons)
        {
            this.UI.enableButtons();
        }
    }

    disableButtons()
    {
        for (const button of this.gameButtons)
        {
            this.UI.disableButtons();
        }
    }

}



