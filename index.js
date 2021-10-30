const readline = require('readline')
let number = randomNumber()
let result
const path = require('path')
const interface = readline.createInterface(process.stdin)
const fs = require('fs');

console.log(number)
console.log('Введите название файла: ')

interface.on('line', (data) => {
    if(typeof(file) === 'undefined') {        
        file = data
        const filepath = path.join(__dirname, file)
        console.log(filepath)
        fs.open(file, 'w', (err) => {
            if(err) throw err
            console.log('Файл создан')
            console.log('Вводите числа 1 или 2: ')
        })
    } else {
        const variable = parseInt(data)
        if(number !== variable) {
            result = 'Не угадал'
        } else {
            result = 'Угадал'
        }
        number = randomNumber()

        fs.appendFileSync(file, `${result}\r\n`, (err) => {
            if(err) throw err
            console.log(result);
        });
    }
});

function randomNumber() {
    return Math.ceil(Math.random()*2)
}
