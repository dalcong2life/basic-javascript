---

class: center, middle

# **객체지향 Javascript 기본**
***
###`- 자바스크립트 함수와 프로토타입 -`

---
## **First-class objects**
***
### ▶ 1종 객체(First-class object)
- 변수, 배열 엘리먼트, 다른 객체의 프로퍼티에 할당될 수 있다. 
- 함수의 인자로 전달 될 수 있다.
- 함수의 결과값으로 반환 될 수있다.
- 리터럴로 생성 될 수 있다.
- 동적으로 생성된 프로퍼티를 가질 수 있다.

### ▶ 자바스크립트의 함수(Function)는 1종 객체
- 함수 == (객체의기능+호출)

---
## **함수 정의1(함수 선언문 방식)**
***
### ▶ function 키워드

### ▶ 함수 이름
- 유효한 식별자이어야 함

### ▶ 매개변수 목록
- 쉼표로 구분된 매개변수 목록과 그 매개변수 목록을 둘러싸고있는 괄호 
- 매개변수는 생략 가능, 괄호는 필수

### ▶ 함수 본문
- 중괄호로 둘러싸여 있는 자바스크립트 구문
- 본문은 생략 가능, 중괄호는 필수
- 
```
function sum(x, y) { 
        var result = x + y; 
        return result;
} 
```

---
## **함수 정의2(함수 리터럴 방식)**
***
### ▶ 변수에 익명함수로 지정
- 
```javascript
var add = function(x, y){
        var result = x + y; 
        return result;
};
　
add(10, 20);
```

### ▶ 변수에 기명함수로 지정
- 함수 내부에서 재귀호출으로만 사용 가능 
```
var add = function sum(x, y){ 
        var result = x + y;
        return result;
};
　
add(); ( O ) 
sum(); ( X )
```

---
## **함수 정의3(Function() 생성자 함수 이용)**
***
### ▶ 함수 객체를 생성해서 반환하는 Function 생성자 함수 이용
-  
```
var add = new Function("x", "y", "var result = x + y; return result;");
```

---
## **함수 호이스팅**
***
### ▶ 함수 호이스팅
- 함수 선언문 형태로 정의한 함수의 유효범위는 코드의 맨 처음부터 시작한다는 특징
- 
```javascript
console.log(add(2,3)); // ( O )
　
function add(x, y) {
        return x + y;
}
　
console.log(add(3, 4)); // ( O )
```
***
- 
```javascript
console.log(add(2,3)); // ( X )
　
var add = function(x, y) {
        return x + y;
};
　
console.log(add(3, 4)); // ( O )
```

---
## ** 유효 범위와 함수**
***
### ▶ 지역변수의 유효범위는 함수
- 대부분의 언어에서는 선언한 변수가 블록 단위의 유효범위를 갖지만 자바스크립트에서는 선언한 변수가 `함수 단위의 유효범위`를 갖는다.

---
## **함수 호출 시 인자의 수**
***
### ▶ 매개변수와 인자의 수
- 함수에 정의한 매개변수와 함수 호출에 사용되는 인자의 수가 달라도 에러 가 발생하지는 않음

### ▶ 매개변수 > 인자
- 부족한 인자에 대한 매개변수에는 undefined가 지정됨
```
function add(x, y) {
        return x + y;
}
add(3);         // NaN
```

### ▶ 매개변수 < 인자
- 남는 인자에 대해서는 처리할 매개변수가 없기 때문에 무시됨
```
function add(x, y) {
        return x + y;
}
add(3, 4, 5);   // 7
```

---
## **암묵적 매개변수**
***
### ▶ 모든 함수가 호출될 때 암묵적으로 넘어오는 매개변수
- `arguments`, `this`

### ▶ arguments 매개변수
- 함수 내에서 arguments 변수로 접근 가능
- 함수에 전달된 모든 인자들을 담고 있는 유사배열객체(Array는 아님)
- 배열과 비슷하게 length 속성과 index로 각 인자에 접근 가능

### ▶ this 매개변수
- 함수내에서 this 변수로 접근가능
- `함수 컨텍스트` 객체
- 함수를 호출한 객체에 대한 참조 

---
## **암묵적 매개변수**
***
### ▶ arguments
```
function sum() {
    var result = 0;
    for(var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;                
}    
　
console.log(sum(1,2,3));                // (출력값) 6
console.log(sum(1,2,3,4,5,6,7,8,9));    // (출력값) 45
```

