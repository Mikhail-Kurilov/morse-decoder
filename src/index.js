const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arr = expr.split('');
    let result = '';
    let symbol = '';
    for (let i = 0; i < arr.length; i++) {
        if ((i + 1) % 10 == 0) {
            if (arr[i-1] === '1' && arr[i] === '0') {
                symbol += '.';
            }
            if (arr[i-1] === '1' && arr[i] === '1') {
                symbol += '-';
            }            
            result += symbol ? MORSE_TABLE[symbol] : ' ';
            symbol = '';
        } else {
            if ((i+1) % 2 == 0) {
                if (arr[i-1] === '1' && arr[i] === '0') {
                    symbol += '.';
                }
                if (arr[i-1] === '1' && arr[i] === '1') {
                    symbol += '-';
                }
            }
        }
    }
    return result;
}

module.exports = {
    decode
}