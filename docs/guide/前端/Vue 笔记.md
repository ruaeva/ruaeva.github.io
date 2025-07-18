# Vue 笔记





## 模板语法

### 文本

数据绑定最常见的形式就是使用 “Mustache”（双大括号）语法的文本插值

```vue
<span>Message: {{ msg }} </span>
```

一般配合`js`中的`data()`设置数据

```javascript
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: "这是一个标题"
    }
  } 
}
```
### 原始HTML

双括号会将文本解释为普通文本，而非HTML代码。为了输出真正的HTML，你需要使用`v-html`指令





## 条件渲染

### v-if

`v-if`指令一般用于条件性的渲染一块内容。这块内容只会在指令的表达式返回`ture`值时被渲染。

```vue
<p v-if="flag">hello world</p>
```

```javascript
data(){
    return{
        flag:ture
    }
}
```

### v-else

你可以使用`v-else`指令来表示`v-if`的`else`块
```vue
<p v-if="flag">hello world</p>
<p v-else>你好 世界</p>
```

```javascript
data(){
    return{
        flag:false
    }
}
```

### v-show

另一个用于条件性展示元素的选项是`v-show`指令

```html
<h1 v-show="ok">hello</h1>
```

**`v-if` VS `v=show`的区别**

`v-if`是“真正“的条件渲染,因为它会确保在切换过程中，条件快内的时间监听器和子组件适当地被销毁和重建

`v-if`是<b>惰性的</b>:如果在初始渲染条件为假，则什么都不用做一直到套件第一次 变为真时，才会开始渲染条件块

相比之下，`v-if`有更高的切换开销，而`v-show`有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用`v-show`较好；如果在运行时条件很少改变，则用`v-if`较好





## 列表渲染

### 用`v-for`把一个数组映射为一组元素

我们可以用`v-for`指令基于一个数组来渲染一个列表。`v-for`指令需要使用`item in items`形式的特特殊语法，其中`items`是源数据数组，而`item`则是被迭代的数组元素的<b>别名</b>

```vue
<ul>
    <li v-for="item in items">{{item.message}}</li>
</ul>
```

```javascript
data(){
    return{
        item:[{message:'Foo'},{message:'bar'}]

    }}
```
### 维护状态 

当Vue正在更新使用`v-for`渲染的元素列表时，它默认使用“就地更新“的策略。如果数据项顺序被改变,Vue将不会移动DOM元素来匹配数据项的顺序，而是就地更新每个元素，你需要为每项提供一个唯一的`key`attribute:

```vue
<div v-for="(item,index) in items" :key="item.id|index">
<!--  内容  -->
</div>
```




## 事件处理

### 监听事件

我们可以使用`v-on`指令（通常缩写为`@`符号）来监听DOM事件,并在触发一些JavaScript。用法为`v-on:click="methodName"`或是哟快捷方式`@click="methodName"`

```vue
<button @click="counter += 1">Add 1</button>
```

```javascript
data() {
    return{
        count:0
    }
}
```
### 事件处理方法

然而许多事件处理逻辑会更为复杂，所以直接吧JavaScript代码写在`v-on`指令中是不可行的>。因此`v-on`还可以接收一个需要调用的的方法名称。

```vue
<button @click="greet">Greet</button>
```

```javascript
method:{
    greent(event) {
        //'event'是原生 DOM event
        if (event) {
            alert(event.target.tagName)
        }
    }
}
```
### 内联处理器中的方法

这是官方的翻译称呼,其实我们可以直接叫它“事件传递参数”

```vue
<button @click="say_hi">say hi</button>
<button @click="say_waht">say waht</button>
```

```javascript
methods:{
    say(message){
        alert(message)
    }
}
```





## 表单输入绑定

你可以使用`v-model`指令在表单`<input>`、`<textarea>`及`<select>`元素上创建双向数据绑定。它会根据控件类型自动选择正确的方法来更新元素。尽管有些神奇，当`v-model`本质上不过是语法糖。它负责监听输入的事件来更新数据，并在某种极端场景下进行一些特殊处理。

```vue
<input v-model="message" placeholder="edit me">
<p>Message is : {{ message }} </p>
```

```javascript
data(){
    return{
        message:""
    }
}
```
### 修饰符

`lazy` 当表单失去焦点时触发事件

在默认情况下，`v-model`在每次`input`事件触发后将输入框的值与数据进行同步。你可以添加`lazy`修饰符，从而转为`change`事件之后进行同步


```vue
<input type="text" v-model.lazy="message"/>
```

```javascript
data(){
    return{
        message:"" 

    }
}
```

`trim` 自动去掉户输入的首尾空白字符

```vue
<input type="text" v-model.trim="message"/>
```


`number` 当number类型的值使用v-model绑定后会变成 String类型，number可以将其转化成数字类型

```vue
<input type="text" v-model.number="num">
```





## 组件基础

### 单文件组件

Vue单文件组件（又名`.vue`文件,缩写为<b>SFC</b>）是一种特殊的文件格式，它允许将Vue组件的模板、逻辑与样式封装在单个文件中