---
## **함수 호출 방법(1/4)**
***
### ▶ 함수로 호출
- 일반적인 함수 호출 방법
- 함수명()
- this는 window 객체
    - window 객체는 어디서나 참조 가능하므로 this를 사용할 필요 없음
- 
```remark
function f1(){
        console.log(this);
}; 
f1();
　
var f2 = function(){
        console.log(this);
}; 
f2();
```

--
- 
```
this === Window {external: Object, chrome: Object, document: document, ...
```

---
## **함수 호출 방법(2/4)**
***
### ▶ 메서드로 호출 
- 객체에정의된메서드를호출할때
- 객체.메서드명()
- this는 메서드를 정의한 객체
    - this는 생성된 객체를 참조하므로 객체에 종속적인 속성을 부여하는게 가능
    - 함수를 하나만 정의하고 여러 객체에서 메서드로 사용
    - 자바스크립트로 객체지향 프로그래밍을 가능하게 하는 중요한 특징
- 
```
var o = {};
o.whatever = function(){
        console.log(this); 
};
o.whatever();
```

--
- 
```
this === Object {}
```


---
## **함수 호출 방법(2/4)**
***
### ▶ 내부 함수의 this 바인딩
- 
```
    var value = 100;    // 전역 변수
    var myObject = {
        value: 1,
        func1: function() {
            this.value += 1;
            console.log('func1() called. this.value : ' + this.value);
        
            // 내부 함수
            func2 = function () {
                this.value += 1;
                console.log('func2() called. this.value : ' + this.value);
            };
        
            func2();            // ②
        }
    };
    myObject.func1();           // ①
```        

--
- 
```
func1() called. this.value : 2 
func2() called. this.value : 101
```

---
## **함수 호출 방법(2/4)**
***
### ▶ 내부 함수의 this 바인딩 해결 방법 1
- 
```
        var value = 100;    // 전역 변수
        var myObject = {
            value: 1,
            func1: function() {
    *           var that = this;
                
                this.value += 1;
                console.log('func1() called. this.value : ' + this.value);
            
                // 내부 함수
                func2 = function () {
    *               that.value += 1;
                    console.log('func2() called. this.value : ' + that.value);
                };
                
                func2();            // ②
            }
        };
        myObject.func1();           // ①
```        

--
- 
```
func1() called. this.value : 2 
func2() called. this.value : 3
```

---
## **함수 호출 방법(2/4)**
***
### ▶ 내부 함수의 this 바인딩 해결 방법 2
- 
```
        var value = 100;    // 전역 변수
        var myObject = {
            value: 1,
            func1: function() {
                this.value += 1;
                console.log('func1() called. this.value : ' + this.value);
            
                // 내부 함수
                func2 = function (p1, p2) {
                    this.value += 1;
                    console.log('func2() called. this.value : ' + this.value);
                };
            
    *           func2().call(this, 10, 20);     // ②
                // func2().apply(this, [10, 20]);   
            }
        };
        myObject.func1();           // ①
```        

--
- 
```
func1() called. this.value : 2 
func2() called. this.value : 3
```

---
## **함수 호출 방법(3/4)**
***
### ▶ apply(), call() 메서드로 호출
- 함수(Function 클래스)에 정의된 메서드
- 함수.apply(), 함수.call() 형태로 호출
- `this는 apply(), call() 메소드의 첫번째 인자로 전달되는 객체`
- this를 명시적으로 지정할 수 있음
- 콜백 함수 호출 시 주로 사용
      
### ▶ apply(p1, p2) 메서드
- 두개의 매개변수를 가짐
- 첫 번째 매개변수(p1)에는 this로 사용할 객체를 전달
- 두 번째 매개변수(p2)에는 함수에 전달할 인자값 배열
      
### ▶ call(p1, p2, p3, ...) 메서드
- 여러개의 매개변수를 가짐
- 첫 번째 매개변수(p1)에는 this로 사용할 객체를 전달
- 두 번째 이후의 매개변수(p2, p3, ...)에는 함수에 전달할 인자값을 차례대로 지정

---
## **함수 호출 방법(4/4)**
***
### ▶ 생성자로 호출
- 함수를 생성자로 사용할 경우
- new 함수명()
- `this는 생성자를 통해 생성된 객체`
      
### ▶ 생성자로 호출될 때의 내부 동작
- 비어 있는 객체를 새로생성
- 새로 생성된 객체는 this 매개변수로 생성자 함수에 전달
- 명시적으로 반환하는 객체가 없다면 생성된 객체를 반환
- 객체지향 프로그램의 new 연산자와 비슷한 동작
      
