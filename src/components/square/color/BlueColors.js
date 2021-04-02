export const blueColors = (colorDefault) => {
    
    let colors = [];
    let qt = Math.ceil(Math.random() * 3);

    for(let i = 1; i <= qt; i++) {
        colors = [...colors, colorDefault];
    }
    console.log(colors);

    return colors;
}