```vue
<template>
  <h3>单文件组件</h3>
</template>

<script >
  export default{
      name:"MyComponent"
  }
</script>

<style scoped>
  h3{
    color:red;
  }
</style>
```

### 加载组件

第一步 ：引入组件 `import MyComponentVUe from"/components/MyComponent.vue"`

第二部：挂载组件 `components:{Mycompont}`

第三步：显示组件 `<MyComponent>`/`<my-component>`

### 组件的组织

通常一个应用会以一颗嵌套组织树的形式来组织





## Prop组件交互 

组件与组件之间是需要存在交互的，否则完全没关系，组件的意义就很小了

`Prop`是你可以在组件上注册的一些自定义`attribute`

```vue
<my-component title="标题"/>
```

```vue
<template>
  <h3>单文件组件</h3>
  <p>{{ title }}</p>
</template>

<script>
  export default {
    name:"MyComponent",
    props:{
        title:{
            type:String,
            default:""
        }
    }  
  }
</script>
```

### Prop类型

Prop传递参数其实没有是类型限制的

```vue
props:{
    title:string,
    likes:Number,
    isPublished:Boolean,
    commpentIds:Array,
    authot:Objeck,
    callback:Function
}
```
```js
names:{
    type:Array,
    default:function(){
    // 数组和对象必须使用函数进行返回
        return[]
    }
}
```

> **温馨提示**
> 
> 数据类型为数组和对象的时候，默认值是需要返回工厂模式

>PS：工厂模式‌是一种常见的创建型设计模式，主要用于创建对象，通过定义一个创建对象的接口，使得子类决定实例化哪个类。工厂模式通过将对象的创建过程封装起来，达到解耦的目的，提高了代码的灵活性和可维护性。‌


### 工厂模式

> 工厂模式主要有三种类型：
>
><strong>简单工厂模式‌</strong>：由一个工厂类根据传入的参数决定创建哪一种具体产品类的实例。优点是客户端不需要知道创建对象的具体类，只需知道工厂类和产品类的接口即可。缺点是工厂类的职责过重，增加新的产品时需要修改工厂类，违反了开闭原则。
>
><strong>工厂方法模式‌</strong>：在父类中提供一个创建对象的方法，允许子类决定实例化对象的类型。这种模式通常与其他设计模式结合使用，以提高系统的可扩展性和灵活性。
>
><strong>抽象工厂模式‌</strong>：提供了一个接口，可以创建多个相关或相互依赖的对象。每个具体工厂类只能创建一个具体产品类的实例。抽象工厂模式适用于需要创建一系列相关或相互依赖的对象的情况。
> 实际应用场景
>
>工厂模式在实际应用中非常广泛，例如在Java程序系统中，经常用于创建实例对象。通过使用工厂模式，可以在创建实例时进行初始化工作，避免直接使用new关键字，从而减少代码的复杂性和维护难度。





## 自定义事件组件交互 

自定义事件可以在组件中反向传递数据，`prop`可以将数据从父组件传递道子组件，那么反向如何操作呢，可以利用自定义事件实现`$emit`

```vue
<template>
  <h3>单文件组件</h3>
  <button @click="sendHandle">发送数据</button>
</template>

<script>
  export default{
        name:"Mycomponment",
        data(){
            return{//}
        },
        methods:{
          sendHandle(){
              // 参数1：字符串：理论上是随便的，但是需要具有意义
              // 参数2：传递的数据
              this.$emit("onCutom","数据")
          }
        }  
  }
</script>

<style scoped> 

</style>
```
```vue
<template >
  <MyComponent @onCutom="getDate"/>
</template>

<script>

import MyComponent from './components/MyComponent.vue'

export default {
  name: 'App',
  components:{
    MyComponent
  },
  data(){
    return{//}
  },
  methods:{
      getData(data){
        console.log(data);
     }
  }
}
</script>
```





## 组件生命周期

每个组件在被创建时都要经过一系列初始化过程——例如，需要设置数据监听、编译模板、挂载实例到 DOM、在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。

<img src="./组件生命周期.webp" alt>

为了方便记忆，我们可以将生命周期分为四个阶段：
创建时：`beforeCreate`、`created`
挂载时 & 渲染时：`beforeMount`、`mounted`
更新时：`beforeUpdate`、`updated`
销毁时 & 卸载时：`beforeDestroy`、`destroyed`

> **温馨提示**
> 
> 生命周期函数是Vue实例在创建、更新和销毁过程中自动调用的函数，用于执行特定的操作。这些函数包括：
>
> `beforeCreate`：在实例初始化之后，数据观测和事件配置之前调用。此时实例的`data`和`methods`属性还未被初始化。
>
> `created`：在实例创建完成后调用，此时实例的`data`和`methods`属性已经被初始化，但还未开始编译模板。
>
> `beforeMount`：在模板编译之前调用，此时模板还未被渲染到页面上。





## Axios网络请求

