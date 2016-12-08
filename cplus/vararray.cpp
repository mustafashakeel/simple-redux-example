#include <iostream>

using namespace std;
int main()
{
    float nums[3];
    nums[0] = 1.5;
    nums[1] = 4.3;
    nums[2] = 1978;
    nums[3] = 1980;
    char names[3] = {'T','O','M'};
    float mynum[3] = {3.4,4.5,5.6};

    cout << "array" << nums[0] <<endl;
    cout << "Individual Array" << nums[3] <<endl;
    cout << "names char : " << names[1] << endl;
    cout << "mynum " << mynum[2] << endl;
    return 0;
}
