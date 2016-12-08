#include <fstream>
#include <string>
#include <iostream>

using namespace std;

int main(){

    string poem = "Twinke Twinke Little is star ";
    poem.append("\n\t How I Wonder what you are ");

    ofstream writer("poem.txt");

    if(! writer){
        cout << "error opening the file";
        return 1;
    }

    writer << poem << endl;
    writer.close();
    cout << "Successfully written the poem to the file ";

    return 0;

}

