
const container = document.querySelector('.divContainer');
const rainbow = document.getElementById('rainbow');
const greyscale = document.getElementById('greyscale');
const black = document.getElementById('black');
const size = document.getElementById('size');
const  clear = document.getElementById('clear');
const userColorChoice = document.getElementById('userColorChoice');
const labelofSize = document.getElementById('labelsize');

let sizeValue;
let rainbowSelected;

let allGridvalues = [];

console.log(size.value)
createDiv(20);
function createDiv(gridSize) {
    let divsNeeded = gridSize * gridSize;
    allGridvalues.push(gridSize);
    console.log(allGridvalues.length);
    
    if(allGridvalues.length > 1) {
        while(container.firstChild) {
            container.removeChild(container.lastChild);
        }
    }
    
    for(let i = 1; i < divsNeeded + 1; i++) {
        const div = document.createElement('div');
        div.classList.add('divGrids');
        container.appendChild(div);
    }
    
    console.log(container.childNodes)
}

    
    

    



const divGrids = document.querySelector(`.divGrids`);

size.addEventListener('change', function() {
    console.log(size.value);
    sizeValue = size.value;
    labelofSize.textContent = `Grid Size: ${sizeValue} x ${sizeValue}`;
    container.style.gridTemplateColumns = `repeat(${sizeValue}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${sizeValue}, 1fr)`;
    createDiv(sizeValue);
})


//color shading from tint to black
let colorArray = [
     'rgb(245, 245, 245)', //0
     'rgb(220, 220, 220)',  //1
     'rgb(211, 211, 211)', //2
     'rgb(200, 200, 200)', //3
     'rgb(192, 192, 192)', //4
     'rgb(184, 184, 184)', //5
     'rgb(169, 169, 169)', //6
     'rgb(150, 150, 150)', //7
     'rgb(128, 128, 128)', //8
     'rgb(120, 120, 120)', //9
     'rgb(112, 112, 112)',    //14
     'rgb(104, 104, 104)', //10
     'rgb(96, 96, 96)', //16
     'rgb(88, 88, 88)',    //11
     'rgb(72, 72, 72)',    //12
     'rgb(50, 50, 50)',    //13
     'rgb(32, 32, 32)',//15
     'rgb(0, 0, 0)'        //17
]



rainbow.onclick = function() {
    rainbowSelected = true;
}

container.addEventListener("mouseover", function(e) {
    if(e.target === container) {return};
    let rgbValue = e.target.style;
    rgbValue.backgroundColor = greyscaleColor(e);
})




function greyscaleColor(e) {
    let rgb = e.target.style.backgroundColor;
    let result;

    switch(rgb) { 
        case '':
            result = colorArray[0];
            break;
        case colorArray[0]:
            result = colorArray[1];
            break;
        case colorArray[1]:
            result = colorArray[2];
            break;
        case colorArray[2]:
            result = colorArray[3];
            break;
        case colorArray[3]:
            result = colorArray[4];
            break;
        case colorArray[4]:
            result = colorArray[5];
            break;
        case colorArray[5]:
            result = colorArray[6];
            break;
        case colorArray[6]:
            result = colorArray[7];
            break;
        case colorArray[7]:
            result = colorArray[8];
            break;
        case colorArray[8]:
            result = colorArray[9];
            break;
        case colorArray[9]:
            result = colorArray[10];
            break;
        case colorArray[10]:
            result = colorArray[11];
            break;
        case colorArray[11]:
            result = colorArray[12];
            break;
        case colorArray[12]:
            result = colorArray[13];
            break;
        case colorArray[13]:
            result = colorArray[14];
            break;
        case colorArray[14]:
            result = colorArray[15];
            break;
        case colorArray[15]:
            result = colorArray[16];
            break;
        case colorArray[16]:
            result = colorArray[17];
            break;
        case colorArray[17]:
            result = colorArray[17];
            break;
        default: 
            console.log('no work');
            break;
    }
    return result;
}


function rainbowColor() {
    let colorString = '0123456789ABCDEF';
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color += colorString[Math.floor(Math.random() * 16)];
    }
    return color;
}

function clearColor() {
    return 'white';
}

function blackColor() {
    return 'black';
}



//animate each button with it's unique color
// make buttons more attractice
// make it the best you can possibly make because it is your big project you can use for portfolio