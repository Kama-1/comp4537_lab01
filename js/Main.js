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
        console.log(`Text: ${textValue}`); // TODO remove
        UIController.deleteStartPrompt();
    });
}

function displayButtons()
{
    UIController.displayButtons(gameButtons);
}

displayPrompt();