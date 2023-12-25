function getAnswer(){
    let quetions={
        "salut":"coucou",
        "comment va tu":"bien merci et vous ? :) ",
        "bien":" parfet alors notre amateur de lecture comment puisse je  vous aider?",
        "est ce que le comte de monte cristo est dispo":"oui bien sure avec ses 3 chapitres ,c est un roman tres célèbre de ALEXENDRE DUMAS",
        "est ce que je peut trouver des BD des zid ya bouzid":"nous sommes desoles, pas encore :(",
        "merci":"pas de quoi nous sommes toujours a votre disposition",
        "bye":"Okay! see you soon... :)",
    };
    let user=document.getElementById("questionBox").value;
    document.getElementById("answerBox").innerHTML=user ;
    if(user in quetions){
        document.getElementById("answerBox").innerHTML=quetions[user];
    }
    else{
        document.getElementById("answerBox").innerHTML="desole j ai pas d infos veulliez consulter des sites profesionneles";
    }

}  
