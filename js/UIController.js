import { STRINGS } from "/lang/messages/en/strings";

export class UIController
{
    constructor(rootElemet)
    {
        this.root = rootElemet;
    }


    static createStartPrompt()
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
        btn.setAttribute("onclick", "");

        textField.setAttribute("type", "text");
        textField.setAttribute("id", STRINGS.BUTTONTEXT);

        return container;
    }

    static displayButtons(buttonsArray)
    {
        for (const button of buttonsArray)
        {

        }
    }
}