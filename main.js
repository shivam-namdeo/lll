


Webcam.set({

    width:350,

    height:300,

    image_format:'png',

    png_quality:90

});

camera= document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()

{
    Webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML= '<img id="ci" src="'+data_uri+'">';


    });


}

console.log('ml5 version',ml5.version);

classifier =ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lo3ch8jS6/model.json',modelloded);

function modelloded()
{
    console.log('Modelloded');

}


function speak()

{
    var shu=window.speechSynthesis;

    s1="the first prediction is"+p_1;

    s2="the second prediction is"+p_2;

    var utterthis=new SpeechSynthesisUtterance(s1+s2);

    shu.speak(utterthis);
}

function check ()

{

    img=document.getElementById("ci");

    classifier.classify(img,gotresult);
    

}



function gotresult (error,results)

{


   
    if(error)

    {

        console.log(error);
    }

    else
    {

        console.log(results);

        document.getElementById("result_emotion_name").innerHTML=results[0].label;


   
        p_1= results[0].label;

       

        speak();

        if(results[0].label=="amazing")

        {

            document.getElementById("update_emoji").innerHTML="&#128076";

        }


        if(results[0].label=="best")

        {

            document.getElementById("update_emoji").innerHTML="&#128076";

        }


        if(results[0].label=="victory")

        {

            document.getElementById("update_emoji").innerHTML="&#9996";

        }



        

    }
}


