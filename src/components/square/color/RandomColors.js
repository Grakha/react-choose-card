import { blueColors} from './BlueColors'

const palette = ["red", "orange", "brown", "lime", "green", "grey", "pink", "purple"];
let colors = blueColors();

export const randomColors = () => {

    for (let i = colors.length+1; i <= 6; i++) {
        let color = palette[Math.floor(Math.random() * palette.length)];
        colors = [...colors,  color];
    }

    colors = colors.sort(() => Math.random() - 0.5)
    return colors;
}