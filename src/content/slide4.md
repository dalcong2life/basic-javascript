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
## **let: Block scope**
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
## **let: Block scope**
***

```
// ES6
if(false) {
    let logLevel = 10;
}
　
alert(logLevel);    // ReferenceError   
```

---
## **let: Block scope**
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
## **let: Block scope**
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
## **let: Block scope**
***
### ▶ definition, statement, expression 
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
## **const: Constants**
***
- let, var등으로 재정의 불가

```
const MAX_SIZE = 100;
　
let MAX_SIZE = 200;     // error 
```

---
class: center, middle

# Function parameter
# `default value`

---
## **default value**
***

```
// ES5
function handlerRequest(data, method) {
    method = method || 'GET';
    console.log(method);
}
　
handlerRequest({});
```
```
// ES6
function handlerRequest(data, method='GET') {
    console.log(method);        // GET
}
　
handlerRequest({});
```