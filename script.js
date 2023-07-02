let container = document.querySelector('.container');
let btn = document.querySelector('.start_btn');
let scoreContainer = document.querySelector('.score');
let timeContainer = document.querySelector('.time');

btn.onclick = function () {
    let score = 0;
    let time = 15;
    container.innerHTML = "";

    let interval = setInterval(function showTarget(){
        // création de la cible
        let target = document.createElement('img');
        target.id="target";
        target.src="monster.png"
        container.appendChild(target);
        target.style.top = Math.random() * (400 - target.offsetHeight) + 'px';
        target.style.left = Math.random() * (500 - target.offsetWidth) + 'px';

        //faire disparaitre la cible
        setTimeout(function(){
            target.remove();
        }, 1500)

        // lorsque l'on clique sur le target
        target.onclick = function(){
            score +=1;
            target.style.display = 'none';
        }
        time-=1;

        // afficher les infos
        scoreContainer.innerHTML = `Score : ${score} pts`
        timeContainer.innerHTML = `Temps : ${time}s`

        // fin du jeu quand le temps est fini
        if(time == 0){
            clearInterval(interval);
            container.innerHTML = 'Le jeu est terminé'
        }


    }, 1000);


}