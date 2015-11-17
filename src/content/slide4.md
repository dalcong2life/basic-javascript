---

class: center, middle

# **객체지향 Javascript 기본**
***
###`- 함수형 프로그래밍과 ECMAScript 6 -`

---
class: center, middle

## **함수형 프로그래밍**
***

---

## **함수형 프로그래밍의 개념**
***
### ▶ 함수형 프로그래밍에서 사용되는 용어
- 순수함수(Pure function): 외부에 아무런 영향을 미치지 않는 함수(f1, f2, f3)
- 고계함수(Higher-order function): 함수를 또 하나의 값으로 간주하여 함수의 인자 혹은 반환값으로 사용할 수 있는 함수(get_encrypted)
```
// 특정 문자열을 암호화하는 함수
f1 = encrypt1;
f2 = encrypt2;
f3 = encrypt3;
　
// 암호화할 문자열
pure_value = 'pure value'
encrypted_value = get_encrypted(x)
　
// 암호화된 문자열
encrypted_value = get_encrypted(f1);
encrypted_value = get_encrypted(f2);
encrypted_value = get_encrypted(f3);
```
.bold.red[*]
내부 데이터 및 상태는 그대로 둔 채 제어할 함수를 변경 및 조합함으로써 원하는 결과를 얻을 수 있다. `높은 수준의 모듈화`가 가능하다.

---

## **개념**
***
### ▶ 자바스크립트에서 함수형 프로그래밍
- 일급 객체로서의 함수
- 클로저
```
var f1 = function(input) {
        /* 암호화 작업 수행 */
        return 1;
}
var f2 = function(input) {
        /* 암호화 작업 수행 */
        return 2;
}
var f3 = function(input) {
        /* 암호화 작업 수행 */
        return 3;
}
　
var get_encrypted = function(func) {
        var str = 'pure value';
        return function() {     // 클로저
            return func.call(null, str);
        }
}
```

---
## **개념**
***
### ▶ 자바스크립트에서 함수형 프로그래밍
```
var encrypted_value = get_encrypted(f1)();
console.log(encrypted_value);       // (출력값) 1
　
var encrypted_value = get_encrypted(f2)();
console.log(encrypted_value);       // (출력값) 2
　
var encrypted_value = get_encrypted(f3)();
console.log(encrypted_value);       // (출력값) 3
```


---

## **예제**
***
### ▶ 배열의 각 원소 총합 구하기
```
function sum(arr) {
    var len = arr.length;
    var i = 0, sum = 0;
　
    for(; i < len; i++) {
        sum += arr[i];
    }
    
    return sum;
}
　
var arr = [1,2,3,4];
console.log(sum(arr));
```

---

## **예제**
***
### ▶ 배열의 각 원소 곱 구하기
```
function multiply(arr) {
    var len = arr.length;
    var i = 0, result = 1;
　
    for(; i < len; i++) {
        result *= arr[i];
    }
    
    return result;
}
　
var arr = [1,2,3,4];
console.log(multiply(arr));
```

---
## **예제**
***
### ▶ 함수형 프로그램밍으로 변경
```
function reduce(func, arr, init) {
    var len = arr.length,
        i = 0,
        accum = init;
　   
    for (; i < len; i++) {
        accum = func(accum, arr[i]);
    }
　    
    return accum;
}
```

--
```
var arr = [1,2,3,4];
　
var sum = function(x, y) {
    return x + y;
};
　
var multiply = function(x, y) {
    return x * y;
};
　
console.log(reduce(sum, arr, 0));       // (출력값) 10
console.log(reduce(multiply, arr, 1));  // (출력값) 24
```

