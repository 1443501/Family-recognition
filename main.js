Webcam.set({
    width: 350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');
 
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="+data_uri+">';
        
    })

}

classifier=ml5.immageClassifier('https://teachablemachine.withgoogle.com/models/IQo0N-kvK/model.json',model_loaded);
function model_loaded(){
    console.log("model is loaded");
}

function check(){
    img=document.getElementById("captured_image").innerHTML;
    classifier.classify(img,get_snapshot);

}

function get_snapshot(error,results){
if (error){
    console.error(error);
}
else{
    document.getElementById("family_member")
}
}