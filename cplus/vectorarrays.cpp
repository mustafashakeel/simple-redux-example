#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector <int> myVector(3, 100);

    cout << " Vector Size "<< myVector.size() << endl;
    cout << " Vector Final Element " << myVector.back() << endl;
    cout << " Vector At " << myVector.at(0) << endl;
    myVector.push_back(500);
    cout << " Add to VEctors " << myVector.size() << endl;

    return 0;
}