### ▶ 생성자를 작성할 때 고려해야 할 것들
- 일반 함수처럼 호출할 수 있지만 이럴 경우 생성자 내부의 this는 window 객체를 가리키므로 객체에 종속적인 값을 지정할 수 없으므로 의미가 없다.
- 명명(naming) 규칙
    - 일반함수: 작업 할 동작을 나타내는 동사로 이름짓고 소문자로 시작
    - 생성자: 생성할 객체를 나타내는 `명사`로 이름 짓고 `대문자`로 시작
   
---
## **함수 호출 방법(4/4)**
***
### ▶ 생성자로 호출 방법
```
function Person(name, age){
	this.name = name;
	this.age = age;
	this.getName = function(){
		return this.name;
	};
}
　
var kim = new Person("김철수", 35);
var lee = new Person("이영희", 30);
console.log(kim.age);           // 35
console.log(kim.getName());     // 김철수
console.log(lee.age);           // 30
console.log(lee.getName());     // 이영희
```

--
```
function Person(name, age){
*   var this = new Object();
	this.name = name;
	this.age = age;
	this.getName = function(){
		return this.name;
	};
*   return this;
}
```

---
## **함수 호출 방법(4/4)**
***
### ▶ 생성자 함수 호출 오류 예방 방법
```
var kim = Person("김철수", 35);     // Person 내 this는 window 객체가 된다.
console.log(kim);                   // undefined
　
console.log(window.age);            // 35
```

--
```
function Person(name, age){
*   if(!(this instanceof Person)) { // or 'this instanceof arguments.callee'
*       return new Person(name, age);
*   }
　
	this.name = name;
	this.age = age;
	this.getName = function(){
		return this.name;
	};
}
```
```
var kim = Person("김철수", 35);
console.log(kim.age);           // 35
```
    
---
## **함수 호출 방법(4/4)**
***
### ▶ 자바스크립트의 생성자 함수들(객체지향 용어는 클래스)
```
[Function]
    var f = new Function(“x”, “y”, “return x+y;”);
    function f(x, y){ return x+y; }
    
[Object]
    var o = new Object();
    var o = {};
    
[String], [Number], [Boolean]
    var name = new String(“김철수”);
    var age = new Number(30);
    var male = new Boolean(true);
    
[Array]
    var a = new Array();
    var a = [];
    
[Date]
    var d = new Date();
```

---
## **익명 함수**
***
### ▶ 익명 함수의 사용처
- 함수를 변수에 저장
- 객체의 메서드로 지정
- 타임아웃이나 이벤트의 콜백으로 활용
- 함수가 사용되는 코드가 한번만 나타난다면 불필요한 이름을 지정할 필요 없이 익명 함수로 작성한다.
```
var f1 = function(){};
var obj = {
        f2: function(){} 
};
setTimeout(function(){}, 1000);
window.onload = function(){};
```

---
## **콜백 함수**
***
### ▶ 콜백
- 프로그램이 실행되는 동안 어떤 함수가 적절한 시점에 “다시 호출”된다는 의미
- 특정한 상황이 되거나(이벤트 발생) 지정한 시간이 흐르면(timeout) 또는 특정 작업의 수행이 끝나면 호출하도록 지정한 함수
```
setTimeout(function(){ 
        console.log("1초가 흐름");
}, 1000);
　
window.onload = function(){
        console.log("페이지 로딩 완료"); 
}
　
someFunction(function(){
        console.log("someFunction 수행 완료후 처리할 일");
});
```

---
## **배열 메서드를 속이기**
***
### ▶ 배열의 push() 메서드 기능
- 배열의 마지막에 지정한 요소를 추가한다.
- `this`로 지정된 Array 객체의 length 속성값에 해당하는 속성을 만들고 지정한 요소를 저장한 후 length를 하나 증가시킨다.
      
### ▶ Array의 push() 메서드를 이용하여 객체를 배열처럼 동작시키기
- length 속성 추가
- Array.prototype.push.call(`객체`, 추가할 요소)
      
### ▶ prototype
- 생성자에 정의된 속성과 메서드를 관리하는 속성
- 모든 객체에 자동으로 할당됨

---
## **연산 결과를 기억하는 함수**
***
### ▶ 메모이제이션(memoization)
- 이전의계산결과를기억하는기능을갖춘함수
- 함수는 객체이기 때문에 함수의 속성값으로 계산 결과 캐시
- 함수에 종속된 속성을 이용하기 때문에 외부에 노출하지 않고 함수 자체적 으로구현가능

