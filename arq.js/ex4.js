function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [] 

    function recebeEventoForm(evento) {

        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);
        
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();




//AQUI SALVO COMENTÁRIOS E EXEMPLOS, MAS O MAIS IMPORTANTE É O CÓDIGO ACIMA

//array sempre utiliza "[colchetes]", para objetos utilizamos "{chaves}""

// console.log(nome, sobrenome, peso, altura);
        //para armazenar o valor do input utilize nome.value (o '.value' que faz com que armazene valor)

        
    // let contador = 1;
   // console.log(`Form não foi enviado ${contador}`);
        // contador++;

// TAMBÉM PODE SER USADO ASSIM, CONTUDO O OUTRO MODO É MAIS MODERNO

    // form.onsubmit = function (evento){
    //     evento.preventDefault(); //evita que a página seja atualizada após clicar no botão enviar;
    //     alert('formulário enviado')
    //     console.log('form enviado')
    // };
