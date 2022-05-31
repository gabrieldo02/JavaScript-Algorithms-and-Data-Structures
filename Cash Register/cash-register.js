function checkCashRegister(price, cash, cid) {
  let left = cash-price;
  var sum=0;

  for(var i=0; i<cid.length; i++)
  {
      sum += cid[i][1];
  }

  if(sum<left)
  {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  if(sum==left)
  {
    return {status: "CLOSED", change: cid};
  }

  var temp=left;

  var change = [];
  
  if(100<=temp) // 100
  {
    var x = Math.floor(temp/100);
    var y = cid[8][1]/100;
    if(x>y)
    {
      x=y;
    }
    change.push(["ONE HUNDRED",100*x]);
    temp=temp-(100*x);
  }
  
  if(20<=temp) // 20
  {
    var x = Math.floor(temp/20);
    var y = cid[7][1]/20;
    if(x>y)
    {
      x=y;
    }
    change.push(["TWENTY",20*x]);
    temp=temp-(20*x);
  }

  if(10<=temp) // 10
  {
    var x = Math.floor(temp/10);
    var y = cid[6][1]/10;
    if(x>y)
    {
      x=y;
    }
    change.push(["TEN",10*x]);
    temp=temp-(10*x);
  }

  if(5<=temp) // 5
  {
    var x = Math.floor(temp/5);
    var y = cid[5][1]/5;
    if(x>y)
    {
      x=y;
    }
    change.push(["FIVE",5*x]);
    temp=temp-(5*x);
  }

  if(1<=temp) // 1
  {
    var x = Math.floor(temp/1);
    var y = cid[4][1]/1;
    if(x>y)
    {
      x=y;
    }
    change.push(["ONE",1*x]);
    temp=temp-(1*x);
  }

  if(.25<=temp) // .25
  {
    var x = Math.floor(temp/.25);
    var y = cid[3][1]/.25;
    if(x>y)
    {
      x=y;
    }
    change.push(["QUARTER",.25*x]);
    temp=temp-(.25*x);
  }

  if(.1<=temp) // .1
  {
    var x = Math.floor(temp/.1);
    var y = cid[2][1]/.1;
    if(x>y)
    {
      x=y;
    }
    change.push(["DIME",.1*x]);
    temp=temp-(.1*x);
  }

  if(.05<=temp) // .05
  {
    var x = Math.floor(temp/.05);
    var y = cid[1][1]/.05;
    if(x>y)
    {
      x=y;
    }
    change.push(["NICKEL",.05*x]);
    temp=temp-(.05*x);
  }

  if(.01<=temp) // .01
  {
    var x = Math.round(temp/.01);
    var y = cid[0][1]/.01;
    if(x>y)
    {
      x=y;
    }
    change.push(["PENNY",.01*x]);
    temp=temp-(.01*x);
  }

  // console.log(change);

  var change_sum=0;
  for(var i=0; i<change.length; i++)
  {
      change_sum += change[i][1];
  }

  // console.log(change_sum);
  // console.log(left);
  
  if(change_sum.toFixed(2)!=left)
  {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  
  return {status: "OPEN", change};
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
