/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Paulistão'

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = [
    'Corinthians',
    'Santos',
    'São Paulo',
    'Ponte Preta',
    'Palmeiras'
]

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(num){
    var position = num - 1;
    switch(num){
        case 1:
            return 'O time que esta em '+ num + 'º lugar é o ' + teams[position] +'.';
        case 2:
            return 'O time que esta em '+ num + 'º lugar é o ' + teams[position] +'.';
        case 3:
            return 'O time que esta em '+ num + 'º lugar é o ' + teams[position] +'.';
        case 4:
            return 'O time que esta em '+ num + 'º lugar é o ' + teams[position] +'.';
        case 5:
            return 'O time que esta em '+ num + 'º lugar é o ' + teams[position] +'.';
        default:
            return 'Não temos a informação do time que esta nessa posição.'
    }

}


/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(1));// O time que esta em 1º lugar é o Corinthians.
console.log(showTeamPosition(5));// O time que esta em 5º lugar é o Palmeiras.
console.log(showTeamPosition(2));// O time que esta em 2º lugar é o Santos.
console.log(showTeamPosition(7));// Não temos a informação do time que esta nessa posição.

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var x = 20
while(x <= 30){
    console.log(x);
    x++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(color){
    var colours = {
        verde: '#00ff00', 
        vermelho: '#ff0000',
        amarelo: '#ffff00',
        azul: '#0000ff'
    }
    switch(color){
        case 'verde':
            return 'O hexadecimal para a cor ' + color + ' é ' + colours.verde + '.';
        case 'vermelho':
            return 'O hexadecimal para a cor ' + color + ' é ' + colours.vermelho + '.';
        case 'amarelo':
            return 'O hexadecimal para a cor ' + color + ' é ' + colours.amarelo + '.';
        case 'azul':
            return 'O hexadecimal para a cor ' + color + ' é ' + colours.azul + '.';
        default:
            return 'Não temos o equivalente hexadecimal para ' + color + '.';
    }

}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('roxo'));
console.log(convertToHex('verde'));
console.log(convertToHex('vermelho'));
console.log(convertToHex('cinza'));
console.log(convertToHex('preto'));
console.log(convertToHex('azul'));
console.log(convertToHex('branco'));
console.log(convertToHex('amarelo'));
