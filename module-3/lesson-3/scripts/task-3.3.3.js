function calculator( number1, number2, operator ) {

    switch( operator ){
        case '+' :
            console.log( ${number1 + number2} );
            break;
            default;
            console.log( 'error' );
            break;
    }

    }

    calculator( 5, 5, '+' );