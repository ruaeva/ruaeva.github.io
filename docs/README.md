# 课堂小记录

> 本文大部分内容总结于黑马 C++教程

## 第一个 C++项目

```c++
#include <iostream>
using namespace std;
int main() {
    /*
    main是每个程序的入口
    每个程序都必选要有这个函数
    而仅有一个
    */
    cout << "Hello World!" << endl;
    return 0;
}
```

> 在 C++程序中，‌`using namespace std‌`  的主要作用是简化标准库函数和对象的调用，避免重复书写`std::`前缀，但全局使用可能引发命名冲突。

### 核心作用与原理

`‌using namespace std`‌  是 C++中引入标准库命名空间的声明，其核心作用包括：

1. 简化代码编写 ‌：通过将`std`命名空间中的所有标识符引入当前作用域，省去重复输入`std::`前缀的步骤，例如可直接使用`cout`代替`std::cout`。

2. 命名空间隔离机制 ‌：C++标准库的所有内容被封装在 std 命名空间中，避免与用户自定义或其他第三方库的同名标识符发生全局冲突。‌‌

### 优缺点分析

**‌ 优点 ‌**

- ‌**提高编码效率 ‌：**减少代码冗余，适合快速原型开发和小型项目。‌‌‌‌
- **提升代码简洁性 ‌：**消除频繁的`std::`前缀，增强代码可读性（在简单场景中）。‌‌

‌**缺点与风险 ‌**

- **命名空间污染 ‌：**全局使用会导致`std`中所有标识符暴露，可能与自定义或第三方库的标识符冲突，例如`std::list`与自定义`list`类。

- **可维护性降低 ‌：**在大型项目中，代码阅读者难以区分标识符来源，增加调试和维护难。

- **未来兼容性问题 ‌：**C++标准库可能新增标识符，导致现有代码因重名而失效。

### 适用场景与最佳实践

**‌ 限制作用域 ‌：**

- 在函数或代码块内部局部使用，而非全局声明。例如：

```cpp
void func() { using namespace std; // 仅在函数内生效 cout << "Local scope"; }
```

- 避免在头文件中使用，防止命名污染扩散。

**‌ 选择性引入 ‌：**

- 显式指定特定标识符：`using std::cout;`，仅引入所需符号。

- 使用命名空间别名：`namespace st = std;`，通过`st::cout`调用。

**‌ 权衡使用场景 ‌：**

- 小型项目或教学示例可接受全局使用以简化代码。

- 大型项目建议严格遵循显式限定（`std::`）或局部引入规则。‌‌

## 标识符命名规则

**作用：** C++规定给标识符（bianliang、常量）命名时，有一套自己的规则

- 不能是关键字
- 只能由字母、数字、下划线组成
- 第一个字符必须为字母或下划线
- 区分大小写

> 命名时应当见名知意

## sizeof 关键字

**作用：** 利用 sizeof 关键字可以**统计数据类型所占类型大小**

**语法：** `sizeof(数据类型/变量名)`

**示例：**

```c++
#include <iostream>
using namespace std;
int main() {
    cout << "sizeof char = " << sizeof(char) << endl;
    cout << "sizeof short = " << sizeof(short) << endl;
    cout << "sizeof int = " << sizeof(int) << endl;
    cout << "sizeof long = " << sizeof(long) << endl;
    cout << "sizeof long long = " << sizeof(long long) << endl;
    cout << "sizeof float = " << sizeof(float) << endl;
    cout << "sizeof double = " << sizeof(double) << endl;
    return 0;
}
```

## 转义字符

**作用：** 用于表示一些不能显示出来的 ASCII 字符,转义字符是一种特殊的字符常量，由反斜杠（\）和另一个字符组成

**常见转义字符：**

| 转义字符 |   含义   |
| :------: | :------: |
|   `\n`   |   换行   |
|   `\t`   |   制表   |
|   `\\`   |  反斜线  |
|   `\"`   |  双引号  |
|   `\'`   |  单引号  |
|   `\a`   |   警报   |
|   `\b`   |   退格   |
|   `\r`   |   回车   |
|   `\f`   |   换页   |
|   `\v`   | 垂直制表 |
|  `\ddd`  |  八进制  |
|  `\xhh`  | 十六进制 |

**示例：**

```c++
#include <iostream>
using namespace std;
int main() {
    cout << "Hello\tWorld!" << endl;
    cout << "Hello\nWorld!" << endl;
    cout << "Hello\\World!" << endl;
```

## 数据的输入

**作用：** 用于从键盘获取数据

**关键字：** `cin`

**语法：** `cin >> 变量`

**示例：**

```c++
#include <iostream>
using namespace std;
int main() {
    int a;
    cout << "请输入一个整数" << endl;
    cin >> a;
    cout << "你输入的整数是" << a << endl;
    return 0;
}
```

## 逻辑运算符

**作用：** 用于连接多个条件表达式，实现逻辑运算

**分类：**

| 逻辑运算符 |  作用  |                            结果                            |
| :--------: | :----: | :--------------------------------------------------------: |
|    `&&`    | 逻辑与 |       如果 a 为假，则!a 为真; 如果 a 为真，则!a 为假       |
|    `II`    | 逻辑或 |          如果 a 和 b 都为真，则结果为真，否则为假          |
|    `!`     | 逻辑非 | 如果 a 和 b 有一个为真，则结果为真，二者都为假时，结果为假 |

## 数组

### 循环结构案例-水仙花数

**作用：** 输出所有的水仙花数，所谓水仙花数是指一个三位数，其各位数字立方和等于该数本身

**示例：**

```c++
#include <iostream>
using namespace std;
int main() {
    for (int i = 100; i < 1000; i++) {
        int a = i / 100;
        int b = i / 100 % 10;
        int c = i % 10;
        if (i == a * a * a + b * b * b + c * c * c) {

            cout << i << endl;}
    }
}
```

### 元素逆置

**作用：** 将数组中的元素逆置，例如原数组为 1,3,5,7,9，逆置后为 9,7,5,3,1

**示例：**

```c++
#include <iostream>
using namespace std;
int main() {
    int arr[5] = { 1,3,5,7,9 };
    int start = 0;

    int end = sizeof(arr) / sizeof(arr[0]) - 1;
    while (start < end) {
        int temp = arr[start];
        arr[start] = arr[end];

        arr[end] = temp;
        start++;
        end--;
    }
    for (int i = 0; i < sizeof(arr) / sizeof(arr[0]); i++) {
        cout << arr[i] << endl;
    }
    return 0;
}
```

### 冒泡排序

**作用：** 对数组进行排序

**步骤：**

1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
2. 对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
3. 针对所有的元素重复以上的步骤，除了最后一个。

**示例：**

```c++
#include <iostream>
using namespace std;
int main() {

    int arr[9] = { 4,2,8,0,5,7,1,3,6 };
    //总排序轮数为 元素个数减一
    for (int i = 0; i < 8; i++) {
        //内层循环对比 次数等于元素个数减当前轮数减一
        for (int j = 0; j < 8 - i; j++) {
            // 如果第一个数比第二个大，则交换两数
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[  j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    for (int i = 0; i < 9; i++) {
        cout << arr[i] << endl;
    }
    return 0;
}
```

## 函数

### 函数定义和调用

**定义：** 函数是对数据进行的操作的封装，函数定义时，需要给函数起一个合适的名字，方便调用。函数名要能反映函数的操作。

**作用：** 将一段重复使用的代码封装起来，减少重复代码，一个较大的程序，一般分为若干个模块，每个模块实现特定的功能。

> **注意：** 函数声明可以多次，函数定义只能有一次。

**语法：**

```c++
返回类型 函数名 (参数类型 参数名){

    函数体
    return 表达式;

}
```

**示例：**

