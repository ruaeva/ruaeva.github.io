# 小记录

>本文大部分内容总结于黑马C++教程

## 第一个C++项目

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

>在C++程序中，‌`using namespace std‌` 的主要作用是简化标准库函数和对象的调用，避免重复书写`std::`前缀，但全局使用可能引发命名冲突。

### 核心作用与原理

`‌using namespace std`‌ 是C++中引入标准库命名空间的声明，其核心作用包括：

1. 简化代码编写‌：通过将`std`命名空间中的所有标识符引入当前作用域，省去重复输入`std::`前缀的步骤，例如可直接使用`cout`代替`std::cout`。

2. 命名空间隔离机制‌：C++标准库的所有内容被封装在std命名空间中，避免与用户自定义或其他第三方库的同名标识符发生全局冲突。‌‌

### 优缺点分析

__‌优点‌__

- ‌**提高编码效率‌：**减少代码冗余，适合快速原型开发和小型项目。‌‌‌‌
- **提升代码简洁性‌：**消除频繁的`std::`前缀，增强代码可读性（在简单场景中）。‌‌

‌__缺点与风险‌__

- **命名空间污染‌：**全局使用会导致`std`中所有标识符暴露，可能与自定义或第三方库的标识符冲突，例如`std::list`与自定义`list`类。

- **可维护性降低‌：**在大型项目中，代码阅读者难以区分标识符来源，增加调试和维护难。

- **未来兼容性问题‌：**C++标准库可能新增标识符，导致现有代码因重名而失效。

### 适用场景与最佳实践

__‌限制作用域‌：__

- 在函数或代码块内部局部使用，而非全局声明。例如：

```cpp
void func() { using namespace std; // 仅在函数内生效 cout << "Local scope"; } 
```

- 避免在头文件中使用，防止命名污染扩散。

**‌选择性引入‌：**

- 显式指定特定标识符：`using std::cout;`，仅引入所需符号。

- 使用命名空间别名：`namespace st = std;`，通过`st::cout`调用。

**‌权衡使用场景‌：**

- 小型项目或教学示例可接受全局使用以简化代码。

- 大型项目建议严格遵循显式限定（`std::`）或局部引入规则。‌‌

## 标识符命名规则

**作用：** C++规定给标识符（bianliang、常量）命名时，有一套自己的规则

- 不能是关键字
- 只能由字母、数字、下划线组成
- 第一个字符必须为字母或下划线
- 区分大小写

>命名时应当见名知意

## sizeof 关键字

**作用：** 利用sizeof关键字可以**统计数据类型所占类型大小**

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

**作用：**  用于表示一些不能显示出来的ASCII字符,转义字符是一种特殊的字符常量，由反斜杠（\）和另一个字符组成

**常见转义字符：**

| 转义字符 |  含义  |
| :------: | :----: |
|  `\n`    |  换行  |
|  `\t`    |  制表  |
|  `\\`    |  反斜线  |
|  `\"`    |  双引号  |
|  `\'`    |  单引号  |
|  `\a`    |  警报  |
|  `\b`    |  退格  |
|  `\r`    |  回车  |
|  `\f`    |  换页  |
|  `\v`    |  垂直制表  |
|  `\ddd`  |  八进制  |
|  `\xhh`  |  十六进制  |



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

| 逻辑运算符 |  作用  |  结果 |
| :--------: | :----: | :------: |
|    `&&`    |  逻辑与  |  如果a为假，则!a为真;     如果a为真，则!a为假  |
|    `II`    |  逻辑或  |  如果a和b都为真，则结果为真，否则为假  |
|    `!`     |  逻辑非  |  如果a和b有一个为真，则结果为真，二者都为假时，结果为假 |


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

**作用：** 将数组中的元素逆置，例如原数组为1,3,5,7,9，逆置后为9,7,5,3,1

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

>**注意：** 函数声明可以多次，函数定义只能有一次。

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

>值传递时，形参发生改变，并不会影响实参。

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

函数分文件编写一般有4步骤
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

>指针前加`*`代表解引用，找到指针指向的内存。

>指针在32位操作系统中占用4个字节，64位操作系统中占用8个字节。

### 空指针和野指针

**空指针：** 指针变量指向内存地址为0的内存空间。

**野指针：** 指针指向非法的内存空间，指针变量指向的内存地址不可用（不可访问）。

**示例：**

```c++
int* p = NULL;
int* p = 0x1100;
```

### const修饰指针 

**const修饰指针：** const修饰指针时，分为两种情况，const修饰指针变量，const修饰指针指向的值。

**const修饰指针变量：** const修饰指针变量时，指针变量的值不能改变，即指针变量不能指向其他内存地址。

**const修饰指针指向的值：** const修饰指针指向的值时，指针指向的值不能改变，即指针指向的内存地址中的值不能改变。

>`const`既修饰指针有修饰常量。
>技巧：看`const`前后的位置，`const`在`*`前，修饰指针指向的值；`const`在`*`后，修饰指针变量。

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
>如果不想修改实参，就用值传递，想修改实参，就用地址传递。

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
- struct 结构体名 变量名 = { 成员1值, 成员2值... }
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
>定义结构体时`struckt`关键字不可省略。
>创建结构体变量时`struckt`关键字可以省略。
>结构体中的成员可以是基本数据类型，也可以是自定义的数据类型。

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

>结构体指针可以通过`->`操作符访问结构体成员。

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

### 结构体中const的使用

用来防止误操作

**结构体中const的使用：** 结构体中的成员可以是`const`修饰的，表示该成员的值不能被修改。

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

### 结构体中static的使用

**结构体中static的使用：** 结构体中的成员可以是`static`修饰的，表示该成员的值是共享的，所有结构体变量共享该成员的值。

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



