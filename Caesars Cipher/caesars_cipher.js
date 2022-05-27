function rot13(str) {
  let temp="";
  let alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for(let i=0; i<str.length; i++)
  {
    var index="";
    var c="";
    var flag=0;

    for(let j=0; j<alphabet.length;j++)
    {
      if(str[i]==alphabet[j])
      {
        index=j;
        if(index<13)
        {
          c = alphabet[index+13];
        }
        else
        {
          c = alphabet[index+13-26];
        }
        flag=1;
        break;
      }
    }

    if(flag==0)
    {
      c = str[i];
    }

    let result = temp.concat(c);

    // console.log(result);
    temp=result;
  }

  return temp;

}

rot13("SERR PBQR PNZC");