```c++
#include <iostream>
using namespace std;
// 函数声明
int add(int a, int b){
    int sum = a + b;
    return sum;
}
};

int main() {
    int a = 10;
    int b = 20;
    int sum = add(a, b);
    cout << "sum = " << sum << endl;
    return 0;
}

```

### 函数的参数和返回值

**参数：** 实参和形参

- 实参：函数调用时，传入的参数
- 形参：函数定义时，声明的参数

**返回值：** 函数调用结束后，返回给调用方的一个值

- 返回值类型：函数定义时，声明的返回值类型
- 返回值：函数调用结束后，返回给调用方的一个值

> 值传递时，形参发生改变，并不会影响实参。

### 函数的才会常见样式

**无参无返**

```c++
void test01(){
    cout << "hello world" << endl;
}
```

**有参无返**

```c++
void test02(int a){
    cout << "a = " << a << endl;
}
```

**无参有返**

```c++
int test03() {
    cout << "this is test03"  << endl;
    return 1000;
}

int main() {
    int num = test03();
    cout << "num =" << num << endl;
}
```

**有参有返**

```c++
int test04(int a, int b){
    int sum = a + b;
    return sum;
}
```

### 函数的声明

**作用：** 告诉编译器函数名称及如何调用函数。函数的实际主体可以单独定义。

**函数的声明可以多次，但是函数的定义只能有一次。**

**示例：**

```c++
#include <iostream>
using namespace std;
// 函数声明
int add(int a, int b);
int main() {
    int a = 10;
    int b = 20;
    int sum = add(a, b);
    cout << "sum = " << sum << endl;
    return 0;
}

// 函数定义
int add(int a, int b) {
    int sum = a + b;
    return sum;
}
```

### 函数的分文件编写

**作用：** 将函数的声明和定义分离开来，分别编写到不同的文件中。

函数分文件编写一般有 4 步骤

1. 创建后缀名为`.h`的头文件
2. 创建后缀名为`.cpp`的源文件
3. 在头文件中写函数的声明
4. 在源文件中写函数的定义

**示例：**

```c++
// add.h
#pragma once
int add(int a, int b);
```

```c++
// add.cpp
#include "add.h"
#include <iostream>
using namespace std;
int add(int a, int b) {
    int sum = a + b;
    return sum;
}
```

```c++
// main.cpp
#include "add.h"
#include <iostream>
using namespace std;
int main() {
    int a = 10;
    int b = 20;
    int sum = add(a, b);
    cout << "sum = " << sum << endl;
    return 0;
}
```

### 函数提高

#### 函数默认参数

**函数默认参数：** 函数默认参数是在函数声明时给函数的形参赋值，调用函数时可以不传该参数的值，编译器会使用默认值。

**语法：** `返回值类型 函数名 (函数 = 默认值) {}`

**示例：**

```c++
void print(int a, int b = 10) {
    cout << "a = " << a << endl;
    cout << "b = " << b << endl;
}
int main() {
    print(1); //a = 1 b = 10
    print(1, 2); //a = 1 b = 2

    return 0;
}
```

> 注意：函数默认参数必须从右往左依次赋值，不能只给某个参数赋值。
> 如果某个位置有了默认参数，那么从这个位置往后，从左往右都要有默认值。

> 注意：函数声明和函数定义只能有一个有默认参数，声明有默认参数，定义没有默认参数。

### 函数占位参数

**函数占位参数：** 函数占位参数是在函数声明时给函数的形参占位，调用函数时必须传值。

**语法：** `返回值类型 函数名 (占位符) {}`

**示例：**

```c++
//占位参数可以有默认值
void print(int a, int) {
    cout << "a = " << a << endl;
}
int main() {
    print(1, 1); //a = 1

    return 0;
}
```

### 函数重载

**函数重载：** 函数重载是在同一个作用域内，函数名相同，参数列表不同（参数类型、参数个数、参数顺序）。

**示例：**

```c++
void print(int a) {
    cout << "a = " << a << endl;
}
void print(double a) {
    cout << "a = " << a << endl;
}
void print(int a, double b) {
    cout << "a = " << a << endl;
    cout << "b = " << b << endl;
}
int main() {

    print(1); //a = 1
    print(1.1); //a = 1.1
    print(1, 1.1); //a = 1 b = 1.1

    return 0;
}
```

#### 函数重载注意事项

**函数重载注意事项：**

- 尽量不设默认参数
- 函数重载的函数必须在同一个作用域内。
- 函数重载的函数名相同，参数列表不同（参数类型、参数个数、参数顺序）。
- 函数重载的函数返回值类型可以相同也可以不同，但是参数列表必须不同。
- 函数重载的函数不能通过返回值类型来判断。

### 虚函数

**虚函数：** 虚函数是在函数声明时，在函数前加上`virtual`关键字，表示该函数是虚函数。

**引入原因：**

1. 为了方便使用多态特性，我们常常需要在基类中定义虚拟函数。
2. 在很多情况下，基类本身生成对象是不合情理的。例如，动物作为一个基类可以派生出老虎、孔雀等子类，但动物本身生成对象明显不合常理。

#### 纯虚函数和抽象类

**纯虚函数：** 纯虚函数是在函数声明时，在函数前加上`virtual`关键字，并在函数后加上`=0`，表示该函数是纯虚函数。

**抽象类：** 抽象类是在类中包含纯虚函数的类，抽象类不能创建对象。

**示例：**

```c++
#include <iostream>
using namespace std;
class Animal {
public:
    virtual void speak() = 0;
};
class Cat : public Animal {
public:
    void speak() {
        cout << "猫在说话" << endl;
    };

};
int main() {
    Animal* animal = new Animal(); //错误，不能创建抽象类的对象
    Animal* cat = new Cat();
    cat->speak(); //猫在说话

    return 0;

}
```
#### 虚函数和纯虚函数的区别

首先：强调一个概念

定义一个函数为虚函数，不代表函数为不被实现的函数。

定义他为虚函数是为了允许用基类的指针来调用子类的这个函数。

定义一个函数为纯虚函数，才代表函数没有被实现。

定义纯虚函数是为了实现一个接口，起到一个规范的作用，规范继承这个类的程序员必须实现这个函数。

- 虚函数是在函数声明时，在函数前加上`virtual`关键字，表示该函数是虚函数。
- 纯虚函数是在函数声明时，在函数前加上`virtual`关键字，并在函数后加上`=0`，表示该函数是纯虚函数。
- 虚函数可以在子类中重写，也可以在子类中不重写。
- 纯虚函数必须在子类中重写，否则子类也是抽象类，不能创建对象。

```c++
class A
{
public:
    virtual void foo()
    {
        cout<<"A::foo() is called"<<endl;
    }
};
class B:public A
{
public:
    void foo()
    {
        cout<<"B::foo() is called"<<endl;
    }
};
int main(void)
{
    A *a = new B();
    a->foo();   // 在这里，a虽然是指向A的指针，但是被调用的函数(foo)却是B的!
    return 0;
```

这个例子是虚函数的一个典型应用，通过这个例子，也许你就对虚函数有了一些概念。它虚就虚在所谓"推迟联编"或者"动态联编"上，一个类函数的调用并不是在编译时刻被确定的，而是在运行时刻被确定的。由于编写代码的时候并不能确定被调用的是基类的函数还是哪个派生类的函数，所以被成为"虚"函数。

虚函数只能借助于指针或者引用来达到多态的效果。


### 内联函数

**内联函数：** 内联函数是在函数声明时，在函数前加上`inline`关键字，表示该函数是内联函数。

**作用：** 内联函数可以减少函数调用的开销，提高程序的执行效率。

**示例：**

```c++
#include <iostream>
using namespace std;
inline int add(int a, int b) { //内联函数
    int sum = a + b;
    return sum;
}
int main() {
    int a = 10;
    int b = 20;
    int sum = add(a, b);
    cout << "sum = " << sum << endl;
    return 0;
}
```
     

