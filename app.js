console.log('Iniciando calculadora...')

const argv = require("yargs").argv,
command = argv._[0]
console.log(`o comando eh "${command}" \n`);

switch (command) {
    case 'soma' || 'mais':
        console.log(`resultado: ${argv.a} + ${argv.b} = `,argv.a+argv.b);
        break
    case 'subtrai' || 'menos':
        console.log(`resultado: ${argv.a} - ${argv.b} = `,argv.a-argv.b);
        break
    case 'multiplica' || 'produto':
        console.log(`resultado: ${argv.a} * ${argv.b} = `,argv.a*argv.b);
        break
    case 'divide' || 'quociente':
        console.log(`resultado: ${argv.a} / ${argv.b} = `,argv.a/argv.b);
        break
    case 'ajuda' || 'h':
        console.log(`
        COMANDOS:
        selecione uma das operacoes abaixo e a seguir coloque "-a n1 -b n2", sendo n1 e n2 numeros de sua escolha
        para somar tente: 'soma' ou 'mais'
        para subtrair tente: 'subtrai' ou 'menos'
        para multiplicar tente: 'multiplica' ou 'produto'
        para dividir tente: 'divide' ou 'quociente'
        `);
    default:
        console.log(`comando nao encontrado :( \n tente digitar "ajuda"`);
}