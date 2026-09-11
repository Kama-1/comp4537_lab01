import { Strings } from "../lang/messages/en/strings.js";
import { GameButton } from "./GameButton.js";
import { UIController } from "./UIController.js";
import { AppController } from "./AppController.js";

class Main
{
    displayPrompt()
    {
        const container = UIController.createStartPrompt();
        document.appendChild(container);
    }

    displayButtons()
    {
        UIController.displayButtons(gameButtons);
    }
}