let perguntas = [
{
    titulo: 'Como meu irmão chama?',
    alternativas: ['Thulio', 'Guilherme', 'Pedro', 'Lucas'],
    correta: 1
},

{
    titulo: 'Qual o nome dos meus pais?',
    alternativas: ['Silvana e Hector', 'Silvana e Heitor', 'Silvia e Edgar', 'Silvia e Hector'],
    correta: 0
},

{
    titulo: 'Top 3 da minha lista de comidas prediletas',
    alternativas: ['Parmegiana', 'Japa', 'Strogonoff', 'Pizza'],
    correta: 2
},

{
    titulo: 'Quantos animais de estimação eu tenho?',
    alternativas: ['2', '4', '5', '6'],
    correta: 2
},

{
    titulo: 'Como é meu apelido no time de hand?',
    alternativas: ['Pantera', 'Paredão', 'Lobo', 'Morsa'],
    correta: 3
},

{
    titulo: 'Na época do SISU eu estava com dúvida entre ECO qual dos cursos abaixo?',
    alternativas: ['ELT', 'ECA', 'CCO', 'MED'],
    correta: 1
},

{
    titulo: 'Quantos membros o BOLT tem?',
    alternativas: ['4', '5', '6', '7'],
    correta: 2
},

{
    titulo: 'Qual meu time do coração?',
    alternativas: ['Atlético MG', 'Corinthian', 'Palmeiras', 'Flamengo'],
    correta: 2
},

{
    titulo: 'O que já tirei do meu corpo?',
    alternativas: ['Siso', 'Apêndice', 'Amígdalas', 'Pênis'],
    correta: 1
},

{
    titulo: 'Qual problema eu não tenho?',
    alternativas: ['Sinusite', 'Disfunção da ATM', 'Alopécia Androgenética', 'Gastrite'],
    correta: 3
},

{
    titulo: 'Pronta para a pergunta mais importante?!',
    alternativas: ['Sim', 'Não', 'Talvez', '-'],
    correta: 0
},


]

let app = {
    start: function(){
        this.Atualpos = 0;
        this.Totalpontos = 0;
        this.Erros = 0;

        let alts = document.querySelectorAll('.alternativa');
        alts.forEach((element, index)=>{
            element.addEventListener('click', ()=>{
                this.checaResposta(index);
            })
        })
        this.atualizaPontos();
        app.mostraquestao(perguntas[this.Atualpos]);
    },

    mostraquestao: function(q){
        this.qatual = q;
        //mostrando titulo
        let titleDiv = document.getElementById('titulo');
        titleDiv.textContent = q.titulo;
        //mostrando alternativas
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach(function(element, index){
            element.textContent = q.alternativas[index];
        })
    },

    checaResposta: function(user){
        if(this.qatual.correta == user){
            console.log("Correto");
            this.Totalpontos++;
        }else{
            console.log("Errado");
            this.Erros++;
        }
        this.atualizaPontos();
        this.Proximaperg();
        this.mostraquestao(perguntas[this.Atualpos]);
    },

    Proximaperg: function(){
        this.Atualpos++;
        if(this.Atualpos == perguntas.length){
            if(this.Totalpontos == 11){
                location.href = "/duwdwm/duwdwm.html";
            }else{
                alert(`Tente novamente! Você errou um total de: ${this.Erros}`);
                location.href = "/quizz/quizz.html";
            }
        }
    },

    atualizaPontos: function(){
        let scoreDiv = document.getElementById('pontos');
        if(this.Totalpontos >= 9)
        scoreDiv.textContent = `Sua pontuação é: ${this.Totalpontos}`;
    }

}
app.start();