---
## **함수형 프로그래밍을 활용한 주요 함수**
***
### ▶ 1. 커링
- 특정 함수에서 정의된 인자의 일부를 넣어 고정시키고, 나머지를 인자로 받는 새로운 함수를 만드는 것을 의미한다.
```
function curry(func) {
        var args = Array.prototype.slice.call(arguments, 1);
        
        return function() {
            return func.apply(null, 
                        args.concat(Array.prototype.slice.call(arguments)));
        }
}
　
function calculate(a, b, c) {
        return a * b + c;
}
　
var new_func1 = curry(calculate, 1);
console.log(new_func1(2, 3));
　　
var new_func2 = curry(calculate, 1, 3);
console.log(new_func2(3));
```

---
## **함수형 프로그래밍을 활용한 주요 함수**
***
### ▶ 1. 커링
- 함수형 프로그래밍 언어에서는 기본 제공되지만 자바스크립트는 기본으로 제공되지 않음
- 실제 구현하거나 Prototypejs 라이브러리 사용 
```
Function.prototype.curry = function() {
        var fn = this, args = Array.prototype.slice.call(arguments);
        return function() {
            return fn.apply(this, 
                           args.concat(Array.prototype.slice.call(arguments)));
        }
}
```

---
## **함수형 프로그래밍을 활용한 주요 함수**
***
### ▶ 2. bind
- 커링 기법을 활용한 함수
- 함수를 호출 할 때 this에 바인딩시킬 객체를 사용자가 지정할 수 있다
```
Function.prototype.bind = function(thisArg) {
        var slice = Array.prototype.slice;
        var fn = this, args = slice.call(arguments, 1);
        return function() {
            return fn.apply(thisArg, args.concat(slice.call(arguments)));
        }
}
　　
var print_all = function(arg) {
        for(var i in this) console.log(i + " : " + this[i]);
        for(var i in arguments) console.log(i + " : " + arguments[i]);
}
　　
var myObj = {name : '홍길동'};
var myFunc = print_all.bind(myObj);
myFunc();
　　
var myFunc2 = print_all.bind(myObj, 'red', 'green');
myFunc2('blue');
```

---
## **함수형 프로그래밍을 활용한 주요 함수**
***
### ▶ 3. 반복함수
- each: 배열 또는 객체의 각 프로퍼티를 꺼내서 차례대로 특정 함수에 인자로 넣어 실행
```
function each(obj, fn, args) {
        if(obj.length === undefined) {
            for(var i in obj) {
                fn.apply(obj[i], args || [i, obj[i]]);
            }
        } else {
            for(var i = 0; i < obj.length; i++) {
                fn.apply(obj[i], args || [i, obj[i]]);
            }
        }
        return obj;
}
　　
each([1,2,3], function(idx, num) {
        console.log(idx + " : " + num);
});
　
var obj = {name: '홍길동', age: 30};
each(obj, function(idx, value) {
        console.log(idx + " : " + value);
}); 
```

---
## **함수형 프로그래밍을 활용한 주요 함수**
***
### ▶ 3. 반복함수
- map: 배열의 각 요소를 꺼내서 사용자 정의 함수를 적용시켜 새로운 값을 반환
```
Array.prototype.map = function(callback) {
        // this, callback 유효성 체크 필요
        var obj = this;
        var value, mapped_value;
        var A = new Array(obj.length);
    　    
        for (var i = 0; i < obj.length; i++) {
            value = obj[i];
            mapped_value = callback.call(null, value);
            A[i] = mapped_value;
        }
    　    
        return A;
}
　
var arr = [1,2,3,4];
var new_arr = arr.map(function(value) {
        return value * value;   
});
console.log(new_arr);       // [1, 4, 9, 16]
```

