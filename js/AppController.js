import { STRINGS } from "../lang/messages/en/strings.js";
import { GameButton } from "./GameButton.js";

export class AppController
{
    gameButtons;


    shuffleButtons()
    {
        const screenHeight = window.screen.height;
        const screenWidth = window.screen.width;

        for (const button of gameButtons)
        {
            button.shuffleLocation();
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

}



