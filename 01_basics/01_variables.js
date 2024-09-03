const accountId = 534262  // When variable assign with const keyword it means that variable value can't be changed later.
let accountEmail = "gaurav@gmail.com"
var accountPassword = '&hfGAyev627'
accountCity = 'Varanasi'
let accountState;

// accountId = 826363

// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
    Prefer not to use var keyword for assigning variables
    because of it create issue with block scope, and functional block scope.
*/