### ▶ 장점
- 이미 수행한 복잡한 연산을 반복하지 않도록 함으로서 성능을 향상
- 사용자가 알수 없게 내부적으로만 동작
      
### ▶ 단점
- 캐시에필요한메모리사용량증가
- 비즈니스로직과캐싱기능의혼재
- 부하 테스트나 알고리즘의 성능 테스트가 어려워짐

---
## **연산 결과를 기억하는 함수**
***
### ▶ 메모이제이션(memoization) 예시
- 
```javascript
    function isPrime(num){
        if(!isPrime.answer) isPrime.answer = {};
        if(isPrime.answer[num] != undefined){
            return isPrime.answer[num];
        }
        var prime = true;
        for(var i=2; i<=num/2; i++){
            if(num % i == 0){
                prime = false;
                break;
            }
        }
        
        return isPrime.answer[num] = prime;
    }
    
    var start = new Date().getTime();
    console.log(3, isPrime(3));
    console.log(4, isPrime(4));
    console.log(1000000007, isPrime(1000000007));
    console.log(1000000007, isPrime(1000000007));
    console.log(1000000007, isPrime(1000000007));
    var finish = new Date().getTime();
    console.log("소요시간", finish-start + "ms");
```

???
function isPrime(num){
    var prime = true;
    for(var i=2; i<=num/2; i++){
        if(num % i == 0){
            prime = false;
            break;
        }
    }
    return prime;
}
var start = new Date().getTime();
console.log(3, isPrime(3));
console.log(4, isPrime(4));
console.log(1000000007, isPrime(1000000007));
console.log(1000000007, isPrime(1000000007));
console.log(1000000007, isPrime(1000000007));
var finish = new Date().getTime();
console.log("소요시간", finish-start + "ms");

---
## **가변 길이 인자 전달**
***
### ▶ apply(p1, p2) 메서드
- 두개의매개변수를가짐
- 첫 번째 매개변수(p1)에는 this로 사용할 객체를 전달
- 두 번째 매개변수(p2)에는 함수에 전달할 인자값 배열
      
### ▶ apply() 활용
- 배열 데이터를 각각의 매개변수로 분리하여 전달할 때

        Math.min(n1, n2, n3, ...)
        Math.max(n1, n2, n3, ...)
        
        var a = [e1, e2, e2, ...];
        Math.min(a[0], a[1], a[2], ...???)
        
        Math.min.apply(Math, a)
---
## **함수 오버로딩**
***
### ▶ 객체지향 언어의 오버로딩(Java, C#, Smalltalk, Ruby, Scala 등)
- 동일한 이름의 메서드를 여러개 정의 하는것
- 매개변수의 개수,타입 또는 순서를 다르게하여 각 메서드를 구분
- 하나의 메서드명만 기억하면 쉽게 사용 가능
```javascript
System.out.println(String str)
System.out.println(int i)
```

### ▶ 자바스크립트의 오버로딩
- 동일한 이름의 함수가 여러개 정의되면 마지막에 정의한 함수만 남음
- 매개변수의 타입과 개수를 구별하지 않으므로 오버로딩 불가
- 모든 함수에 암묵적으로 전달되는 arguments를 이용하면 비슷한 동작이 가능
- 단일 함수 내에서 arguments의 타입이나 개수를 체크해서 다른 코드로 분기 처리
- jQuery() 함수가 대표적       

---
## **함수 오버로딩 기법**
***
### ▶ 인자의 타입으로 구분
- typeof 연산자 이용

### ▶ 특정 매개변수의 존재 유무로 구분
- undefined 체크

### ▶ 인자의 수로 구분
- arguments.length
    - 모든함수가호출될때전달되는기본속성
    - 함수가호출될때전달되는매개변수의수
- 함수.length
    - 모든 함수에 기본으로 지정되는 속성
    - 함수를 선언할 때 지정한 매개변수의 수
   
