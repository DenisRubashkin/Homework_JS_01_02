/* Задача 1 */
function usingPow() {
  var x = prompt('Введите целое число, которое нужно возвести в степень');
  
  while (isNaN(x) || x != Math.floor(x) || x == '') {
    x = prompt('"' + x + '" не является целочисленным значением! Введите целое число, которое нужно возвести в степень');  
  }
  
  var exp = prompt('Введите целое число - показатель степени');

  while (isNaN(exp) || exp != Math.floor(exp) || exp == '') {
    exp = prompt('"' + exp + '" не является целочисленным значением! Введите целое число, которое нужно возвести в степень');  
  }

  console.log( 'Результат выполнения: ', pow(x, exp) );
}

function pow(x, exp) {
    var result = x;

    if (exp > 0) {
      for (var i = exp; i > 1; i--) {
        result *= x;
      }
    } else  {
      result = 1;
     
      for (var i = exp; i < 0; i++) {
        result /= x;
      }
    }

    return result;
}

/* Задача 2 */
function userLogin() {
  var USERS_COUNT = 5;
  var usersList = [];

  for (var i = 1; i <= 5; i++) {
    usersList.push( prompt('Введите имя пользователя для занесения в базу') );
  }

  userName = prompt('Введите имя пользователя');

  if (userName) {
    for (var i = 0; i < usersList.length; i++) {
      if (usersList[i] === userName) {
        alert(userName + ', вы успешно вошли');
        return;
      }
    }
  }
  
  alert('Ошибка! показатель ' + userName + ' отсутствует в базе');

}