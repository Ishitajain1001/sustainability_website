// defines a function to generate random images
function display_random_image() 
{
     var ecoImages = [{
        src: "https://i.pinimg.com/564x/e0/ec/36/e0ec36b247a8c739ca24da1f16d6e65e.jpg",
        width: "500",
        height: "500",
        
    }, {
        src: "https://pbs.twimg.com/media/EzTlAy9VoAEXVlZ?format=png&name=small",
        width: "500",
        height: "500"
    }, {
        src: "https://pbs.twimg.com/media/EzTJzbwVUAANgel?format=png&name=small",
        width: "500",
        height: "500"
    }, {
        src: "https://pbs.twimg.com/media/EzTjVccVgA0NJpb?format=png&name=small",
        width: "500",
        height: "500"
    },{
        src: "https://images.squarespace-cdn.com/content/v1/5eda91260bbb7e7a4bf528d8/1618851402610-0PP8LHK779R3SEQZY797/meme18.jpg?format=500w",
        width: "500",
        height: "500"
    }, {
        src: "https://media.makeameme.org/created/recycling-is-too-5c0bc5.jpg",
        width: "500",
        height: "500"
    }, {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvUU1wsUWBQN8eYTdbULNuzVClp3cNn4VcDPgOg83L3-zb8jJdGh1gvzo4Ec1MgOOocoM&usqp=CAU",
        width: "500",
        height: "500"
    }, {
        src: "https://img-9gag-fun.9cache.com/photo/aV7ArXK_700bwp.webp",
        width: "500",
        height: "500"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = ecoImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = ecoImages[i].src;
        preBuffer[i].width = ecoImages[i].width;
        preBuffer[i].height = ecoImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}

// defines a function to generate random sounds
soundList = [ 'sound1' ]
function randomSound() {
    var index = Math.floor(Math.random() * 1000) % soundList.length;
    var id = soundList[index];
    var audioElement = document.getElementById(id);
    audioElement.play();
}

function playRandomSound(){

    //An array to house all of the URLs of your sounds
    var sounds = [ "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav",
                   "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav",
                   "https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.wav"];
    
    //This line will select a random sound to play out of your provided URLS
    var soundFile = sounds[Math.floor(Math.random()*sounds.length)];
    
    //Find the player element that you created and generate an embed file to play the sound within it
    document.getElementById("player").innerHTML="<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}