## 指针

### 指针的基本概念

**指针：** 指针是存储变量内存地址的变量。

**指针变量：** 用于存储地址的变量。

**指针变量和指针的区别：** 指针变量是变量，指针是变量中存储的值。

### 指针的定义和使用

**定义：** 指针变量定义时，需要在类型前加`*`，表示该变量是一个指针变量。

**示例：**

```c++
int a = 10;
int* p = &a;
```

> 指针前加`*`代表解引用，找到指针指向的内存。

> 指针在 32 位操作系统中占用 4 个字节，64 位操作系统中占用 8 个字节。

### 空指针和野指针

**空指针：** 指针变量指向内存地址为 0 的内存空间。

**野指针：** 指针指向非法的内存空间，指针变量指向的内存地址不可用（不可访问）。

**示例：**

```c++
int* p = NULL;
int* p = 0x1100;
```

### const 修饰指针

**const 修饰指针：** const 修饰指针时，分为两种情况，const 修饰指针变量，const 修饰指针指向的值。

**const 修饰指针变量：** const 修饰指针变量时，指针变量的值不能改变，即指针变量不能指向其他内存地址。

**const 修饰指针指向的值：** const 修饰指针指向的值时，指针指向的值不能改变，即指针指向的内存地址中的值不能改变。

> `const`既修饰指针有修饰常量。
> 技巧：看`const`前后的位置，`const`在`*`前，修饰指针指向的值；`const`在`*`后，修饰指针变量。

**示例：**

```c++
int a = 10;
int* const p = &a;
const int* p = &a;
```

### 指针的运算

**指针运算：** 指针可以进行加减运算，但是指针的加减运算只能加整数，不能加小数。

**示例：**

```c++
int a = 10;
int* p = &a;
cout << "p + 1 = " << p + 1 << endl;
cout << "p - 1 = " << p - 1 << endl;
```

### 指针和数组

**指针和数组：** 指针和数组可以相互转换，指针可以指向数组的首地址，也可以指向数组的元素。

**作用：** 利用指针访问数组元素。

**示例：**

```c++
int arr[5] = { 1,2,3,4,5 };
int* p = arr;// 指向数组的首地址

for (int i = 0; i < arr.length(); i++) {
   cout << "arr[" << i << "] = " << *p << endl;
   P++;
}

```

### 指针和函数

**指针和函数：** 指针可以作为函数的参数，也可以作为函数的返回值。

**示例：**

```c++
#include <iostream>
using namespace std;

int add(int &a, int &b) {
    int sum = *a + *b;
    return sum;
}

int main() {
    int a = 10;
    int b = 20;
    //地址传递
    int sum = add(&a, &b);
    cout << "a = " << &a << endl;
    cout << "b = " << &b << endl;
    cout << "sum = " << sum << endl;

    return 0;
}
```

> 如果不想修改实参，就用值传递，想修改实参，就用地址传递。

### 指针和结构体

**指针和结构体：** 指针可以指向结构体，也可以指向结构体的成员。

**示例：**

```c++
#include <iostream>
using namespace std;
struct Student {
    string name;
    int age;
    int score;
};
int main() {

    Student s = { "张三",18,100 };
    Student* p = &s;
    cout << "name = " << p->name << endl;
    cout << "age = " << p->age << endl;
    cout << "score = " << p->score << endl;
    return 0;
}
```

## 结构体

### 结构体的基本概念

**结构体：** 结构体是一种自定义的数据类型，可以包含多个不同类型的成员。

**定义：** 结构体定义时，需要在类型前加`struct`，表示该类型是一个结构体。

**示例：**

```c++
struct Student {
    string name;
    int age;
    int score;
};
```

### 结构体的使用

**结构体变量：** 结构体变量定义时，需要在类型前加`struct`，表示该变量是一个结构体变量。

**语法：**` struct 结构体名 { 结构体成员列表 };`

通过结构体创建变量的方式有三种：

- struct 结构体名 变量名
- struct 结构体名 变量名 = { 成员 1 值, 成员 2 值... }
- 定义结构体时，直接创建变量

**示例：**

```c++
struct Student {
    string name;
    int age;
    int score;
};

int main() {
    struct Student s = { "张三",18,100 }; //创建结构体变量时 struckt 关键字可以省略

    cout << "name = " << s.name << endl;
    cout << "age = " << s.age << endl;
    cout << "score = " << s.score << endl;
    return 0;
}
```

> 定义结构体时`struckt`关键字不可省略。
> 创建结构体变量时`struckt`关键字可以省略。
> 结构体中的成员可以是基本数据类型，也可以是自定义的数据类型。

### 结构体数组

**结构体数组：** 结构体数组是一种自定义的数据类型，可以包含多个不同类型的成员。

**定义：** 结构体数组定义时，需要在类型前加`struct`，表示该类型是一个结构体数组。

**示例：**

```c++
struct Student {
    string name;
    int age;
    int score;
};
int main() {
    Student arr[3] = { {"张三",18,100},{"李四",19,90},{"王五",20,80} };
    for (int i = 0; i < 3; i++) {
        cout << "name = " << arr[i].name << endl;
        cout << "age = " << arr[i].age << endl;
        cout << "score = " << arr[i].score << endl;
    }
    return 0;


}
```

### 结构体指针

**结构体指针：** 结构体指针是一种自定义的数据类型，可以包含多个不同类型的成员。

**定义：** 结构体指针定义时，需要在类型前加`struct`，表示该类型是一个结构体指针。

**示例：**

```c++
struct Student {
    string name;
    int age;
    int score;
};
int main() {
    Student s = { "张三",18,100 };
    Student* p = &s;
    cout << "name = " << p->name << endl;
    cout << "age = " << p->age << endl;
    cout << "score = " << p->score << endl;
    return 0;
}
```

> 结构体指针可以通过`->`操作符访问结构体成员。

### 结构体嵌套结构体

**结构体嵌套结构体：** 结构体中的成员可以是另一个结构体，结构体嵌套结构体是一种自定义的数据类型，可以包含多个不同类型的成员。

**定义：** 结构体嵌套结构体定义时，需要在类型前加`struct`，表示该类型是一个结构体嵌套结构体。

**示例：**

```c++
struct Student {
    string name;
    int age;
    int score;
};
struct Teacher {
    string name;
    int age;
    Student stu;
};
int main() {
    Teacher t = { "张三",18,{ "李四",19,100 } };
    cout << "name = " << t.name << endl;
    cout << "age = " << t.age << endl;
    cout << "name = " << t.stu.name << endl;
    cout << "age = " << t.stu.age << endl;
    cout << "score = " << t.stu.score << endl;
    return 0;
}
```

### 结构体做函数参数

**结构体做函数参数：** 结构体可以作为函数的参数，也可以作为函数的返回值。

**示例：**

```c++
struct Student {
    string name;
    int age;
    int score;
};
void printStudent(Student s) {
    cout << "name = " << s.name << endl;
    cout << "age = " << s.age << endl;
    cout << "score = " << s.score << endl;
}
int main() {
    Student s = { "张三",18,100 };
    printStudent(s);
    return 0;
}
```

### 结构体中 const 的使用

用来防止误操作

**结构体中 const 的使用：** 结构体中的成员可以是`const`修饰的，表示该成员的值不能被修改。

**示例：**

```c++
struct Student {
    string name;
    int age;
    int score;
    const int id;
};
int main() {
    Student s = { "张三",18,100,1 };
    s.id = 2; //错误，const修饰的成员不能被修改
    }

    return 0;
}
```

### 结构体中 static 的使用

**结构体中 static 的使用：** 结构体中的成员可以是`static`修饰的，表示该成员的值是共享的，所有结构体变量共享该成员的值。

**示例：**

