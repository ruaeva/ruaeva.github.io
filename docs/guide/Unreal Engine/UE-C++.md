# Ue C++

## UBT和UHT

Unreal Engine (UE) 使用 C++ 进行游戏开发，通常涉及到`Unreal Build Tool (UBT)` 和 `Unreal Header Tool (UHT)`。

**UBT：**负责模块的编译和处理依赖关系，确保不同平台上的高效编译。

**UHT：**解析C++头文件，生成与虚幻引擎相关的反射数据，支持UObject系统。 

`UBT` 用于编译 C++ 代码，而 `UHT`用于处理 Unreal 的头文件和生成必要的代码。

## 头文件

`#pragma one`：防止头文件被多次包含。 

`include "CoreMinimal.h"`：包含 Unreal Engine 的核心头文件，定义了引擎的基本类型和宏。

`include "GameFramework/Actor.h"`：包含 Unreal Engine 的游戏框架头文件，定义了游戏中的基本对象 Actor。

`include "MyActor.generated.h"`：包含由 Unreal Engine 自动生成的头文件，定义了反射数据。

### include引入头文件与不完全声明

为什么要前置声明在 Unreal Engine 开发中，通常建议在源文件（`.cpp`文件）中包含头文件，而不是在（`.h`头文件）中，这种做法有几个重要原因：

1. **避免循环依赖**：如果在一个头文件中包含另一个头文件，可能会导致循环依赖，从而引发编译错误。通过在源文件中包含头文件，可以避免这种情况。
2. **减少编译时间**：在头文件中包含头文件会导致编译器在每次编译时都重新解析这些头文件，从而增加编译时间。通过在源文件中包含头文件，可以减少编译时间，因为头文件只会在第一次编译时解析。
3. **避免不必要的依赖**：在头文件中包含头文件可能会导致不必要的依赖，从而增加编译时间。通过在源文件中包含头文件，可以避免这种情况，因为只有当源文件实际使用到这些头文件中的内容时，才会包含它们。

### 前置声明的两种写法

**类前前置声明：**
```cpp
// 写法一
class AActor;
class AMyActor : public AActor
{
    // ...
};
```

**用时前置声明：**
```c++
// 写法二
class AMyActor : public AActor
{
    // ...
};
class AActor;
```

## 模块

`IModuleInterface`：定义了模块的基本接口，包括模块的初始化和清理方法。

## UPROPERTY

`UPROPERTY` 是Unreal Engine中用于声明属性的宏，用它用于标记某个属性是一个Unreal Engine 托管的属性，并且支持反射、序列化和编辑器功能。

`UPROPERTY`宏提供了一系列参数用于定义属性和属性行为，例如是否可编辑、是否可序列化、是否可复制等。

### UPROPERTY的参数

- `EditAnywhere`：可以在任何地方编辑该属性。
- `EditDefaultsOnly`：只能在默认值中编辑该属性，实例就不能修改了。
- `EditInstanceOnly`：只能在实例中编辑该属性。
- `BluePrintReadWrite`：允许在蓝图（EventGraph）中读写该属性。
- `VisibleAnywhere**`：在编辑器中显示该属性。
- `VisibleAnywhere`：可以在任何地方看到该属性。
- `Transient`：该属性不会被序列化保存，通常用于临时数据或不被希望保存的数据。 
- `Category`：指定在编辑器中显示的该属性所属的分类。
- `Meta`：可以用来设置一些元数据，如文档、关键字等，`meta = (AllowPrivateAccess = "true")`  ，允许私有属性在编辑器中编辑。
- `Replicated`：属性在网格中进行复制。

## UFUNCTION

`UFUNCTION`是Unreal Engine中用于声明函数的宏，用于标记某个函数是一个Unreal Engine 托管的函数，并且支持反射、序列化和编辑器功能。

`UFUNCTION`宏提供了一系列参数，用于定义函数的属性和行为，例如是否蓝图可调用的、受否在网格中复制等。

### UFUNCTION的参数

- `BlueprintCallable`：允许在蓝图（EventGraph）中调用该函数，默认为不可调用。
- `BlueprintPure`：该函数是一个纯蓝图函数，既不会修改对象的状态，没有副作用，可以返回一个值。
- `BlueprintImplementableEvent`：声明该函数为蓝图可实现事件，在蓝图中可以实现该事件的具体逻辑。
- `BlueprintAuthorityOnly`：该函数只能在服务器上调用，客户端不能调用。
- `Net`：该函数在网格中进行复制。  
- `Category`：指定在编辑器中显示的该属性所属的分类。
- `Meta`：可以用来设置一些元数据，如文档、关键字等。
- `Server**、Client、Reliable`：用于网络功能，指定该函数在服务器端、客户端执行，以及指定该函数是否可靠传输。

