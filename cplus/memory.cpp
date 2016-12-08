
#include <iostream>
#include <string>

using namespace std;

int main()
{
    int num = 10;
    float details = 3.323;
    char alph = 'T';
    string name = "Mustafa ";

    cout <<"Numbers Address" << &num <<endl;
    cout << "Float " << &details << endl;
    cout << "Char : "<< &alph << endl;
    cout << " String aname :" << & name<<endl;
    return 0;

}