```c++
struct Student {
    string name;
    int age;
    int score;
    static int count;
};
int Student::count = 0;
int main() {
    Student s1 = { "张三",18,100 };
    Student s2 = { "李四",19,90 };
    Student s3 = { "王五",20,80 };
    cout << "count = " << Student::count << endl;
    return 0;
}
```

## C++ 核心编程

本阶段主要针对 C++的面向对象编程进行深入学习，包括类和对象、继承、多态、模板、STL 等。

### 内存分区模型

---

C++程序在执行时，将内存分为四个区：栈区、堆区、全局/静态区、常量区。

- C++中在程序运行前分为全局区和代码区
- 代码区特点是共享和只读
- 全局/静态区是全局变量和静态变量存储区，程序结束后由系统释放
- 栈区由编译器自动分配释放，存放函数的参数值，局部变量等
- 堆区由程序员分配和释放，如果程序员不释放，程序结束时由操作系统回收

## 引用

**引用：** 引用是 C++中的一种数据类型，它可以用来创建一个变量的别名。

**定义：** 引用定义时，需要在类型前加`&`，表示该类型是一个引用。

**示例：**

```c++
int a = 10;
int& ref = a; //ref是a的引用
```

> 引用必须初始化，引用初始化后不能改变。

### 引用做函数参数

**引用做函数参数：** 引用做函数参数时，可以修改实参的值。

**示例：**

```c++
//值传递，形参改变，不会修改实参
void swap1(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
}
//地址传递，形参修饰实参
void swap2(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}
//引用传递，形参修饰实参
void swap1(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int a = 10;
    int b = 20;

    swap1(a, b);
    cout << "a = " << a << endl;
    cout << "b = " << b << endl;

    swap2(&a, &b);
    cout << "a = " << a << endl;
    cout << "b = " << b << endl;

    return 0;
}
```

### 引用做函数返回值

**引用做函数返回值：** 引用做函数返回值时，可以返回局部变量的引用。

**示例：**

```c++
int& test() {
    int a = 10;
    return a;
}
int main() {
    int& ret = test();
    cout << ret << endl;//第一次结果正确，因为编译器做了保留
    cout << ret << endl;//但是第二次结果错误，因为a已经销毁（内存以释放）

    return 0;
}
```

> 注意：不要返回局部变量的引用，因为局部变量在函数调用结束后会被销毁，返回的引用将指向一个无效的内存地址。

### 常量引用

**常量引用：** 常量引用可以引用常量，也可以引用非常量。

在参数列表中，加 const 修饰形参，可以防止形参改变实参。

**示例：**

```c++
void print(const int& a) {
    cout << a << endl;
}
int main() {
    // int& ref = 10; //引用必须引用合法的内存空间
    //const修饰引用，给引用加修饰，修饰引用本身，修饰的是ref引用的对象，编译器优化代码
    const int& ref = 10;
    //ref = 100; //ref引用的对象不能修改
    int a = 10;
    const int& ref2 = a; //ok
    a = 1000; //ref2 = 1000; //ref2引用的对象不能修改
    return 0;
}
```

## 类和对象

C++面向对象的三大特性为：**封装、继承、多态**。

### 类的定义

**类：** 类是 C++面向对象编程的基础，类是一种用户自定义的数据类型，它封装了数据（成员变量）和操作数据的方法（成员函数）。

**语法：** `class 类名 { 访问权限: 成员列表 }`

**示例：**

```c++
class Student {
public:
    string name;
    int age;
    int score;
};
```

> 类名一般使用大驼峰命名法，成员变量和成员函数名一般使用小驼峰命名法。

### 对象

#### 对象的定义

**对象：** 对象是类的实例，对象可以访问类的成员变量和成员函数。

**语法：** `类名 对象名;`

**示例：**

```c++
Student s1;
s1.name = "张三";
s1.age = 18;
s1.score = 100;
```

### 访问权限

**访问权限：** 访问权限用于控制类的成员变量和成员函数的访问权限，C++中有三种访问权限：`public`、`protected`、`private`。

**示例：**

```c++
class Student {
public:
    string name;
    int age;
    int score;
private:
    int id;
};
```

### 类的封装

**类的封装：** 类的封装是将类的成员变量和成员函数封装在一起，对外提供接口，隐藏实现细节。

**示例：**

```c++
class Student {
private:
    string name;
    int age;
    int score;
public:
    void setName(string n) {
        name = n;
    }
    string getName() {
        return name;
    }
    void setAge(int a) {
        age = a;
    }
    int getAge() {
        return age;
    }
    void setScore(int s) {
        score = s;
    }
    int getScore() {

     return score;
    }   int getScore() {
        return score;
    }
};
```

### 封装

**封装：** 封装是将类的成员变量和成员函数封装在一起，对外提供接口，隐藏实现细节。

#### 封装的意义

1. 将对象的使用者和对象的具体实现分离。
2. 可以对成员进行访问控制。

在设计类时，将属性和行为写在一起，表现事物。

**语法：**`class 类名 { 访问权限: 属性 / 行为 };`

**示例 1：**

```c++
class Citcle{
public:
    //属性
    int m_Radius;
    //行为
    void setR(int r) {
        m_Radius = r;
    }
    int getR() {
        return m_Radius;
    }
    int getArea() {
        return 3.14 * m_Radius * m_Radius;
    }
}
// 通过园类创建一个圆
// 实例化 （通过一个类 创建一个对象的过程）
int main() {
    Circle c1;
    //给圆对象的属性进行赋值
    c1.setR(10);
    cout << "半径为： " << c1.getR() << endl;
    cout << "面积为： " << c1.getArea() << endl;
    return 0;
}
```

**示例 2：**

```c++
class Person {
public:
    //姓名
    string m_Name;
    //年龄
    int m_Age;
    //学习
    void study() {
        cout << m_Name << "正在学习" << endl;
    }
    //说话
    void speak() {
        cout << "我叫：" << m_Name << "，年龄是：" << m_Age << endl;
    }
};
int main() {
    //通过类，创建对象
    //对象 = 类名()；
    Person p1;
    p1.m_Name = "张三"; //给对象赋值
    p1.m_Age = 18;
    p1.speak();
    p1.study();
    return 0;
}
```

#### 访问权限

**访问权限：** C++中通过`public`、`protected`、`private`三个关键字来控制成员的访问权限。

**public：** 公共权限，成员可以在类内、类外被访问。
**protected：** 保护权限，成员只能在类内、子类内被访问。
**private：** 私有权限，成员只能在类内被访问。

**示例：**

```c++
class person{
    public
    string m_Name; //公共权限
    int m_Age; //公共权限
    void sleep() { //公共权限
        cout << "sleep" << endl;
    }
    protected:
    string m_Car; //保护权限
    private:
    string m_Password; //私有权限
};
int main() {
    person p;
    p.m_Name = "张三"; //ok
    p.m_Age = 18; //ok
    p.sleep(); //ok
    p.m_Car = "奔驰"; //error
    p.m_Password = "123456"; //error

    return 0;
}

```

#### struct 和 class 的区别

**struct 和 class 的区别：** 在 C++中，`struct`和`class`的区别在于默认的**访问权限不同**。

**struct：** 默认的访问权限是`public`。
**class：** 默认的访问权限是`private`。

**示例：**

```c++
struct Person1 {
    string name;
    int age;
};
class Person2 {
    string name;
    int age;
};
int main() {
    Person1 p1;
    p1.name = "张三"; //正确
    p1.age = 18; //正确

    Person2 p2;
    p2.name = "李四"; //错误，私有权限
    p2.age = 20; //错误，私有权限

    return 0;
}
```

#### 成员属性设置为私有

**成员属性设置为私有：**

1. 将成员属性设置为私有，可以增加对数据的安全性。
1. 对于读写权限我们可以检测数据的合法性。

**示例：**

