
export class GameButton
{
    constructor(x, y, number, colour)
    {
        this.x = x;
        this.y = y;
        this.number = number;
        this.colour = colour;
        this.enabled = false;
    }

    shuffleLocation(maxWidth, maxHeight)
    {
        const randX = Math.floor(Math.random() * maxWidth);
        const randY = Math.floor(Math.random() * maxHeight);

        self.setAttribute("style",
    `
            color: ${this.colour};
            top: ${randY}px;
            left: ${randX}px;
        `);
    }


}
