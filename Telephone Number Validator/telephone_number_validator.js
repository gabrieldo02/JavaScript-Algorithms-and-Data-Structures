function telephoneCheck(str) {
  if(str.length!=11 && str.length!=10 && str.length!=14 && str.length!=13 && str.length!=12 && str.length!=16)
  {
    return false;
  }

  if(str.length==16 || str.length==14)
  {
    if(str[0]!=1)
    {
      return false;
    }
  }

  var flag1=0;
  var flag2=0;
  var flag3=0;
  var index;

  for(var i=0; i<str.length; i++)
  {
    if(str[i]=="(")
    {
      if(str[i+4]!=")")
      {
        return false;
      }
      flag1=1;
    }
    if(str[i]==")")
    {
      index=i;
      flag2=1;
    }
    if(str[i]=="-")
    {
      flag3=1;
    }

    if(str[i]!='(' && str[i]!=')' && str[i]!=' ' && str[i]!='-' && str[i]!='0' && str[i]!='1' && str[i]!='2' && str[i]!='3' && str[i]!='4' && str[i]!='5' && str[i]!='6' && str[i]!='7' && str[i]!='8' && str[i]!='9')
    {
      return false;
    }
  }

  if(flag1!=flag2)
  {
    return false;
  }

  if(flag1==0 && flag2==0 && flag3==0 && str.length==11)
  {
    if(str[0]!=1)
    {
      return false;
    }
  }

  if(flag1==1 && flag2==1 && flag3==0 && str.length==13)
  {
    if(str[0]!=1)
    {
      return false;
    }
  }

  return true;
}

telephoneCheck("1 555-555-5555");
