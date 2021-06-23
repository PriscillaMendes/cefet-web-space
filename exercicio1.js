let calF = document.querySelector('#calcular');

calF.addEventListener('click', function(){
    let G = document.querySelector('#constante').getAttribute('value');
    let m1 = document.querySelector('#massa1').value;
    let m2 = document.querySelector('#massa2').value;
    let d = document.querySelector('#distancia').value;

    let F = 0;

    if(d > 0 && d != null){
        F = (G*m1*m2)/(d**2);
    } 

    let resul = document.querySelector('#resultado');
    resul.setAttribute('value', F);
});