```c++
class Person {
private:
    string name;
    int age;

public:
    void setName(string n) {
        name = n;
    }
    string getName() {
        return name;
    }
    void setAge(int a) {
        if (a > 0 && a < 150) {
            age = a;
        }
        else {
            cout << "输入错误" << endl;
        }
    }
    int getAge() {
        return age;
    }
};
int main() {
    Person p;
    p.setName("张三");
    p.setAge(18);
    cout << name
    cout << p.getName() << endl;
    cout << p.getAge() << endl;
    return 0;
}
```

### 对象的初始化和调用

对象的**初始化和清理**也是两个非常重要的安全问题。

- 一个对象没有初始状态，对其使用后果时未知的。
- 一个对象在销毁前，如果有资源使用，一定要先清理资源，否则可能会产生资源泄漏。

C++利用了构造函数和析构函数来初始化和销毁对象。这两个函数会被编译器之自动调用，完成对象初始化和清理工作。

对象的初始化和清理工作时编译器强制要我们做的事情，因此**如果我们不提供构造函数和析构函数，编译器会提供默认的构造函数和析构函数。如果我们提供了构造函数和析构函数，编译器就不会提供。**

> 默认提供的构造函数和析构函数什么都不做。（空实现）

#### 构造函数和析构函数

##### 构造函数

**构造函数：** 构造函数是一种特殊的成员函数，它在对象创建时自动调用，用于初始化对象的成员变量。

**语法：** `类名(参数列表) { 构造函数体 }`

- 没有返回值不写`void`
- 函数名与类名相同
- 构造函数可以有参数，也可以重载
- 程序在调用对象的时候会自动调用构造，无需手动调用，而且只会调用一次

**示例：**

```c++
class Person {
public:
    string name;
    int age;

    Person(string n, int a) {
        name = n;
        age = a;
    }
};
int main() {
    Person p("张三", 18);
}
```

##### 析构函数

**析构函数：** 析构函数是一种特殊的成员函数，它在对象销毁时自动调用，用于释放对象的资源。

**语法：** `~类名() { 析构函数体 }`

- 没有返回值不写`void`
- 函数名与类名相同，在名称前加上符号`~`
- 析构函数不能有参数，不能重载
- 程序在对象销毁前会自动调用析构，无需手动调用，而且只会调用一次

**示例：**

```c++
class Person {
public:
    string name;
    int age;

    ~Person() {
        cout << "析构函数调用" << endl;
    }
};
int main() {
    Person p("张三", 18);
    //对象销毁时，自动调用析构函数
}
```

##### 构造函数和析构函数的调用规则

1. 如果定义了构造函数，编译器就不再提供默认构造函数。
1. 如果定义了析构函数，编译器就不再提供默认析构函数。
1. 如果希望使用默认构造函数和析构函数，可以定义一个空参数列表的构造函数和析构函数。

##### 构造函数的分类和调用

**构造函数的分类和调用：** 构造函数可以分为默认构造函数、带参构造函数、拷贝构造函数。

**两种分类方式：**

- 按参数分类： 有参构造函数、无参构造函数（默认构造函数）
- 按类型分类： 普通构造函数、拷贝构造函数

**三种调用方法**

- 括号法
- 显示法
- 隐式法

**示例：**

```c++
class Person {
public:
    string name;
    int age;

    //默认构造函数
    Person() {
        cout << "默认构造函数调用" << endl;
    }
    //带参构造函数
    Person(string n, int a) {
        name = n;
        age = a;
        cout << "带参构造函数调用" << endl;
    }
    //拷贝构造函数
    Person(const Person& p) {
        //将传入参数的成员变量值，拷贝给当前对象
        name = p.name;
        age = p.age;
        cout << "拷贝构造函数调用" << endl;
    }
};
int main() {

//1. 括号发
    //默认构造函数调用
    Person p1; // 默认构造函数调用不写括号，否则编译器认为是一个函数的声明
    //带参构造函数调用
    Person p2("张三", 18);
    //拷贝构造函数调用
    Person p3(p2);

//2. 显示法

    Person p4;
    p4 = Person("李四", 20); //利用默认构造函数创建临时对象，将临时对象赋值给p4
    Person p5 = Person("王五", 30); //利用拷贝构造函数创建临时对象，将临时对象赋值给p5
    Person p6 = p5; //利用拷贝构造函数创建临时对象，将临时对象赋值给p6

    Person (10); //匿名对象 特点：当前执行结束后，系统会立即释放并回收掉匿名对象
    //注意事项：不要拷贝构造函数初始化对象 编译器会认为 Person (p3) === Person （ 对象声明  重定义报错 ）;

//3. 隐式转换法
    Person p7 = "赵六"; //利用拷贝构造函数创建临时对象，将临时对象赋值给p7 相当于 Person p7 = Person("赵六"); 有参构造

    return 0;
}
```

##### 拷贝构造函数的调用时机

拷贝构造函数的调用时机：

1. 使用一个已经创建完毕的对象来初始化一个新对象。
2. 值传递的方式给函数参数传值。
3. 以值方式返回局部对象。

**示例：**

```c++
class Person {
public:
    string name;
    int age;

    Person(string n, int a) {
        name = n;
        age = a;
        cout << "带参构造函数调用" << endl;
    }
    Person(const Person& p) {
        name = p.name;
        age = p.age;
        cout << "拷贝构造函数调用" << endl;
    }
};
void test01() {
    Person p1("张三", 18);
    Person p2(p1);
}
void test02() {
    Person p1("张三", 18);


    Person p2 = p1; //拷贝构造函数调用
    Person p3(p1); //拷贝构造函数调用
    Person p4 = Person(p1); //拷贝构造函数调用
    Person p5 = p1; //拷贝构造函数调用
}
void test03() {
    Person p1("张三", 18);
    Person p2 = func(p1); //拷贝构造函数调用
}
Person func(Person p) {
    return p;
}
int main() {
    test01();
    test02();
    test03();
    return 0;
}
```

##### 拷贝构造函数的注意点

默认情况下，C++编译器至少给一个类添加三个函数

1. 默认构造函数（无参，函数体为空）
1. 默认析构函数（无参，函数体为空）
1. 默认拷贝构造函数，对属性进行值拷贝

拷贝构造函数的注意点：

1. 如果类中没有显示定义拷贝构造函数，编译器会提供一个默认的拷贝构造函数。默认的拷贝构造函数会完成浅拷贝。
2. 如果用户定义又有参构造函数， C++不会再提供默认构造函数，但是会提供默认拷贝构造。
3. 如果类中有指针类型的成员变量，那么拷贝构造函数必须自己定义，防止浅拷贝带来的问题。
4. 如果不希望类对象被拷贝，可以将拷贝构造函数声明为私有。

**示例：**

```c++
class Person {
public:
    string name;
    int age;
    //如果不希望类对象被拷贝，可以将拷贝构造函数声明为私有

    Person(string n, int a) {
        name = n;
        age = a;
        cout << "带参构造函数调用" << endl;
    }
    Person(const Person& p) {
        name = p.name;
        age = p.age;
        cout << "拷贝构造函数调用" << endl;
    }
    ~Person() {
        cout << "析构构造函数调用" << endl;

    }

private:
    int* p;
};
int main() {
    Person p1("张三", 18);
    Person p2(p1);
    cout << p2.name << endl;
    return 0;
}
```

##### 深拷贝和浅拷贝

**深拷贝：**深拷贝是开辟一块新的空间，将原对象的数据拷贝到新空间中，两个对象没有任何关系。

**浅拷贝：**浅拷贝是两个对象共用同一块内存空间，修改其中一个对象的数据，另一个对象的数据也会随之改变。

>浅拷贝带来的问题是堆区的内存重复释放

**示例：**

