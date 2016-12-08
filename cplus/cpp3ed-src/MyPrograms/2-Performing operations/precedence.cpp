//=============================================
// C++ Programming in easy steps 3ed. [2:39]
//=============================================

#include <iostream>
using namespace std ;


int main()
{
	int num ;

	// multiply, add default precedence
	num = 1 + 4 * 3;
	cout << endl << "Default order:  " << num << endl ;

	// forced precedence
	num = ( 1 + 4 ) * 3 ;
	cout << "Forced order:  " << num << endl << endl ;

	// left to right default direction
	num = 7 - 4 + 2 ;
	cout<< "Default direction: " << num << endl ;

	// forced direction
	num = 7 - ( 4 + 2 ) ;
	cout << "Forced direction: " << num << endl ;

	return 0 ;
}

