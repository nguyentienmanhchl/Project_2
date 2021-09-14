//#include<stdio.h>
#include<cstring>
#include<iostream>
#include <csignal>
#include <unistd.h>
#include <stdlib.h>

using namespace std;

void signalHandler(int t){
	cout<<"...";
	
	
	
	
}
int main()
{
	
	char *s="tin hoc",t[25];
	strcpy(t,"tin hoc");//ko dung strcpy cho s dc
	printf("%s \n",t);
	
	printf("%d\n",strcmp(s,t));//so sanh s,t, ham tra ve 0 neu s=t
	printf( "t = ");
	gets(t);     //ko viet gets(s) dc         
	s="toan hoc";//ko viet t="toan hoc" dc  
	t[0]='a';    //ko viet s[0]='a'  dc
	
	printf("s=%s,t=%s",s,t);
	
	int d=100,e=101;
	int *p=&d;
	// Phai khoi tao p tro toi dia chi nao trc roi ms dc gan gia tri *p=...
	
	printf("\n%d",*p);
	p=&e;
	printf("\n%d",*p);
	*p=123;
	printf("\n%d,%d",*p,e);
	printf("\n%d,%d",p,p+1);
	
	int arr[]={1,3,4};
	p=arr;
	printf("\n%d,%d,%d,%d",p,&arr[1],p+1,*(p+1));
	
	float arr1[]={(float)8/3,1.0,2.3,2};
	printf("\n%d",arr1);
	float *q;
	q=arr1;//ko gan p=arr1 dc
	*(q+1)=5;
	printf("\n%d,%f,%.1f\n",q+1,*q,arr1[1]);

	signal(SIGINT, signalHandler);  
	for(int i=1;i<=20;i++)
	{
	    cout<< i <<"  ";
	    
		sleep(1);
		if(i%10==0) cout<< endl;
	
	}
	return 0;
	
   

	
	
}
