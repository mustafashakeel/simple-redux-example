#include<iostream>
#include<string>
using namespace std;

float km2mile (int km){


return  km * 0.621;

}


int main(){

float result = 0.0;

int km;
string measure;
cout << " please Enter something";
getline(cin, measure);
cout << "This is great  "<< measure << endl;

cout << "Enter Km to comvert it into Miles : ";
cin>> km;
result = km2mile(km);
cout <<result;
return 0;

}
