function sum35(num){
  var sum = 0;
  for(var i = 0 ; i < num ; i++){
    if(i % 3 === 0 || i % 5 === 0){
      sum += i;
    }
  }
  return sum;
}

function sum35(num, sum){
  sum = sum || 0;

  if(num < 3){
    return sum;
  }

  num = num-1;
  if(num % 3 === 0 || num % 5 === 0){
    sum += num;
  }
  return sum35(num, sum);
}
