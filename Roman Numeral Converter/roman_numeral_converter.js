function convertToRoman(num) {
  var string="";

  while(num!=0)
  {
    if(num>=1000)
    {
      var mod = Math.floor(num/1000);
      for(var i=0; i<mod; i++)
      {
        var string2 = string.concat("M");
        string = string2;
      }
      num = num-(1000*mod);
    }
    else if(num>=900)
    {
      var mod = Math.floor(num/900);
      for(var i=0; i<mod; i++)
      {
        var string2 = string.concat("CM");
        string = string2;
      }
      num = num-(900*mod);
    } 
    else if(num>=500)
    {
      var mod = Math.floor(num/500);
      for(var i=0; i<mod; i++)
      {
        var string2 = string.concat("D");
        string = string2;
      }
      num = num-(500*mod);
    } 
    else if(num>=400)
    {
      var mod = Math.floor(num/400);
      for(var i=0; i<mod; i++)
      {
        var string2 = string.concat("CD");
        string = string2;
      }
      num = num-(400*mod);
    } 
    else if(num>=100)
    {
      var mod = Math.floor(num/100);
      for(var i=0; i<mod; i++)
      {
        var string2 = string.concat("C");
        string = string2;
      }
      num = num-(100*mod);
    }
    else if(num>=90)
    {
      var mod = Math.floor(num/90);
      for(var i=0; i<mod; i++)
      {
        var string2 = string.concat("XC");
        string = string2;
      }
      num = num-(90*mod);
    }
    else if(num>=50)
    {
      var mod = Math.floor(num/50);
      for(var i=0; i<mod; i++)
      {
        var string2 = string.concat("L");
        string = string2;
      }
      num = num-(50*mod);
    }
    else if(num>=40)
    {
      var mod = Math.floor(num/40);
      for(var i=0; i<mod; i++)
      {
        var string2 = string.concat("XL");
        string = string2;
      }
      num = num-(40*mod);
    }
    else if(num>=10)
    {
      var mod = Math.floor(num/10);
      for(var i=0; i<mod; i++)
      {
        var string2 = string.concat("X");
        string = string2;
      }
      num = num-(10*mod);
    } 
    else if(num>=9)
    {
      var mod = Math.floor(num/9);
      for(var i=0; i<mod; i++)
      {
        var string2 = string.concat("IX");
        string = string2;
      }
      num = num-(9*mod);
    }
    else if(num>=5)
    {
      var mod = Math.floor(num/5);
      for(var i=0; i<mod; i++)
      {
        var string2 = string.concat("V");
        string = string2;
      }
      num = num-(5*mod);
    }
    else if(num>=4)
    {
      var mod = Math.floor(num/4);
      for(var i=0; i<mod; i++)
      {
        var string2 = string.concat("IV");
        string = string2;
      }
      num = num-(4*mod);
    }
    else
    {
      for(var i=0; i<num; i++)
      {
        var string2 = string.concat("I");
        string = string2;
      }
      break;
    }
  }

  console.log(string);

 return string;

}

convertToRoman(97);
