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

## 模块

`IModuleInterface`：定义了模块的基本接口，包括模块的初始化和清理方法。

## UObject

`UObject`：是 Unreal Engine 中所有对象的基类，提供了反射、序列化和垃圾回收等功能。

## UCLASS

`UCLASS`：用于定义 Unreal Engine 中的类，支持反射、序列化和垃圾回收等功能。

## UPROPERTY

`UPROPERTY`：用于定义类的属性，支持反射、序列化和编辑器功能。

## UFUNCTION

`UFUNCTION`：用于定义类的函数，支持反射、序列化和编辑器功能。

## USTRUCT

`USTRUCT`：用于定义 Unreal Engine 中的结构体，支持反射、序列化和编辑器功能。

## UENUM

`UENUM`：用于定义 Unreal Engine 中的枚举类型，支持反射、序列化和编辑器功能。

## UPROPERTY

`UPROPERTY`：用于定义类的属性，支持反射、序列化和编辑器功能。

## USTRUCT

`USTRUCT`：用于定义 Unreal Engine 中的结构体，支持反射、序列化和编辑器功能。

## UENUM

`UENUM`：用于定义 Unreal Engine 中的枚举类型，支持反射、序列化和编辑器功能。

## UPROPERTY

`UPROPERTY`：用于定义类的属性，支持反射、序列化和编辑器功能。

## UFUNCTION

`UFUNCTION`：用于定义类的函数，支持反射、序列化和编辑器功能。

## USTRUCT

`USTRUCT`：用于定义 Unreal Engine 中的结构体，支持反射、序列化和编辑器功能。


## UPROPERTY    

`UPROPERTY`：用于定义类的属性，支持反射、序列化和编辑器功能。

## USTRUCT

`USTRUCT`：用于定义 Unreal Engine 中的结构体，支持反射、序列化和编辑器功能。