```c++
class Person {
public:
    string name;
    int age;
    int* p;
    Person(string n, int a) {
        name = n;
        age = a;
        p = new int(10);
        cout << "带参构造函数调用" << endl;
    }
    Person(const Person& p) {
        name = p.name;
        age = p.age;
        p = new int(*p.p);
        cout << "拷贝构造函数调用" << endl;
    }
    ~Person() {
        //如果p指向的内存空间，还有其他对象指向，则不能释放，否则会导致其他对象访问非法内存

        //将堆区开辟的数据做释放操作
        if (p != NULL) {
            delete p;
            p = NULL;
        }
        cout << "析构构造函数调用" << endl;
    }
    
    Person(const Person &p){
        cout << "Person 拷贝构造函数调用" << endl;
        //先给成员变量开辟空间
        age = age;

        //编译器默认实现 p = p.p; /浅拷贝操作

        //深拷贝操作
        p = new int(*p.p);
    }

private:


};

int main() {
    Person p1("张三", 18);
    Person p2(p1);
    cout << p2.name << p2.age << *p.p  << endl;
    cout << *p2.p << endl;
    return 0;
}
```
>总结：如果属性在堆区开辟的，一定要自己提供拷贝构造函数，防止浅拷贝带来的问题。
```C++

```


##### 初始化列表

**初始化列表：**初始化列表是在构造函数的函数体之前进行初始化的一种方式。

**语法：** `构造函数(参数列表): 成员变量1(参数列表), 成员变量2(参数列表), ... { 构造函数体 }`

**示例：**

```c++
class Person {
public:

//传统初始化方式
//
//         Person(int a, int b,int c){
//         m_a = a;
//         m_b = b;
//         m_c = c;
//         cout << "构造函数调用" << endl;

//     }
//     int m_a;
//     int m_b;
//     int m_c;
// };

// void test() {
//     Person p1(10,20,30);
//     cout << p1.m_a << p1.m_b << p1.m_c << endl;
// }
    

// int main(){
//     test();
//     return 0;
// }

//初始化列表初始化方式
    Person(int a, int b, int c) : m_a(a), m_b(b), m_c(c) {
        cout << "构造函数调用" << endl;
    }
    int m_a;
    int m_b;
    int m_c;
};
void test() {
    Person p1(10, 20, 30);
    cout << p1.m_a << p1.m_b << p1.m_c << endl;
}
int main() {
    test();
    return 0; 
}
```

#### 类对象作为类成员

**类对象作为类成员：**类对象可以作为类的成员变量，但是需要注意拷贝构造函数的调用。

当其他类对象作为本类成员时，构造的时候先构造类对象再构造自身，在本类对象，析构的时候先构造本类对象在构造类对象。

**示例：**

```c++
class Phone {
public:
    Phone(string name) {
        this->name = name;
    }
    string name;
};
class Person {
public:
    Person(string name, string pName) : name(name), phone(pName) {
    }
    string name;
    Phone phone;
};
void test() {
    Person p("张三", "苹果");
    cout << p.name << p.phone.name << endl;
}
int main() {
    test();
    return 0;
}
```
#### 静态成员

##### 静态成员变量

**静态成员变量：**

静态成员就是再成员变量和成员函数前加上`static`关键字，称为静态成员。

静态成员变量是所有对象共享的，不属于某个对象，可以通过类名直接访问。

1. 所有对象共享同一份数据，修改一处，其他对象也跟着修改
2. 静态成员变量必须在类内声明，在类外初始化
4. 静态成员变量存储在全局区
5. 编译阶段分配内存

>静态成员两组访问方式：
>1. 通过对象访问
>2. 通过类名访问
>注意：静态成员变量也具有访问权限，类外无法访问内内成员

**示例：**

