function starClasification ()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/UohrKuXnh/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);

        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="Escucho -" + results[0].label;
        document.getElementById("result_confidence").innerHTML="Presición -" + (results[0].confidence*100).toFixed(2) + " %";
        document.getElementById("result_label").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";

        img= document.getElementById('Freddy')
        img2=document.getElementById('Bonnie')
        img3=document.getElementById('Chica')
        img4=document.getElementById('Foxy')

        if(results[0].label=="Feddy"){
            img.src='Feddy.png';
            img2.src= 'Bonnie.png';
            img3.src= 'Chica.png';
            img4.src= 'Foxy.png';
        }else if(results[0].label=="Bonnifacio"){
            img.src='Freddy.png';
            img2.src= 'Bonnifacio.png';
            img3.src= 'Chica.png';
            img4.src= 'Foxy.png';
        }else if(results[0].label=="Chique"){
            img.src='Freddy.png';
            img2.src= 'Bonnie.png';
            img3.src= 'Chique.png';
            img4.src= 'Foxy.png';
        }else if(results[0].label=="Foñi"){
            img.src='Freddy.png';
            img2.src= 'Bonnie.png';
            img3.src= 'Chica.png';
            img4.src= 'Foñi.png';
        }else{
            img.src='Freddy.png';
            img2.src= 'Bonnie.png';
            img3.src= 'Chica.png';
            img4.src= 'Foxy.png';
        }


    }
    

}