---
## **함수 오버로딩 기법**
***
### ▶ 함수 오버로딩 기법 1
```javascript
var obj = {};
obj.calc = function(n1, n2, n3){
        if(3 == arguments.length) {
            return Math.max(n1, n2, n3);// 인자값이 세개일 경우 가장 큰 값을 반환
        } else {
            if(2 == arguments.length) {
                return n1 + n2;         // 인자값이 두개일 경우 합계를 반환
            } else {
                if(1 == arguments.length) {
                    return n1 * n1;     // 인자값이 하나일 경우 제곱값을 반환
                } else {
                    if(0 == arguments.length) {
                        return "인자값이 없습니다.";
                    }
                }
            }
        }
};
console.log(obj.calc());                // 인자값이 없습니다.
console.log(obj.calc(10));              // 100
console.log(obj.calc(10, 20));          // 30
console.log(obj.calc(200, 100, 300));   // 300
```

---
## **함수 오버로딩 기법**
***
### ▶ 함수 오버로딩 기법 2
```
function overloading(obj, name, fn){	// 객체, 메소드명, 실행할 함수
    var oldfn = obj[name];
    obj[name] = function(){
        if(fn.length == arguments.length){
            return fn.apply(this, arguments);
        }else if(typeof oldfn == "function"){
            return oldfn.apply(this, arguments);
        }
    };
}

var obj = {};
overloading(obj, "calc", function(){                // ①
	return "인자값이 없습니다.";
});
overloading(obj, "calc", function(n1){              // ②
	return n1 * n1;
});
overloading(obj, "calc", function(n1, n2){          // ③
	return n1 + n2;
});
overloading(obj, "calc", function(n1, n2, n3){      // ④
	return Math.max(n1, n2, n3);
});
```

---
## **함수 오버로딩 기법**
***
### ▶ 함수 오버로딩 기법 2 - 1
```
// 최초 호출
var oldfn = undefined;
obj.calc = function(){
	if(0 == arguments.length){
		return function(){
			return "인자값이 없습니다.";
		};
	}
};
```

---
## **함수 오버로딩 기법**
***
### ▶ 함수 오버로딩 기법 2 - 2
```
// 두번째 호출
var oldfn = function(){
	if(0 == arguments.length){
		return function(){
			return "인자값이 없습니다.";
		};
	}
};
obj.calc = function(){
	if(1 == arguments.length){
		return function(n1){
			return n1 * n1;
		};
	} else if(typeof oldfn == "function"){
		return function(){
			if(0 == arguments.length){
				return function(){
					return "인자값이 없습니다.";
				};
			}
		};
	}
};
```

---
## **함수 오버로딩 기법**
***
### ▶ 함수 오버로딩 기법 2 - 3
```
// 세번째 호출
obj.calc = function(){
	if(2 == arguments.length){
		return function(n1, n2){
			return n1 + n2;
		};
	}else if(typeof oldfn == "function"){
		return function(){
			if(1 == arguments.length){
				return function(n1){
					return n1 * n1;
				};
			}else if(typeof oldfn == "function"){
				return function(){
					if(0 == arguments.length){
						return function(){
							return "인자값이 없습니다.";
						};
					}
				};
			}
		};
	}
};
```

---
## **함수 오버로딩 기법**
***
### ▶ 함수 오버로딩 기법 2 - 4
```
// 네번째 호출
obj.calc = function(){
	if(3 == arguments.length){
		return function(n1, n2, n3){
			return Math.max(n1, n2, n3);
		};
	}else{
		return function(){
			if(2 == arguments.length){
				return function(n1, n2){
					return n1 + n2;
				};
			}else{
				return function(){
					if(1 == arguments.length){
						return function(n1){
							return n1 * n1;
						};
					}else{
						return function(){
							if(0 == arguments.length){
								return function(){
									return "인자값이 없습니다.";
								};
...
```

---
## **프로토타입이란?**
***
### ▶ prototype
- 모든 함수에 기본으로 부여되는 속성
- 초기값은 비어있는 객체이다.
- prototype에 추가한 속성은 해당 함수가 생성자로 사용될 때 생성된 인스턴스 에서 내부 링크로 참조되어 사용된다.
- 결국, prototype은 생성자 함수에서 생성될 객체의 속성과 메소드를 정의하는 역할을 한다.
```
    function Some(a, b){
        this.a = a;
        this.b = b;
    }
    Some.prototype = {
        m1: function(){ ... },
        m2: function(){ ... } 
    };
```

---
## **프로토타입과 생성자**
***
### ▶ 객체 초기화 순서
- 생성자 함수의 prototype 속성의 객체가 새로 만들어진 객체 인스턴스와 바인딩된다.(크롬은 \_\_proto\_\_ 속성)
- 생성자 함수 내에서 정의한 속성들이 객체 인스턴스에 추가된다.
    - 만약 프로토타입에 정의한 속성과 생성자에서 정의한 속성이 중복될 경우 생성자 내에서 정의한 속성이 프로토타입에 정의된 같은 이름의 속성보다 우선한다.

