#include <iostream>

using namespace std;

class Rect 
{
	int width, height;

public:
	void set_value(int, int);

	int area(){
		return width * height ;

	}


};

void Rect::set_value(int x, int y){
	width = x;
	height = y;

}

int main(){

	Rect box1;
	box1.set_value(34,54);
	int area1 = box1.area();

	cout << "The area is "<< area1;

	return 0;

}

// classes example
// #include <iostream>
// using namespace std;

// class Rectangle {
//     int width, height;
//   public:
//     void set_values (int,int);
//     int area() {return width*height;}
// };

// void Rectangle::set_values (int x, int y) {
//   width = x;
//   height = y;
// }

// int main () {
//   Rectangle rect;
//   rect.set_values (3,4);
//   cout << "area: " << rect.area();
//   return 0;
// }