```c++
class Person {
public:
    static int m_age;

**示例：**

```c++
class Person {
public:
    static int m_age;
};
int Person::m_age = 0;
void test() {
    Person::m_age = 18;

    //通过类名访问
    cout << Person::m_age << endl;

    Person p1;
    p1.m_age = 20;

    //通过对象访问
    cout << p1.m_age << endl;
    Person (p2);
    cout << p2.m_age << endl;

}
int main() {
    test();
    return 0;
}
```

##### 静态成员函数

**静态成员函数：**静态成员函数是所有对象共享的，不属于某个对象，可以通过类名直接访问。

>所有对象共享同一个函数
>
>静态成员函数只能访问静态成员变量和静态成员函数

**示例：**

```c++
class Person {
public:


**示例：**

```c++
class Person {
public:
    static int m_age;
    static void func() {
        cout << "静态成员函数调用" << endl;
    }
};
int Person::m_age = 0;
void test() {
    Person::func();
}
int main() {
    test();
    return 0;
}
```
#### C++对象模型和this指针

##### 成员变量和成员函数分开储存

**成员变量和成员函数分开储存：**在C++中，成员变量和成员函数是分开存储的。只有非静态成员变量才属于类的对象上。

>空对象占用内存为 1 
>因为空对象中只有一个成员，该成员是编译器添加的，用来标识该对象的地址   

**示例：**

```c++
class Person {
public:
    int m_a;
    int m_b;
    void func() {
        cout << "func调用" << endl;
    }
};
int main() {
    Person p;
    cout << sizeof(p) << endl;
    return 0;
}
```

##### this指针

C++中每一个非静态成员函数只会诞生一份函数实例，也就是说多个同类型的对象会共享一块代码，但是数据是每个对象独有的，那么在调用成员函数时如何区分不同对象的数据呢？

C++通过提供特殊的的对象指针，`this`指针来解决上述问题，`this`指针指向被调用的成员函数所属的对象。

C++通过让成员函数的第一个参数是指向当前对象的指针（this指针）来区分不同对象的数据。

**this指针：**this指针是C++中的一种机制，它指向当前对象的指针。

>this指针是隐含每一个非静态成员函数内的一种指针
>
>this指针不需要定义，直接使用即可

`this`指针的用途：

1. 当形参和成员变量同名时，可用`this`指针来区分
2. 在类的非静态成员函数中返回对象本身，可使用`return *this`

**示例：**

```c++
class Person {
public:
    int m_a; // 定义成员变量m_a
    int m_b; // 定义成员变量m_b
    void func(int a, int b) { // 定义成员函数func，用于给成员变量m_a和m_b赋值
        m_a = a;
        m_b = b;
        cout << "func调用" << endl;
    }
    Person& operator=(Person &p) { // 定义赋值运算符重载函数，用于将一个Person对象赋值给另一个Person对象
        if (this != &p) { // 如果两个对象不是同一个对象
            m_a = p.m_a; // 将p的m_a赋值给this的m_a
            m_b = p.m_b; // 将p的m_b赋值给this的m_b
        }
        return *this; // 返回this指针
    }
};
int main() {
    Person p1; // 定义Person对象p1
    p1.func(10, 20); // 调用p1的func函数，给p1的m_a和m_b赋值


    Person p2; // 定义Person对象p2
    p2 = p1; // 将p1赋值给p2
    cout << p2.m_a << p2.m_b << endl; // 输出p2的m_a和m_b的值
    return 0;
}
```


##### C++对象模型

**C++对象模型：**C++对象模型是C++语言中对象在内存中的存储方式。

C++对象模型分为两种：**静态绑定**和**动态绑定**。

**静态绑定：**静态绑定是指在编译阶段确定函数的调用方式，这种方式称为静态绑定。

**动态绑定：**动态绑定是指在运行阶段确定函数的调用方式，这种方式称为动态绑定。

**示例：**

```c++
class Person {
public:
    virtual void speak() {
        cout << "Person speak" << endl;
    }
    virtual void run() {
        cout << "Person run" << endl;
    }
};
```



#### 纯虚函数和抽象类

**纯虚函数：**纯虚函数是只有声明没有实现的函数，通过在函数声明后面添加`= 0`来定义纯虚函数。

**抽象类：**抽象类是包含纯虚函数的类，不能实例化对象。

**示例：**

```c++
class Animal {
public:
    virtual void speak() = 0;
};
class Cat : public Animal {
public:     
    void speak() {
        cout << "喵喵喵" << endl;
    }
};
void test() {
    Cat c;
    c.speak();
}
int main() {
    test();
    return 0;
}
```

#### 模板  

**模板：**模板是 C++中的一种机制，它允许程序员编写通用的代码，从而实现代码的重用。

**示例：**

```c++
template <class T>
class Person {
public:
    T m_age;
    Person(T age) {
        this->m_age = age;
    }
    void showAge() {
        cout << m_age << endl;
    }
};


void test() {
    Person<int> p1(18);
    p1.showAge();
    Person<double> p2(18.5);
    p2.showAge();
}
int main() {
    test();
    return 0;
}
```

### 友元

生活中你的家有客厅(Public)，有你的卧室(Private)

客厅所有来的客人都可以进去，但是你的卧室是私有的，也就是说只有你能进去

但是呢，你也可以允许你的好闺蜜好基友进去。

在程序里，有些私有属性 也想让类外特殊的一些函数或者类进行访问，就需要用到友元的技术

友元的目的就是让一个函数或者类 访问另一个类中私有成员

友元的关键字为 friend

友元的三种实现

1. 全局函数做友元
2. 类做友元
3. 成员函数做友元

**友元：**友元是一种机制，它允许一个类（友元类）访问另一个类（被友元类）的私有成员和保护成员。

**示例：**

**类做友元**
```c++
class Building
{
	//告诉编译器 goodGay全局函数 是 Building类的好朋友，可以访问类中的私有内容
	friend void goodGay(Building * building);

public:

	Building()
	{
		this->m_SittingRoom = "客厅";
		this->m_BedRoom = "卧室";
	}


public:
	string m_SittingRoom; //客厅

private:
	string m_BedRoom; //卧室
};


void goodGay(Building * building)
{
	cout << "好基友正在访问： " << building->m_SittingRoom << endl;
	cout << "好基友正在访问： " << building->m_BedRoom << endl;
}


void test01()
{
	Building b;
	goodGay(&b);
}

int main(){

	test01();

	return 0;
}

```

**全局函数做友元**
```c++
class Building
{
	//告诉编译器 goodGay全局函数 是 Building类的好朋友，可以访问类中的私有内容
	friend void goodGay(Building * building);

public:

	Building()
	{
		this->m_SittingRoom = "客厅";
		this->m_BedRoom = "卧室";
	}


public:
	string m_SittingRoom; //客厅

private:
	string m_BedRoom; //卧室
};


void goodGay(Building * building)
{
	cout << "好基友正在访问： " << building->m_SittingRoom << endl;
	cout << "好基友正在访问： " << building->m_BedRoom << endl;
}


void test01()
{
	Building b;
	goodGay(&b);
}

int main(){

	test01();

	return 0;
}

```

**成员函数做友元**
```c++

class Building;
class goodGay
{
public:

	goodGay();
	void visit(); //只让visit函数作为Building的好朋友，可以发访问Building中私有内容
	void visit2(); 

private:
	Building *building;
};


class Building
{
	//告诉编译器  goodGay类中的visit成员函数 是Building好朋友，可以访问私有内容
	friend void goodGay::visit();

public:
	Building();

public:
	string m_SittingRoom; //客厅
private:
	string m_BedRoom;//卧室
};

Building::Building()
{
	this->m_SittingRoom = "客厅";
	this->m_BedRoom = "卧室";
}

goodGay::goodGay()
{
	building = new Building;
}

void goodGay::visit()
{
	cout << "好基友正在访问" << building->m_SittingRoom << endl;
	cout << "好基友正在访问" << building->m_BedRoom << endl;
}

void goodGay::visit2()
{
	cout << "好基友正在访问" << building->m_SittingRoom << endl;
	//cout << "好基友正在访问" << building->m_BedRoom << endl;
}

void test01()
{
	goodGay  gg;
	gg.visit();

}

int main(){
    
	test01();

	return 0;
}


```

### 命名空间

**命名空间：**命名空间是一种机制，它允许程序员将代码组织成逻辑上的分组，从而避免命名冲突。

**示例：**

```c++
namespace N1 {
    int a = 10;
    void func() {
        cout << "N1::func调用" << endl;
    }
}
namespace N2 {
    int a = 20;
    void func() {
        cout << "N2::func调用" << endl;
    }
}
void test() {
    cout << N1::a << endl;
    N1::func();
    cout << N2::a << endl;
    N2::func();
}
int main() {
    test();
    return 0;
}
```

### 运算符重载

**运算符重载：**运算符重载是一种机制，它允许程序员重新定义已有的运算符，以适应不同的数据类型。

####  加号运算符重载

**加号运算符重载：**加号运算符重载是一种机制，它允许程序员重新定义加号运算符，以实现自定义类型的加法运算。

**作用：**实现两个自定义数据类型相加的运算

**示例：**

```c++
class Person {
public:
	Person() {};
	Person(int a, int b)
	{
		this->m_A = a;
		this->m_B = b;
	}
	//成员函数实现 + 号运算符重载
	Person operator+(const Person& p) {
		Person temp;
		temp.m_A = this->m_A + p.m_A;
		temp.m_B = this->m_B + p.m_B;
		return temp;
	}

public:
	int m_A;
	int m_B;
};

//全局函数实现 + 号运算符重载
//Person operator+(const Person& p1, const Person& p2) {
//	Person temp(0, 0);
//	temp.m_A = p1.m_A + p2.m_A;
//	temp.m_B = p1.m_B + p2.m_B;
//	return temp;
//}

//运算符重载 可以发生函数重载 
Person operator+(const Person& p2, int val)  
{
	Person temp;
	temp.m_A = p2.m_A + val;
	temp.m_B = p2.m_B + val;
	return temp;
}

void test() {

	Person p1(10, 10);
	Person p2(20, 20);

	//成员函数方式
	Person p3 = p2 + p1;  //相当于 p2.operaor+(p1)
	cout << "mA:" << p3.m_A << " mB:" << p3.m_B << endl;


	Person p4 = p3 + 10; //相当于 operator+(p3,10)
	cout << "mA:" << p4.m_A << " mB:" << p4.m_B << endl;

}

int main() {

	test();

	return 0;
}

```
>对于内置的数据类型的表达式的的运算符是不可能改变的
>
>不要滥用运算符重载 

#### 左移运算符重载

**左移运算符重载：**左移运算符重载是一种机制，它允许程序员重新定义左移运算符，以实现自定义类型的输出。

**作用：**实现两个自定义数据类型的输出

**示例：**

```c++
class Person {
	friend ostream& operator<<(ostream& out, Person& p);

public:

	Person(int a, int b)
	{
		this->m_A = a;
		this->m_B = b;
	}

	//成员函数 实现不了  p << cout 不是我们想要的效果
	//void operator<<(Person& p){
	//}

private:
	int m_A;
	int m_B;
};

//全局函数实现左移重载
//ostream对象只能有一个
ostream& operator<<(ostream& out, Person& p) {
	out << "a:" << p.m_A << " b:" << p.m_B;
	return out;
}

void test() {

	Person p1(10, 20);

	cout << p1 << "hello world" << endl; //链式编程
}

int main() {

	test();

	return 0;
}


```

>总结：重载左移运算符配合友元可以实现输出自定义数据类型

### 类模板

**类模板：**类模板是一种机制，它允许程序员编写通用的类，从而实现代码的重用。

**示例：**

```c++
template <class T>
class Person {
public: 
    T m_A;
    T m_B;
    Person(T a, T b) {
        this->m_A = a;
}

#if 0
    void add() {
        cout << m_A + m_B << endl;
    }
#endif
};

template <class T>
void mySwap(T& a, T& b) {
    T temp = a;
    a = b;
    b = temp;
}

void test01() {
    Person<int> p1(10, 20);
    p1.add(); //编译器根据传入的参数类型，自动推导出T的类型
}

void test02() {
    Person<double> p2(10.5, 20.5);
    p2.add();
}

void test03() {
    int a = 10;
    int b = 20;
    mySwap(a, b); //编译器根据传入的参数类型，自动推导出T的类型
    double c = 1.1;
    double d = 2.2;
    mySwap(c, d);
}

int main() {
    test01();
    test02();
    test03();
    return 0;
}
```

### 继承

**继承：** 继承是一种机制，它允许一个类（子类）继承另一个类（父类）的成员变量和成员函数。

**语法：** `class 子类名 : 访问权限 父类名 { 成员列表 }`

**继承方式一共有三种：**
- 共有继承 `public`
- 保护继承 `protected`    
- 私有继承 `private`

**示例：**

```c++
class Person {
public:
    string name;
    int age;
    void eat() {
        cout << "Person eat" << endl;
    }
    void sleep() {
        cout << "Person sleep" << endl;
    }
};
class Student : public Person {
public:
    void study() {
        cout << "Student study" << endl;
    }
};
int main() {


    Student s;
    s.name = "张三";
    s.age = 18;
    s.eat();
    s.sleep();X 
    s.study();

    return 0;
}
```
#### 继承中的构造和析构顺序

**构造顺序：**父类先构造，子类后构造

**析构顺序：**子类先析构，父类后析构

**示例：**

```c++
class Person {
public:
    Person() {
        cout << "Person 构造函数" << endl;
    }
    ~Person() {
        cout << "Person 析构函数" << endl;
    }
};
class Student : public Person {
public:
    Student() {
        cout << "Student 构造函数" << endl;
    }
    ~Student() {

        cout << "Student 析构函数" << endl;
    }
};
void test() {
    Student s;
}
int main() {
    test();
    return 0;
}
```

#### 继承同名成员处理方式

问题：当子类和父类出现同名成员，如何通过子类对象，访问到父类或者子类的成员呢？

**示例：**

```c++
class Person {
public:
    string name = "张三";
    int age = 18;
    void func() {

        cout << "Person func" << endl;
    }
};

class Student : public Person {
public:
    string name = "李四";
    int age = 16;
    void func() {
        cout << "Student func" << endl;
    }
};

void test01() {
    
    Student s;
    cout << s.name << endl;
    cout << s.age << endl;
    s.func();
}
// 通过子类对象访问父类中同名成员，需要加作用域
void test02() {
    Student s;
    cout << s.Person::name << endl;
    cout << s.Person::age << endl;
    s.Person::func();
}

int main() {
    test01();
    test02();

    return 0;
}
```
> 总结：
> 1. 子类对象可以直接访问大到子类中同名成员
> 2. 子类对象访问父类同名成员，需要加作用域
> 3. 子类同名成员会隐藏父类中所有同名成员（包括函数和变量），加作用域可以访问到父类同名成员


#### 继承同名静态成员处理方法

问题：当子类和父类出现同名的成员，如何通过子类对象，访问到父类或者子类的成员呢？

静态成员和非静态成员出现同名，处理方式一致。

- 访问之类同名成员 直接访问即可
- 访问父类同名成员 需要加作用域



**示例：**

```c++
class Person {
public:
    static int m_A;
    static void func() {
        cout << "Person func" << endl;
    }
};

int Person::m_A = 10;

class Student : public Person {
public:
    static int m_A;
    static void func() {
        cout << "Student func" << endl;
    }
};

int Student::m_A = 20;

void test01() {
    //通过对象访问
    Student s;
    cout << s.m_A << endl;
    s.func();

    cout << Person::m_A << endl; //通过父类对象访问
    Person::func();
}

void test02() {
    //通过类名访问
    cout << Student::m_A << endl;
    Student::func();

    cout << Person::m_A << endl;
    Person::func();
}

int main() {
    test01();
    test02();

    return 0;
}
```
> 总结：
> 1. 通过子类对象访问父类同名成员，需要加作用域
> 2. 通过子类对象访问子类同名成员，直接访问即可
> 3. 通过类名访问父类同名成员，需要加作用域
> 4. 通过类名访问子类同名成员，直接访问即可


#### 多继承

**多继承：**多继承是一种机制，它允许一个类（子类）继承多个类（父类）的成员变量和成员函数。

**语法：**`class 子类 : 继承方式 父类 , 继承方式 父类2...`

**示例：**

```c++
class Base1 {
public:
    int m_A;
};

class Base2 {
public:
    int m_B;
};

class Son : public Base1, public Base2 {
public:
    int m_C;
};

void test01() {
    Son s;
    s.m_A = 10;
    s.m_B = 20;
    s.m_C = 30;

    //父类中同名成员需要加作用域区分
    cout << "s.m_A = " << s.Base1::m_A << endl;
    cout << "s.m_B = " << s.Base2::m_B << endl;
    cout << "s.m_C = " << s.m_C << endl;
}

int main() {
    test01();
    return 0;
}
```

#### 菱形继承

**菱形继承：**菱形继承是一种多继承的特殊情况，它会导致子类继承多个父类，而这些父类又有一个共同的父类。

**菱形继承概念：**
    - 两个派生类继承同一个基类
    - 又有某个类同时继承自这两个派生类
    - 这种继承被称为菱形继承，或者钻石继承

**菱形继承问题：**
    - 会导致数据冗余和二义性

**示例：**

```c++
class Animal {
public:
    int m_A;
};

class Sheep : public Animal {
public:
    int m_B;
};

class Horse : public Animal {
public:
    int m_C;
};

class Donkey : public Sheep, public Horse {
public:
    int m_D;
};

void test01() {
    Donkey d;
    d.Sheep::m_B = 10;
    d.Horse::m_C = 20;
    d.m_D = 30;
    //d.m_A = 10; //二义性
    d.Sheep::m_A = 10; //加作用域解决二义性
}
int main() {
    test01();
    return 0;
}
```

#### 虚继承

**虚继承：**虚继承是一种解决菱形继承问题的机制，它可以在派生类中声明虚基类，从而避免菱形继承中的数据冗余和二义性。

**语法：**`class 子类 : virtual 继承方式 父类`

**示例：**

```c++
class Animal {
public:
    int m_A;
};

class Sheep : virtual public Animal {
public:
    int m_B;
};

class Horse : virtual public Animal {
public:     
    int m_C;
};

class Donkey : public Sheep, public Horse {
public:
    int m_D;
};

void test01() {
    Donkey d;
    d.m_A = 10;
    d.m_B = 20;
    d.m_C = 30;
    d.m_D = 40;
}

int main() {
    test01();
    return 0;
    
}
```

### 多态

**多态：** 多态是一种机制，它允许一个类（子类）重写父类的成员函数，从而实现不同的行为。

**多态是面向对象三大特性之一**

多态分为两类：

- 静态多态：函数重载和运算符重载属于静态多态，复用函数名
- 动态多态：函数重写属于动态多态，通过基类指针或引用调用重写函数，执行时根据对象的实际类型决定调用哪个函数

静态多态和动态多态的区别：

- 静态多态在编译阶段确定函数地址
- 动态多态在运行阶段确定函数地址

#### 多态实现条件

**多态实现条件：**

- 有继承关系
- 子类重写父类中的虚函数

**示例：**

```c++
class Animal {
public:
    //

    virtual void speak() {

    }
};
class Cat : public Animal {
public:
    void speak() {
        cout << "Cat speak" << endl;

    }
}

class Dog : public Animal {
public:
    void speak() {
        cout << "Dog speak" << endl;
    }
};
void doSpeak(Animal& animal) {
    animal.speak();
}
int main() {
    Cat cat;
    doSpeak(cat);
    Dog dog;
    doSpeak(dog);
    return 0;
}

```





