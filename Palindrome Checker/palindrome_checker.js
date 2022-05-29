function palindrome(str) {
  var i=0;
  var j=str.length-1;
  var alphabet_upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var alphabet_lower="abcdefghijklmnopqrstuvwxyz";
  

  while(i<j)
  {
    var lower_index1=-1;
    var upper_index1=-1;
    var lower_index2=-1;
    var upper_index2=-1;
    var flag1=false;
    var flag2=false;
    var number_index1=-1;
    var number_index2=-1;

    for(var k=0; k<alphabet_upper.length;k++) 
    {
      if(flag1==false)
      {
        if(str[i]==alphabet_upper[k]) // check uppercase alphabet
        {
          upper_index1=k;
          flag1=true;
        }
        else if(str[i]==alphabet_lower[k])
        {
          lower_index1=k;
          flag1=true;
        }
      }

      if(flag2==false)
      {
        if(str[j]==alphabet_upper[k]) // check lowercase alphabet
        {
          upper_index2=k;
          flag2=true;
        }
        else if(str[j]==alphabet_lower[k])
        {
          lower_index2=k;
          flag2=true;
        }
      }
      
    }

    for(var k=0; k<=9; k++)
    {
      if(str[i]==k)
      {
        number_index1=k;
      }

      if(str[j]==k)
      {
        number_index2=k;
      }

    }
    
    if(flag1==false && flag2==false)
    {
      if(number_index1>=0 && number_index2==-1)
      {
        if(str[i]==" ")
        {
          break;
        }
        
        return false;
      }
      else if(number_index1==-1 && number_index2>=0)
      {
        if(str[j]==" ")
        {
          break;
        }

        return false;
      }
      else if(number_index1>=0 && number_index2>=0)
      {
        if(number_index1!=number_index2)
        {
          return false;
        }
      }

    }

    if(flag1==false)
    {
      i++;
      if(flag2==false)
      {
        j--;
      }
      continue;
    }

    if(flag2==false)
    {
      j--;
      continue;
    }

    if(lower_index1!=-1)
    {
      if(upper_index2!=-1)
      {
        if(alphabet_upper[lower_index1]!=alphabet_upper[upper_index2] && alphabet_lower[lower_index1]!=alphabet_lower[lower_index2])
        {
          return false;
        }
      }
      else if(lower_index2!=-1)
      {
        if(alphabet_upper[lower_index1]!=alphabet_upper[lower_index2] && alphabet_lower[lower_index1]!=alphabet_lower[lower_index2])
        {
          return false;
        }   
      }
      else
      {
        if(alphabet_upper[lower_index1]!=alphabet_upper[upper_index1] && alphabet_lower[lower_index1]!=alphabet_lower[upper_index1])
        {
          return false;
        }      
      }
    }

    if(lower_index2!=-1)
    {
        if(lower_index1!=-1)
        {
          if(alphabet_upper[lower_index1]!=alphabet_upper[lower_index2] && alphabet_lower[lower_index1]!=alphabet_lower[lower_index2])
          {
            return false;
          }
        }
    }
    if(upper_index1!=-1)
    {
      if(upper_index2!=-1)
      {
        if(alphabet_upper[upper_index1]!=alphabet_upper[upper_index2] && alphabet_lower[upper_index1]!=alphabet_lower[upper_index2])
        {
          return false;
        }
      }
      else if(lower_index2!=-1)
      {
        if(alphabet_upper[upper_index1]!=alphabet_upper[lower_index2] && alphabet_lower[upper_index1]!=alphabet_lower[lower_index2])
        {
          return false;
        }   
      }
      else
      {
        if(alphabet_upper[upper_index1]!=alphabet_upper[lower_index1] && alphabet_lower[upper_index1]!=alphabet_lower[lower_index1])
        {
          return false;
        }     
      }
    }

    // console.log(i);
    // console.log(j);
    
    i++;
    j--;
  }

  return true;
}

palindrome("My age is 0, 0 si ega ym.");
