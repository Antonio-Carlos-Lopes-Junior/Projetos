// Function declaration
function declaration(nome) {
    console.log('Function declaration', nome);
}

declaration('Paulo');

// Function expression
const expression = function(nome){
    console.log('Function expression', nome);
}

expression('Paulo');

// Arrow function
const arrow = (nome) => {
    console.log('Arrow function', nome);
}

arrow('Paulo');