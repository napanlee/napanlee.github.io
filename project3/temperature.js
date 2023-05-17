let table;
let numRows, numCols;
let date = [], avgtemp=[], tmax=[], tmin=[];
let diagramX, diagramY; 
let amt = 365;
var unit = "°F"
var label1 = "Avg. Temp: "
var label2 = "Max. Temp: "
var label3 = "Min. Temp: "


function preload(){
  table = loadTable("assets/data.csv", "csv", "header");
  fontFormulamedium = loadFont('assets/Formulamedium.otf');
  fontFormulabold = loadFont('assets/Formulabold.otf');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  numRows = table.getRowCount();
  numCols = table.getColumnCount();

  c1 = color('#FF5C2B');
  c2 = color('#EEECE5');
  
  slider = createSlider(1,365,365,1).position (875,875)
  
  for(let r =0; r<table.getRowCount(); r++){
    date[r] = table.getString(r,0);
    avgtemp[r] = table.getNum(r,3);
    tmax[r] = table.getNum(r,1);
    tmin[r] = table.getNum(r,2);
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
    size[i] = map(avgtemp[i],8,100,0,205);
    let pointx = (size[i]+radius)*cos(radians(ang*i))+diagramX;
    let pointy = (size[i]+radius)*sin(radians(ang*i))+diagramY;
    let cirx = radius*cos(radians(ang*i))+diagramX;
    let ciry = radius*sin(radians(ang*i))+diagramY;
    
    stroke('#FF5C2B')
    strokeWeight(2.5);
    line(cirx,ciry,pointx,pointy)
    

    let datasize;
    let dis = dist(mouseX,mouseY, pointx,pointy);
    if(dis<3){
      fill('#FF5C2B')
      datasize = 10;
      noStroke();
      circle(pointx,pointy,datasize);
  
      textAlign(CENTER)
      textSize(20);
      fill('#FF5C2B')
      text(date[i],diagramX,diagramY-60);
      textFont(fontFormulamedium);

      textSize(25);
      fill('#FF5C2B')
      text(label1+avgtemp[i]+unit,diagramX,diagramY);

      textSize(15);
      fill('#FF5C2B')
      text(label2+tmax[i]+unit,diagramX,diagramY+60);

      textSize(15);
      fill('#FF5C2B')
      text(label3+tmin[i]+unit,diagramX,diagramY+90);


    
      
      
    }else{
      fill('#FF5C2B')
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


