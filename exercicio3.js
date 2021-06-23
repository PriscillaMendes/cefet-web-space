let buttons = document.querySelectorAll(".botao-expandir-retrair")

buttons.forEach(element => {
    element.addEventListener('click', function(){
        let pai = element.parentNode;
        pai.classList.toggle('expandido')
    });
    console.log(element);
});
