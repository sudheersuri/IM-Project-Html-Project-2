var btncounter=0;
var previmg="";
var prevbtn="";
var c1=1;
var i=0,j=0;
var hobbydesc=[
    "description 1", "description 2","description 3"  
];
var imglinks =  ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"];

function resize(x,y)
{
    
    var imgdom=document.getElementById(x.id);
    var btndom=document.getElementById(y.id);

    if(previmg!="")
    {
        if(previmg!=imgdom)
        {
             prevbtn.innerHTML="medium";    
             previmg.style.width="700";
             previmg.style.height="500";
             btncounter=0;
        }
    }
    previmg=imgdom;
    prevbtn=btndom;

    if(btncounter==0)
    {  
       btndom.innerHTML="large";
       imgdom.style.width=1000;
       imgdom.style.height=800;      
       btncounter=1;
    }
    else if(btncounter==1)
    {
        btndom.innerHTML="small";    
        imgdom.style.width=1600;
        imgdom.style.height=1100;
        btncounter=2;
    }
    else if(btncounter==2)
    {
        btncounter=0;    
        btndom.innerHTML="medium";    
        imgdom.style.width=700;
        imgdom.style.height=500;
       
    }
    imgdom.style.transition="width 2s,height 2s";
}
function gotop(x)
{
   // var temp=imglinks[0];
   // imglinks[0]=x;
   // imglinks[imglinks.indexOf(x)]=temp;
   var index1=0;
   var index2=imglinks.indexOf(x);
   var temp=imglinks[index1];
   imglinks[index1]=imglinks[index2];
   imglinks[index2]=temp;
   c1=1;
   loadallimages();
}
function gobottom(x)
{
   // var temp=imglinks[0];
   // imglinks[0]=x;
   // imglinks[imglinks.indexOf(x)]=temp;
   var index1=c1-2;
   var index2=imglinks.indexOf(x);
   var temp=imglinks[index1];
   imglinks[index1]=imglinks[index2];
   imglinks[index2]=temp;
   c1=1;
   loadallimages();
}
function goleft(x)
{
   var index1=imglinks.indexOf(x);
   var index2=index1-1;
   if(index1!=0)
   {
   var temp=imglinks[index1];
   imglinks[index1]=imglinks[index2];
   imglinks[index2]=temp;
   c1=1;
   loadallimages();
    }
}

function goright(x)
{
   var index1=imglinks.indexOf(x);
   var index2=index1+1;
   if(index1!=c1-2)
   {
   var temp=imglinks[index1];
   imglinks[index1]=imglinks[index2];
   imglinks[index2]=temp;
   c1=1;
   loadallimages();
   }
}


function loadallimages()
{   

       //create a array 
       //get the  dom of content
       var contentdom=document.getElementById("content");
       contentdom.innerHTML="";
       //create a counter variable i
       var divid=""
       var imgid="";
       var sizebtnid=""; 
       var topbtnid=""; 
       var bottombtnid=""; 
       var leftbtnid=""; 
       var rightbtnid=""; 
       var linkimg="";
       var childid="";
       c1=1;
       //start the loop 
       while(c1<=imglinks.length)
       {
           divid="box"+c1;
           imgid="img"+c1;
           sizebtnid="sizebtn"+c1;
           topbtnid="topbtn"+c1;
           bottombtnid="bottombtn"+c1;
           leftbtnid="leftbtn"+c1;
           rightbtnid="rightbtn"+c1;
           childid="child"+c1;
           linkimg=imglinks[c1-1];
           hobbyd=hobbydesc[c1-1];
           console.log(linkimg);
       //append div with id box+i
       contentdom.innerHTML +=
       `<p>${hobbyd}</p><br>
       
       <div id="${divid}" onmouseover="displayBtns(${childid})" onmouseout="hideBtns(${childid})">
       <img id="${imgid}" src="${linkimg}" width=700 height=500 "><br>
       
           <div id="${childid}" >
          
            <button id="${sizebtnid}" onclick="resize(${imgid},${sizebtnid})">Medium</button>
            <button id="${topbtnid}" onclick="gotop('${linkimg}')" >Top</button>
            <button id="${bottombtnid}" onclick="gobottom('${linkimg}')" >Bottom</button>
            <button id="${leftbtnid}" onclick="goleft('${linkimg}')" >Left</button>
            <button id="${rightbtnid}" onclick="goright('${linkimg}')">Right</button>
            
            </div>
        </div>
       `; 
          
           c1++;
      }
      positionButtons();
}
function displayBtns(x)
{
    var childdiv=document.getElementById(x.id);
    childdiv.style.opacity=1;
    childdiv.style.transition="opacity 2s"
}

function hideBtns(x)
{
    var childdiv=document.getElementById(x.id);
    childdiv.style.opacity=0;
    childdiv.style.transition="opacity 2s"
}

function positionButtons()
{
    c1=1;
   while(c1<=imglinks.length)
       {
           divid="box"+c1;
           childid="child"+c1;
          
           divdom=document.getElementById(divid);
           divdom.style.position="relative";
           divdom.style.display="flex";
           divdom.style.margin="30px";
           
           divdom.style.justifyContent="center";
           
           childdom=document.getElementById(childid);
           childdom.style.position="absolute";
           childdom.style.width="35%";
           
           childdom.style.display="flex";
           childdom.style.justifyContent="space-evenly";
           childdom.style.bottom="0px";
           childdom.style.padding="2%";   
           childdom.style.opacity=0;
           
           c1++;
       }
}