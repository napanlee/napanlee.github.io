let table;
let numRows, numCols;
let date = [], precipitation=[];
let diagramX, diagramY; 
var unit = " inches"
let amt = 365;


function preload(){
  table = loadTable("assets/data.csv", "csv", "header");
  fontFormulamedium = loadFont('assets/Formulamedium.otf');
  fontFormulabold = loadFont('assets/Formulabold.otf');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  numRows = table.getRowCount();
  numCols = table.getColumnCount();

  slider = createSlider(1,365,365,1).position (875,875)

  for(let r =0; r<table.getRowCount(); r++){
    date[r] = table.getString(r,0);
    precipitation[r] = table.getNum(r,4,);
  }
  minMax();
}

let size = [];
function draw() {
  background('#EEECE5');
  diagramX = (width/2)
  diagramY = (height/2);
  let radius = width/5-175
  let ang = 360 / numRows;
  
  amt = slider.value()
  
  for(let i =0; i<amt; i++){
    size[i] = map(precipitation[i],15,0,200,75);
    let pointx = (size[i]+radius)*cos(radians(ang*i))+diagramX;
    let pointy = (size[i]+radius)*sin(radians(ang*i))+diagramY;
    let cirx = radius*cos(radians(ang*i))+diagramX;
    let ciry = radius*sin(radians(ang*i))+diagramY;
  
    
    stroke('#4899FF')
    strokeWeight(2.5);
    line(cirx,ciry,pointx,pointy)
    
    let datasize;
    let dis = dist(mouseX,mouseY, pointx,pointy);
    if(dis<3){
      fill('#4899FF')
      datasize = 10;
      noStroke();
      circle(pointx,pointy,datasize);
  
      textAlign(CENTER)
      textSize(20);
      fill('#4899FF')
      text(date[i],diagramX,diagramY)
      textFont(fontFormulamedium);

      
      textSize(25);
      fill('#4899FF');
      text(precipitation[i]+unit,diagramX,diagramY+45);
      
      
  
    }else{
      fill('#4899FF')
      datasize = 3;
      noStroke();
      circle(pointx,pointy,datasize);
    }
  }
}
let dataMin, dataMax=0;
function minMax(){
  for(let i=0;i<numRows;i++){
    if(table.getNum(i,1)>dataMax){
      dataMax = table.getNum(i,1);
    }
  }
  dataMin = dataMax;
  for(let i=0; i<numRows; i++){
    if(table.getNum(i,1)<dataMin){
      dataMin = table.getNum(i,1);
    }
  }
  print("max value" + dataMax +"min value"+dataMin)
}