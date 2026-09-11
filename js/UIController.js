import { STRINGS } from "../lang/messages/en/strings.js";


export class UIController
{
    static createStartPrompt(buttonCallback)
    {
        const container = document.createElement("div");
        const text = document.createElement("p");
        const btn = document.createElement("button");
        const textField = document.createElement("input");

        container.setAttribute("id", "startPrompt");
        container.appendChild(text);
        container.appendChild(textField);
        container.appendChild(btn);

        text.innerText = STRINGS.PROMPT;

        btn.textContent = STRINGS.BUTTONTEXT;
        btn.addEventListener("click", buttonCallback);

        textField.setAttribute("type", "text");
        textField.setAttribute("id", "userInput");

        document.body.appendChild(container);
    }

    static deleteStartPrompt()
    {
        const container = document.getElementById("startPrompt");
        document.body.removeChild(container);
    }

    static displayButtons(buttonsArray)
    {
        for (const button of buttonsArray)
        {

        }
    }

    static displayError()
    {
        if (!document.getElementById("invalidInput"))
        {
            const errorMessage = document.createElement("p");
            const container = document.getElementById("startPrompt");
            errorMessage.innerText = STRINGS.INVALID_INPUT;
            errorMessage.setAttribute("style", "color: red");
            errorMessage.setAttribute("id", "invalidInput");
            container.appendChild(errorMessage);
        }
    }
}
