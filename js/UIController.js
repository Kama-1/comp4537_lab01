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
        const container = document.createElement("div");
        container.setAttribute("id", "gameButtons");

        for (const button of buttonsArray)
        {
            let htmlBtn = document.createElement("button");
            htmlBtn.innerText = button.number;
            htmlBtn.setAttribute("style",
          `
                    background-color: rgb(${button.red}, ${button.green}, ${button.blue});
                    top: ${button.y}px;
                    left: ${button.x}px;
                `);
            htmlBtn.setAttribute("class", "gameButton");

            container.appendChild(htmlBtn);
        }
        document.body.appendChild(container);
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

    static hideButtonNumbers()
    {
        const gameButtons = document.getElementsByClassName("gameButton");
        for (const button of gameButtons)
        {
            button.innerHTML = "";
        }
    }

    static shuffleButtonLocations(gameButtons)
    {
        for (const button of gameButtons)
        {
            const maxWidth = window.screen.width;
            const maxHeight = window.screen.height;
            const randX = Math.floor(Math.random() * maxWidth);
            const randY = Math.floor(Math.random() * maxHeight);

            button.x = randX;
            button.y = randY;
        }

        UIController.redrawGameButtons(gameButtons);
    }

    static removeGameButtons()
    {
        const gameButtons = document.getElementsByClassName("gameButton");
        const container = document.getElementById("gameButtons");
        for (const button of gameButtons)
        {
            container.removeChild(button);
        }
    }

    static redrawGameButtons(gameButtons)
    {
        UIController.removeGameButtons();
        UIController.displayButtons(gameButtons);
    }
}
