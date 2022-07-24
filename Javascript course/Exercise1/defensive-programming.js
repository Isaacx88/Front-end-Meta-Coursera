//assume que tudo vai dar errado no input dos dados (tipo, tamanho...)

function letterFinder(word, match) {
    for(i = 0; i < word.length; i++) {
        if(word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}


/*
Regras do exercício:
- The length of the word parameter cannot be less than 2.
- The length of the match parameter must be 1.
- The type of both the word and the match parameters must be string.
*/

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;

    if(condition1 == true && condition2 == true){
        for(i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.");
    }
}

letterFinder("cat", "c");