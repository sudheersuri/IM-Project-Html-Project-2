var btncounter=0;
var previmg="";
var prevbtn="";
var c1=1;
var i=0,j=0;
var hobbydesc=[
    "I love programmming, you will often find me coding, i  love to develop web and mobile applications",
    "I love python, its soo simple and beautiful, i kept it as my hobby as most of the time you will find me playing with it",
    "And when i am too bored , i kill my time with competitive programming websites like Hackerrank and CodeWars",
    "I also write  short stories in my free time","most of them are scifi adventures","and some include horror too",
    "Am a gamer too, i love gaming and game development","Dota 2 : My most favourite game","Limbo: My second favourite",
    "Wolf 3d: As a child i played this alot","TV shows are my stress busters","Friends: I Love it soo much",
    "Sherlock, another TV Show that had ultra impact on me","Big Bang Theory: i watch it for Sheldon","Daredevil: Another TV show that i watch often",
    "Breaking Bad: Most badass TV show","Money Heist: Best of recent TV shows","Seinfield: A classic, Hillarious  TV Show that is always in my watchlist","Mr.Robot: Anyone into computers must watch it",
    "How I met your mother: I watch it for Barney","I also love to travel","Goa is my favourite holiday destination",
    "Unlike others i like travelling alone","Am a Bike enthusiast","When am down, i often go on a long ride at dnagerous speeds",
    "I also develop games in my free time","I often use Godot for game development","I also write technical blogs",
    "I love teaching","Now and then i upload tutorials on youtube"   
];
var imglinks =  ["https://miro.medium.com/max/2560/1*enCF61GFzLovMNXzAJmVNQ.png",
"https://www.macworld.co.uk/cmsdata/features/3635912/learn_python_mac_thumb800.jpg",
"https://miro.medium.com/max/1904/1*LUBtD-FjCbKq4lJk9625LA.jpeg",
"https://jerryjenkins.com/wp-content/uploads/2019/08/Writing-a-Short-Story-1024x627.jpg",
"https://i.pinimg.com/originals/ab/2d/30/ab2d307524a25c19989bcbf6df65cdee.jpg",
"https://i.ytimg.com/vi/5-1Wr3uoMCg/maxresdefault.jpg",
"https://www.impulsegamer.com/articles/wp-content/uploads/2018/05/gas-620x350.jpg",
"https://steamcdn-a.akamaihd.net/apps/dota2/images/blog/play/dota_heroes.png",
"https://images2.alphacoders.com/180/thumb-1920-180732.jpg",
"https://classicreload.com/sites/default/files/wolfensein-3d.png",
"https://i.insider.com/5d5ea74800ef2b23c505511a?width=1136&format=jpeg",
"https://cdn1.thr.com/sites/default/files/2018/12/cast01-h_2018.jpg",
"https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/TVSeries/SherlockBBC_3919500-Sherlock._V390112048_SX1080_.jpg",
"https://img1.looper.com/img/gallery/the-untold-truth-of-the-big-bang-theory/intro-1522271045.jpg",
"https://wegotthiscovered.com/wp-content/uploads/2019/12/Daredevil.jpeg",
"https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_UX477_CR0,0,477,268_AL_.jpg",
"https://tecake.com/wp-content/uploads/2020/04/MoneyHeist.jpg",
"https://s.abcnews.com/images/Entertainment/GTY_seinfeld_mar_19900301_01_16x9_992.jpg",
"https://miro.medium.com/max/2400/1*VytWprd2ulmw2eIwnHMNJQ.jpeg",
"https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492201523/articles/2014/03/31/everything-you-need-to-know-about-how-i-met-your-mother/comic-con-2013-how-i-met-your-mother_ikwie7"
,"https://www.123dentist.com/wp-content/uploads/2018/04/dental-emergency-travelling-825x550.jpg",
"https://img.traveltriangle.com/blog/wp-content/uploads/2015/06/dont-do-things-while-in-goa1.jpg",
"https://www.travelanddestinations.com/wp-content/uploads/2018/01/Solo-Traveller-and-mountains-in-Europe.jpg",
"https://comoto.imgix.net/blog_content_image/image/57996/gallery/DIAVEL_1260_S_right.jpg?w=378&dpr=2.625&auto=format",
"https://i.ytimg.com/vi/Y3nyrAOQ1pU/maxresdefault.jpg",
"https://gameanalytics.com/wp-content/uploads/2017/12/Game-Development.png",
"https://i.redd.it/zjd4n8a6v4d01.png",
"https://qph.fs.quoracdn.net/main-qimg-0ab8f30f6fc4f4d910a8c1bcc6d95488",
"https://larryferlazzo.edublogs.org/files/2020/02/online_teaching_1582997168.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlUNUZ923Xs6isC78pvre372KgX4s5dpK_iVjpxS5JJ7mY0nYC&usqp=CAU"
];

     
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