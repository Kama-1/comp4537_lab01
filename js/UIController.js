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

        for (const button of buttonsArray)
        {
            let htmlBtn = document.createElement("button");
            htmlBtn.innerText = button.number;
            htmlBtn.setAttribute("style",
          `
                    background-color: rgb(${button.red}, ${button.green}, ${button.blue});
                    top: ${button.y}px;
                    left: ${button.x}em;
                `);
            htmlBtn.setAttribute("class", "gameButton");
            htmlBtn.setAttribute("id", `button${button.number}`);

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
        for (let i = 0; i < gameButtons.length; i++)
        {
            const buttonID = `button${i+1}`;
            const buttonData = gameButtons[i];
            const gameButton = document.getElementById(buttonID);

            const maxWidth = screen.width;
            const maxHeight = screen.height;
            const randX = Math.floor(Math.random() * 90);
            const randY = Math.floor(Math.random() * 90);

            gameButton.style["left"] = randX + "vw";
            gameButton.style["top"] = randY + "vh";
        }
    }
}
