#include <iostream>
using namespace std;

int addOne(int start){

	int newNumber;
	newNumber = start + 100;

	return newNumber;
}

string myName(string first, string middle, string last)
{
	return " My name is :  "+ first+ "  "+middle+ "  "+last;

}


int main(){

	int testNumber = 15;
	int result;

	result = addOne(testNumber);

	cout << result << endl;

	string names;

	names = myName("Mustafa","Shakeel ", "Qureshi");
	cout << names << endl;

	return 0;


}