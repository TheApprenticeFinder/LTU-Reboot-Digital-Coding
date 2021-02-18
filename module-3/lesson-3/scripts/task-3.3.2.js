function drinkOrder( size, drink ) {

    let drinkLowerCase = drink.toLowerCase();
    
    switch( drink ) {
        case 'cola' : 
            console.log( 'You have ordered a ' + size + ' ' + drink );
            break;
        case 'lemonade' :
            console.log(  'You have ordered a ' + size + ' ' + drink );
            break;
        case 'orangeade' :
            console.log(  'You have ordered a ' + size + ' ' + drink );
            break;
        default:
            console.log('error');
            break;
    }

}


drinkOrder( 'small', 'cola');