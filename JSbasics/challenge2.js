var bills=[124,48,268],bill=[],bill2=[];
function calculator()
{
    for(i=0;i<3;i++)
    {
if(bills[i]<50)
{
    bill2[i]=0.2*bills[i];
    bill[i]=0.2*bills[i]+bills[i];
}
else if(bills[i]>=50 && bills[i]<=200)
{
    bill2[i]=0.15*bills[i];
    bill[i]=0.15*bills[i]+bills[i];
}
else if(bills[i]>=200)
{
    bill2[i]=0.10*bills[i];
    bill[i]=0.10*bills[i]+bills[i];
}
}
console.log(bill2);
console.log(bill);
}
calculator()