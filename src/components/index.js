export const createTitle = (text = " ") => {
    const element = document.createElement("h1")
    element.innerHTML = text;
    document.body.appendChild(element)
}

export const createP = (text = " ") => {
    const element = document.createElement("p")
    element.innerHTML = text;
    document.body.appendChild(element)
}

export const createImg = (src) => {
    const img = document.createElement("img");
    img.src = src;
    img.width = 400;
    document.body.appendChild(img);
}