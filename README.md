# ***💻calculadora por terminal💻***

## **♨️módulos♨️**

yargs:
>npm i yargs

---

## **🤔Como usar?🤔**

no terminal:
>node app.js comando -a valor1 -b valor2
>
>(app.js = nome do arquivo)
>
>_se quiser saber mais sobre os comandos, tente digitar_
>'node app.js ajuda'

---

## **✏️Como altero?✏️**

```javascript
    const command = argvs._[0] //pega o primeiro valor depois de "node file.js"
    console.log(command, argvs.something)
```

>node file.js Hello World -something esse eh o valor de "something"

no terminal ele deve retornar:

```bash
teste esse eh o valor de "something"`
```

## ***➖switch case➖***

*switch* recebe uma condição que se for idêntica a condição do *case* executa o conteudo do case, se não cai no *default*

exemplo:

```javascript
switch(params) {
    case true:
        console.log('foi!')
        break
    default:
        console.log('nao foi :c')
        break
}
```

se o *params* for verdadeiro, ele vai retornar 'foi' no console/terminal