---
## **객체의 프로퍼티 참조**
***
### ▶ 객체의 프로퍼티 참조 순서(`프로토타입 체인`)
1. 객체에 해당 프로퍼티가 있으면 사용한다.
2. 객체에 연결된 프로토타입에 해당 프로퍼티가 있으면 사용한다.
3. 프로토타입에도 해당 프로퍼티가 없으면 연결된 프로토타입에서 찾는다.(찾을때까지 3번을 반복한다.)
4. 최상위 프로토타입인 Object까지 찾아봐서 해당 프로퍼티가 없다면 그 값은 undefined가 된다.
즉, 프로퍼티 참조는 해당 객체에서 먼저 찾고, 실패했을 때 프로토타입을 확인함

### ▶ constructor
- 모든 객체에 정의되어 있는 속성
- 해당 객체를 만드는데 사용된 생성자를 참조
- 객체가 자신의 프로토타입을 찾는 방법
- 객체.constructor.prototype

---
## **Object**
***
### ▶ 프로토타입 체인의 마지막 객체
- 모든 객체의 prototype 체인 마지막 객체는 Object이다.
- 즉, Array, String, Number, RegExp, Date, Function 등의 네이티브 객체와 Score, Person 등 사용자가 정의한 객체는 모두 프로토타입 체인에 의해서 자동으로 Object의 메소드를 사용할 수 있다.

### ▶ 네이티브 객체 생성자의 prototype
- 네이티브 객체 생성자도 prototype 속성이 있으므로 이곳에 속성을 추가해서 네이티브 객체의 기능을 확장할 수 있다.
- Prototype.js 라이브러리가 좋은 예이다.
    - Array.prototype.each()
    - HTMLElement.prototype.remove()

---
## **네이티브 클래스 확장 시 주의사항**
***
### ▶ Object 기능 추가
- Object를 확장하여 새로운 속성을 추가하면 생성되는 모든 객체가 해당 속성을 물려 받으므로 이에 따른 영향에 주의해야 함
- hasOwnProperty() 메소드로 객체에 직접 정의된 속성인지 확인 가능
      
### ▶ Number 기능 추가
- Number 객체의 확장된 속성을 사용할 때 변수에 담지 않고 리터럴로 직접 사용불가
- Number.prototype.add = function(n){...};
```
var a=10; a.add(20);    // (O)
10.add(20);             // (X)    
```

### ▶ 네이티브 클래스 상속
- Array.length 속성이 수정안되는 IE(8이하) 버그 같은 문제 발생
- 상속 보다는 위임으로 구현

---
## **생성자와 객체 타입**
***
### ▶ typeof 연산자
- 객체의 타입을 반환
```
typeof "hello"      -> "string"
typeof 10           -> "number"
typeof true         -> "boolean"
typeof []           -> "object"
typeof {}           -> "object“
typeof new Score()  -> "object"
```
- 기본 데이터 타입을 제외한 모든 인스턴스에 대해 object 반환

---
## **생성자와 객체 타입**
***
### ▶ instanceof 연산자
- 객체가 지정한 생성자를 통해서 생성되었는지 판단
- 기본 데이터타입의 리터럴 표현은 객체가 아니므로 생성자 함수가 없다.
- JSON 표기법으로 생성한 배열이나 객체는 내부적으로 Array, Object 생성자 함수를 통해 생성이 된다.
```
10 instanceof Number                    -> false
"hello" instanceof String               -> false
true instanceof Boolean                 -> false
//
new Number(10) instanceof Number        -> true 
new String("hello") instanceof String   -> true
new Boolean() instanceof Boolean        -> true
new Array() instanceof Array            -> true
[] instanceof Array                     -> true
new Object() instanceof Object          -> true
var obj={}; obj instanceof Object       -> true
new Score() instanceof Score            -> true
new Score() instanceof Object           -> true
```

---
## **상속과 프로토타입 체인**
***
### ▶ 프로토타입 체인을 이용한 상속 기능 구현
- 하위 클래스의 프로토타입을 상위 클래스의 객체로 지정
- 상위 클래스의 모든 속성을 물려받아 사용할 수 있음
```
function Score(){...}
Score.prototype.avg = function(){};
　
function SubScore(){...}
SubScore.prototype = new Score();
　
var sub = new SubScore();
sub.sum();
sub.avg();
```