
export class GameButton
{
    constructor(x, y, number, colour)
    {
        this.x = x;
        this.y = y;
        this.number = number;
        this.colour = colour;
        this.height = 5;
        this.width = 10;
    }

    createSelf()
    {
        const btn = document.createElement("button");
        btn.setAttribute("style", `color: ${this.colour}`);
        btn.setAttribute("value", this.number);
    }

    shuffleSelf(windowHeight, windowWidth)
    {
        const randX = Math.floor(Math.random() * windowWidth);
        const randY = Math.floor(Math.random() * windowHeight);

        self.setAttribute("style",
    `
            color: ${this.colour};
            top: ${randY}px;
            left: ${randX}px;
        `);
    }


}
