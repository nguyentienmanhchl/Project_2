#include<stdio.h>
#include<cmath>
#include<iostream>
using namespace std;
int revBit(int nbit, int mask)
{
    int i, j;
    for(i = 0, j = nbit - 1; i <= j; ++i, --j)
    {
        if( (mask >> i & 1) != (mask >> j & 1) )
        {
            mask ^= 1<<i;
            mask ^= 1<<j;
        }
    }
    return mask;
}
int main(){
   /* int n;
    double x;
    double s1=1,s2=1,s3=1;
    double x1=1,x2=1,x3=1;
    do{
        scanf("%d",&n);

    }while (n<=0);
    scanf("%lf",&x);

    for(int i=1;i<=n;i++){

        x1=x1*x;
        s1=s1+x1;



        x2=x2*-x;
        s2=s2+x2;


        x3=x3*x/i;
        s3=s3+x3;

    }
    printf("%lf\n%lf\n%lf",s1,s2,s3);*/
    cout<<revBit(3,6);
}
