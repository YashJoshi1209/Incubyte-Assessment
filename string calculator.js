const Calculator=(stringnumbers)=> {
    this.number = stringnumbers;
    if (this.number.includes('-')) {
      throw new Error('negative numbers not allowed');
    }
    numbers = this.number.replace(/(\r\n|\n|\r)/gm,",");
    if (numbers == '') {
      return 0;
    } else if(numbers.length === 1) { 
      return (parseInt(numbers));
    } else {
      res = numbers.split(',');
      var total = 0;
      var arrayLength = res.length;
        for (var i = 0; i < res.length; i++) {
          total = total + parseInt(res[i]);
        }
        return total;   
    }
  }
  console.log(Calculator("1\n-2"));