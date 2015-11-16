---

class: center, middle

# **객체지향 Javascript 기본**
***
###`- 함수형 프로그래밍과 ECMAScript 6 -`

---
class: center, middle

## **ECMAScript 6**
***

---
class: center, middle

# Block scope
# `let` 

---
## **.red[\*let]: Block scope**
***

```
// ES3
if(false) {
    logLevel = 10;
}
　
alert(logLevel);    // ?     
```

--
```
var logLevel;       // undefined
　
if(false) {
    logLevel = 10;
}
　
alert(logLevel);    // undefined
```

---
## **.red[\*let]: Block scope**
***

```
// ES6
if(false) {
    let logLevel = 10;
}
　
alert(logLevel);    // ReferenceError   
```

---
## **.red[\*let]: Block scope**
***

```
// ES3, ES5
var handlers = [];
var k;
for (k = 0; k < 3; k++) {
    handlers[k] = function() {
        alert(k);
    };
}
```

```
handlers[0](); //3
handlers[1](); //3
handlers[2](); //3
```

---
## **.red[\*let]: Block scope**
***

```
// ES3, ES5
for (var k = 0; k < 3; k++) {
    (function(x) {
        handlers[x] = function() {
            alert(x);
        };
    })(k);
}
```
```
// ES6
for (let k = 0; k < 3; k++) {
    let x = k;
　    
    handlers[x] = function() {
        alert(x);
    };
}
```

---
## **.red[\*let]: Block scope**
***
## ▶ Definition, Statement, Expression 
```
let x = 10;                  // let-definition
let y = 20;
　
let(x = x * 2, y = 30) {     // let-statement
    console.log(x + y);      // 50
}
　　
console.log(x + y)           // 30
　
console.log(let(x = 100) x); // 100     // let-expression
console.log(x);              // 10
```

---
class: center, middle

# Constants
# `const`

---
## **.red[\*const]: Constants**
***
### ▶ let, var 등으로 재정의 불가

```
const MAX_SIZE = 100;
　
let MAX_SIZE = 200;     // error 
```

---
class: center, middle

# Function parameter
# `Default + Rest + Spread`

---
## **.red[\*Default value]**
***

```
// ES5
function handlerRequest(data, method) {
    method = method || 'GET';
    console.log(method);
}
　
handlerRequest({});
```

--
```
// ES6
function handlerRequest(data, method='GET') {
    console.log(method);        // GET
}
　
handlerRequest({});
```

---
## **.red[\*Rest & Spread]**
***

```
// ES6
function f(x, ...y) {  
    // y is an Array
    return x * y.length;
}
f(3, "hello", true) == 6
```
```
// ES6
function f(x, y, z) {  
    return x + y + z;
}
// Pass each elem of array as argument
f(...[1,2,3]) == 6  
```

---
class: center, middle

# `Arrows`

---
## **.red[\*Arrows]**
***
### ▶ 함수를 짧게 표현하는 방식
```
// ES5
　
// Expression bodies
var odds = evens.map(function (v) {  
    return v + 1;
});
var nums = evens.map(function (v, i) {  
    return v + i;
});
var pairs = evens.map(function (v) {  
    return { even: v, odd: v + 1 };
});
```

--
```
// ES6
　
// Expression bodies
var odds = evens.map(v => v + 1);  
var nums = evens.map((v, i) => v + i);  
var pairs = evens.map(v => ({even: v, odd: v + 1}));
```

---
## **.red[\*Arrows]**
***
```
// ES5
　
// Statement bodies
nums.forEach(function (v) {  
    if (v % 5 === 0) fives.push(v);
});
```

--
```
// ES6
　
// Statement bodies
nums.forEach(v => {  
    if (v % 5 === 0)
        fives.push(v);
});
```

---
## **.red[\*Arrows]**
***
```
// ES5
// Lexical this
var bob = {  
    _name: "Bob",
    _friends: ['Bill', 'Scott', 'Olive'],
    printFriends: function printFriends() {
        var that = this;
        this._friends.forEach(function (f) {
            return console.log(that._name + " knows " + f);
        });
    }
};
```

--
```
// ES6
// Lexical this
var bob = {  
    _name: "Bob",
    _friends: ['Bill', 'Scott', 'Olive'],
    printFriends() {
        this._friends.forEach(f => console.log(this._name + " knows " + f));
    }
}
```
