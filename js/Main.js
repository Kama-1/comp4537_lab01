import { STRINGS } from "../lang/messages/en/strings.js";
import { GameButton } from "./GameButton.js";
import { UIController } from "./UIController.js";
import { AppController } from "./AppController.js";

function displayPrompt()
{
    UIController.createStartPrompt(() => {
        const textField = document.getElementById("userInput");
        const textValue = textField.value;

        const success = validateInput(textValue);

        if (success)
        {
            UIController.deleteStartPrompt();
            const formattedValue = formatInput(textValue);
            appController.startGame(formattedValue);
        }
        else
        {
            UIController.displayError();
        }
    });
}

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

function displayButtons()
{
    UIController.displayButtons(gameButtons);
}


const appController = new AppController();
displayPrompt();