---
## **함수형 프로그래밍을 활용한 주요 함수**
***
### ▶ 3. 반복함수
- reduce: 배열의 각 요소를 꺼내서 사용자 정의 함수를 적용시킨 뒤, 그 값을 계속해서 누적시키는 함수
```
Array.prototype.reduce = function(callback) {
        // this, callback 유효성 체크 필요
        var obj = this;
        var value, accumulated_value = 0;
    　    
        for (var i = 0; i < obj.length; i++) {
            value = obj[i];
            accumulated_value = callback.call(null, accumulated_value, value);
        }
    　    
        return accumulated_value;
}
　
var arr = [1,2,3,4];
var accumulated_val = arr.reduce(function(x, y) {
        return x + y * y;   
});
console.log(accumulated_val);       // 30
```


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
- Chrome은 strict mode 에서만 사용 가능
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
for (var k = 0; k < 3; k++) {
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

---
## **.red[\*Modules]**
***
- CommonJS 등에서 사용하는 모듈 패턴을 언어 차원에서 지원
```
// module.js
var MathModule = function () {
        return {
            plus: function (x, y) {
                return x + y;
            },
            minus: function (x, y) {
                return x - y;
            },
            times: function (x, y) {
                return x * y;
            },
            divide: function (x, y) {
                return x / y;
            }
        }
};
　
module.exports = MathModule;
　
// app.js
var mathModule = require('module.js')();
console.log(mathModule.plus(10, 5));
```

---
## **.red[\*Promise]**
***
- Javascript Callback Hell 극복 방법 제공
- 비동기 작업들을 순차적으로 수행
- 코드 가독성 높아짐
```
// Callback Hell
async(1, function() {
        async(2, function() {
            async(3, function() {
               async(4, function() {
                   async(5, function() {
                        console.log('작업 완료!');
                   });
               }); 
            });
        });
});
```

---
## **.red[\*Promise]**
***
```
function timeout(duration) {
        var duration = duration || 1000;
    　	
        return new Promise(function(resolve, reject) {
            setTimeout(resolve, duration);
        });
}
　
timeout(1000)
        .then(function() {
            console.log('1번 작업 완료됨');
            timeout(2000);
        })
        .then(function() {
            console.log('2번 작업 완료됨');
            timeout(3000);
        })
        .then(function() {
            console.log('모든 작업이 완료됨');
        })
        .catch(function(err){
            console.log('오류 처리');
        });
```


---
## **.red[\*Classes]**
***
- 생성자를 지원
- 상속받은 객체의 메소드를 super로 접근 가능 
```
class SkinnedMesh extends THREE.Mesh {  
        constructor(geometry, materials) {
            super(geometry, materials);
            　
            this.idMatrix = SkinnedMesh.defaultMatrix();
            this.bones = [];
            this.boneMatrices = [];
            //...
        }
        update(camera) {
            //...
            super.update();
        }
        get boneCount() {
            return this.bones.length;
        }
        set matrixType(matrixType) {
            this.idMatrix = SkinnedMesh[matrixType]();
        }
        static defaultMatrix() {
            return new THREE.Matrix4();
        }
}
```

---
## **.red[\*Destructuring]**
***
- list matching
```
// ES 5
var _ref = [1, 2, 3];  
var a = _ref[0];  
var b = _ref[2];
　
　
// ES 6
var [a, , b] = [1,2,3];
```
- object matching
```
// ES 5
var _getASTNode = getASTNode();  
var a = _getASTNode.op;  
var b = _getASTNode.lhs.op;  
var c = _getASTNode.rhs;
　
　
// ES 6
var { op: a, lhs: { op: b }, rhs: c }  
       = getASTNode()
```

---
## **.red[\*Destructuring]**
***
- in parameter position
```
// ES 5
function g(arg) {  
        var x = arg.name;
        console.log(x);
}
g({ name: 5 });
　
　
// ES 6
function g({name: x}) {  
        console.log(x);
}
g({name: 5})
```

---
## **.red[\*Destructuring]**
***
- Fail-soft destructuring
```
// Fail-soft destructuring
var [a] = [];  
a === undefined;
　
// Fail-soft destructuring with defaults
var [a = 1] = [];  
a === 1; 
```

---
class: center, middle

![:scale 80%](img/End.jpg)