Axios是一个基于promise的网络请求库

### 安装

Axios的引用时需要多礼安装的`npm install --save axios`

### 引入

组件中引入`import axios from "axios`

全局引用：

```js
import axios from "axios"

const app = creatApp(App);
app.config.gloatProperties.$axios = axios
app.mount('#app')

//在组件中调用
this.$axios
```

### 网络请求基本示例

#### get请求

```js
axios({
method: "get",
		url:"www.baidu.com"
}).then(res => {
console.log(res.data)
}) 
```





## Axios网络请求封装

在日常应用过程中，一个项目中的网络请求会很多，此时一般采取的方案是见网络请求封装起来

早`src`目录下创建文件夹`utils`，并创建`request`，用来储存网络请求对象`axios`

```js
import axios from "axios"
import qs from "querystring"


const errorHandle = (status,info) => {
	switch(status){
		case 400:
			console.log("语义有误")；
			break;
		case 401:
			console.log("服务器认证失败")；
			break;
		case 403:
			console.log("服务器拒绝访问")；
			break;
		case 404:
			console.log("地址错误")；
			break;
		case 500:
			console.log("服务器遇到意外)；
			break;
		case 502:
			console.log("服务器无响应")；
			break;
		default:
			console.log(info);
			break;
	}
}


const instance = axios.create({
	// 网络请求的公共配置
	timeout:5000
})

// 拦截器最常用的

// 发送数据之前
instance,intercepretors.request.use(
	config => {
		if(config.method === "post"){
			config.data = qs.stringify(config.data)
            // config：包含者网络请求的所有信息
		}
         return config；
	},
    error => Promise.reject(error)
)

// 获取数据之前
instance.interceptors.response.use(
	responce => response.status === 200 ? Promise.resolve(response) : Promise.reject(response),
    error => {
        const { response } = error;
        errorHandle(response.status,response.info)
    }
)


export default instance;
```



在`src`目录下创建文件夹`api`，并创建文件`index`和`path`分别用来存放网络请求方法和请求路径



## 网络请求跨域解决方案

js采取的是同源策略

同源策略时浏览器的一项安全策略，浏览器只允许js代码氢气球和当前所在服务器域名、端口、协议相同的数据连接口上的数据，这就是同源策略。

也就是说，当协议、域名、端口任意一个不想同时，都会产生跨域问题

### 目前主流的跨域解决方案有两种：

1. 前台解决：proxy

2. 后台解决：cors

```vue
devServer: {
	proxy: {
		'/api': {
			target:'<url>',
			changeOrigin: ture
		}
	}
}
```

>**温馨提示**
>
>解决完跨域配饰之后，要记得从其服务器才行哦！

   

​	

## Vue路由

### 路由的介绍

路由时一种映射关系

Vue中的路由：路径和组件的映射关系



<center>单页面应用 VS 多页面应用</center>

>**单页面应用**：系统类网站 / 内部网站 / 文档类网站 /  移动端站点
>**多页面应用**：公司官网 / 电商类网站

|开发分类|实现方法|开发效率|用户体验|学习成本|首屏加载|SEO|
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|单页|一个HTML页面|按需更新性能高|高|非常好|高|慢|差|
|多页|多个HTML页面|整页更新性能低|一般|中等|快|优|





## Vue引入路由配置

在Vue中，我们可以通过`vue- router`路由管理页面之间的关系

Vue Router 是Vue.js的官方路由。它与Vue.js核心深度集成，让用Vue.js构建单页面应用变得轻而易举

### 在Vue中引入路由

第一步：安装路由`npm install -save vue-router`

第二步：配置独立的路由文件

```js
//index.js
import { creatrRouter,createWebHashHisttory } from "vue-router"

//配置信息中需要的相关配置

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },{
        path: '/about',
        name: 'About',
        // 异步加载方式：如果页面未加载成功则不执行
        component: () => import('../../views/AboutView.vue')
    }
]

const router = createRouter({
    history：createWebHashHistory(),
    routes
})                            


// main.js
// 引入 使用
import router from './router'
createApp(App).use(router).mount('#app')
```





   ## 路由传递参数

页面跳转过程中，谁可以携带参数的，这也是很常见的业务

例如：在一个列表项，点击进入查看每个列表项的详情



第一步：在路由配置中指定参数`key`

```js
{
	path:'/list/:name'
	name:'list'
	component:() => import("../views/ListView.vue")
}
```

第二步：在跳转过程中携带参数

```vue
<li><router-link to="/list/内蒙">内蒙旅游十大景区</router-link></li>
<li><router-link to="/list/北京">北京旅游十大景区</router-link></li>
<li><router-link to="/list/天津">天津旅游十大景区</router-link></li>
```

第三步：在详情页面读取路由携带的参数

```vue
<p> {{ $router.params.name }}旅游景区详情 </p>
```





## 嵌套路由配置

路由嵌套是常见的需求

第一步：创建子路由要加载显示的页面

第二步：在路由配置文件中添加子路由配置

```js
{
	 ，
}
```