## UE_LOG   

`UE_LOG` 是 Unreal Engine 中用于记录日志的宏，用于在游戏运行时输出日志信息。    


### UE_LOG的参数

- `LogCategory`：指定日志的类别，可以是自定义的类别，也可以是 Unreal Engine 内置的类别，如 `LogTemp`、`LogGame`、`LogBlueprint` 等。
- `Format`：指定日志的格式，可以是字符串，也可以是格式化字符串，如 `TEXT("Hello, %s!"), Name`。
- `...`：指定日志的参数，可以是任意类型，如 `Name`。

## 调试信息
`GEngine->AddOnScreenDebugMessage`：用于在屏幕上显示调试信息。它可以在游戏运行时显示文本信息，帮助开发者调试和测试游戏。
```c++
GEngine->AddOnScreenDebugMessage(key,TimeToDisplay,Color,Message);
```

## 控制输入

1. 创建`Inputmapping Context`和`Input Action`
2. 获取`EnhancedInputComponet`获取输入
3. 调整角色运动转向 

### 创建`Inputmapping Context`和`Input Action`

`Inpputmapping Context`：输入映射上下文是一个定义了哪些输入键触发哪些输入动作的规则集合。它通常于特定的游戏状态相关联，比如游戏菜单的主菜单、游戏中的角色控制等。可以通过编辑项目设置或蓝图脚本来创建和管理输入映射上下文。

`Input Action`：输入动作是一个定义了如何响应特定输入键的规则。它通常与特定的游戏功能相关联，比如跳跃、射击、移动等。可以通过编辑项目设置或蓝图脚本来创建和管理输入动作。

### 获取`EnhancedInputComponet`获取输入


## UObject

`UObject`：是 Unreal Engine 中所有对象的基类，提供了反射、序列化和垃圾回收等功能。

## UCLASS

`UCLASS`：用于定义 Unreal Engine 中的类，支持反射、序列化和垃圾回收等功能。

## USTRUCT

`USTRUCT`：用于定义 Unreal Engine 中的结构体，支持反射、序列化和编辑器功能。

## UENUM

`UENUM`：用于定义 Unreal Engine 中的枚举类型，支持反射、序列化和编辑器功能。



## USTRUCT

`USTRUCT`：用于定义 Unreal Engine 中的结构体，支持反射、序列化和编辑器功能。

## UENUM

`UENUM`：用于定义 Unreal Engine 中的枚举类型，支持反射、序列化和编辑器功能。

## USTRUCT

`USTRUCT`：用于定义 Unreal Engine 中的结构体，支持反射、序列化和编辑器功能。

## USTRUCT

`USTRUCT`：用于定义 Unreal Engine 中的结构体，支持反射、序列化和编辑器功能。

## 组件
`USceneComponent`：用于实现场景中的基本组件，如位置、旋转和缩放等。它是所有其他组件的基类，提供了基本的场景管理功能。

### `USpringArmComponent`和`UCameraComponent`

`USpringArmComponent`：用于实现摄像机的平滑跟随和碰撞处理。它通过一个虚拟的弹簧臂连接摄像机到一个父物体，并自动处理摄像机与环境之间的碰撞检测和调整，以保持摄像机不穿过其他物体。

`UCameraComponent`：用于实现摄像机视角的组件。它提供了一系列功能，使开发者能够在游戏中设置和控制摄像机的视角和行为。`UCameraComponent`通常与其他组件（如`USpringArmComponent`）配合使用，以实现更复杂的摄像机系统。

**示例：**

```c++
	// 创建一个USpringArmComponent对象，并将其命名为CameraBoom
	CameraBoom = CreateDefaultSubobject<USpringArmComponent>(TEXT("CameraBoom"));
	// 将CameraBoom对象附加到根组件上
	CameraBoom->SetupAttachment(RootComponent); 
	CameraBoom->TargetArmLength = 600.0f; // 设置相机臂的长度
	CameraBoom->bUsePawnControlRotation = true; // 使相机臂能够跟随角色旋转
	//CameraBoom->SetRelativeLocation(FVector(0.0f, 0.0f, 300.0f)); // 设置相机臂相对于角色的位置
	CameraBoom->SetRelativeRotation(FRotator(-60.0f, 0.0f, 0.0f)); // 设置相机臂相对于角色的旋转
	// 创建一个UCameraComponent对象，并将其命名为PlayerCamera
	PlayerCamera = CreateDefaultSubobject<UCameraComponent>(TEXT("PlayerCamera"));	
	// 将玩家相机设置到网格的根插槽上
	PlayerCamera->SetupAttachment(GetMesh(),FName("RootSocket"));
```


