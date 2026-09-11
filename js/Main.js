import { STRINGS } from "../lang/messages/en/strings.js";
import { GameButton } from "./GameButton.js";
import { UIController } from "./UIController.js";
import { AppController } from "./AppController.js";
// Dont use this class?

function displayPrompt()
{
    UIController.createStartPrompt(() => {
        const textField = document.getElementById("userInput");
        const textValue = textField.value;

        const success = validateInput(textValue);

        if (success)
        {
            UIController.deleteStartPrompt();

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

    return true;
}

function displayButtons()
{
    UIController.displayButtons(gameButtons);
}

displayPrompt();