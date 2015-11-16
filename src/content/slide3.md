---
class: center, middle

# **객체지향 Javascript 기본**
***
###`- 클로저와 객체지향 프로그래밍 -`

---
class: center, middle

## **클로저**
***

---
## **클로저는 어떻게 동작하는가?**
***

### ▶ 클로저란?
- 이미 생명 주기가 끝난 외부 함수의 변수를 참조하는 함수
- 클로저로 인해 유효 범위가 사라진  변수와 함수를 사용할 수 있고, 변수의 경우 그 값을 변경할 수도 있다.
```
    var later;
    function outer(){
    	var innerValue = "outer의 지역변수";
    	var inner = function(){
    		console.log(innerValue);    // outer의 지역변수
    	}
    	inner();
    	later = inner;
    }
    outer();
    later();
```

---
## **클로저 용법 1**
***

### ▶ private 변수
- 외부에서 접근할 수 없는 속성을 지정할 때 사용하는 객체지향 언어의 기능(자바의 private 접근 지정자)
- 함수 내부에서 선언한 지역변수는 외부에서 접근하지 못하는 반면 내부 메소드에서는 클로저를 통해 접근 가능하다는 특징을 이용해서 구현
- 
```
function Counter(){
		this.count = 0;
		this.visit = function(){
			this.count++;
		};
		this.getCount = function(){
			return this.count;
		};
}
　
var c = new Counter();
c.visit();
c.visit();
console.log(c.count);       // 2
console.log(c.getCount());  // 2
```

---
## **클로저 용법 1/4**
***

### ▶ private 변수
```
function Counter(){
	var count = 0;
	this.visit = function(){
		count++;
	};
	this.getCount = function(){
		return count;
	};
}
　
var c = new Counter();
c.visit();
c.visit();
console.log(c.count);		 // undefined
console.log(c.getCount());	// 2 
```


---
## **클로저 용법 2/4**
***

### ▶ 콜백과 타이머
- 지정된 함수들이 임의의 시간 뒤에 비동기적으로 호출이 될 때 함수 외부의 데이터에 접근하는 경우
- 
```
	function setTimer(){
		var inner = 100; 
			
		setTimeout(function(){
			console.log(inner); 
		}, 1000);	
	} 
	　
	setTimer();
```


---
## **클로저 용법 3/4**
***

### ▶ 부분 적용 함수
- 함수가 실행 되기 전에 인자를 미리 설정하는 기술
- 미리 정의된 인자를 가진 새로운 함수를 반환하고(`커링`, currying) 실제 호출 할 때에는 이렇게 반환된 프록시 함수가 사용됨
- Prototype.js의 curry() 메서드
- Functional.js의 partial() 메서드	

---
## **.gray[클로저 용법 3/4 >] 부분 적용 함수 1**
***

### ▶ Prototype.js의 curry() 메서드
- 커링 기능을 구현한 메서드
- 인자를 미리 순서대로 보내놓고 실제 사용시에는 나머지 인자값만 전달
```
Function.prototype.curry = function(){
		var fn = this;
		var args = Array.prototype.slice.call(arguments);
　
		return function(){
			var concatArgs = args.concat(Array.prototype.slice.call(arguments));
			return fn.apply(this, concatArgs); 
		};
};
```
```
Math.maxAbove500 = Math.max.curry(500);
　
console.log(Math.maxAbove500(10, 20, 30));	// 500
console.log(Math.maxAbove500(10, 2000, 30));  // 2000	
```

---
## **.gray[클로저 용법 3/4 >] 부분 적용 함수 2**
***

### ▶ Functional.js의 partial() 메서드
- 커링 기능을 구현한 메서드
- 인자를 미리 보내놓고 실제 사용시에는 비워둔 자리의 인자값만 전달
- 인자를 보낼 때 비워둘 자리에는 undefined를 전달
```
Function.prototype.partial = function() {
		var fn = this, args = Array.prototype.slice.call(arguments);
		　
		return function() {
			var tmpArgs = args.slice();
			var arg = 0;
			for (var i = 0; i < args.length && arg < arguments.length; i++) {
				if (tmpArgs[i] === undefined) {
					tmpArgs[i] = arguments[arg++];
				}
			}
			return fn.apply(this, tmpArgs);
		};
};
　
var delay = setTimeout.partial(undefined, 1000); 
delay(function(){ 
		console.log("1초 후에 출력."); 
});
```

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
## **클로저 용법 4/4**
***

### ▶ 함수 동작 오버라이딩
- 함수를 호출하는 사람이 눈치 채지 못하게 함수의 내부 동작을 변경
- 존재하는 함수의 동작을 수정
- 존재하는 정적 함수를 바탕으로 새로운 함수를 생성

---
## **.gray[클로저 용법 4/4 >] 오버라이딩 1**
***

### ▶ 존재하는 함수의 동작을 수정
- 클로저가 필요 없음
- 메모이제이션 예제
```
Function.prototype.memoized = function(key) {
		this._values = this._values || {};
		return this._values[key] !== undefined ?
			this._values[key] : this._values[key] = this.apply(this, arguments);
};
　　
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
　
isPrime.memoized(1000000007);
isPrime.memoized(1000000007);
```

---
## **.gray[클로저 용법 4/4 >] 오버라이딩 2**
***

### ▶ 존재하는 정적 함수를 바탕으로 새로운 함수를 생성
- 클로저 이용
- 메모이제이션 예제
```
Function.prototype.memoize = function(){
		var fn = this;
		return function(){
			return fn.memoized.apply(fn, arguments);
		};
};
　
var memoIsPrime = isPrime.memoize();
　
memoIsPrime(1000000007); 
memoIsPrime(1000000007); 
```

???
Function.prototype.memoized = function(key) {
		this._values = this._values || {};
		return this._values[key] !== undefined ?
			this._values[key] : this._values[key] = this.apply(this, arguments);
};
　　
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

---
## **즉시실행함수 용법 5/5**
***

### ▶ 루프에서 사용
- 루프 내부에서 하나의 변수를 사용할 경우
- 함수의 유효 범위안에서 각각의 클로저로 독립적인 변수 접근 가능
```
var btn = document.querySelectorAll('.btn');
for(var i=0; i < btn.size(); i++){
		btn[i].onclick = function(){
			alert(i);
		};
}
```
&nbsp;
<button class="btn111">버튼1</button>
<button class="btn111">버튼2</button>
<button class="btn111">버튼3</button>

---
## **즉시실행함수 용법 5/5**
***

### ▶ 루프에서 사용
- 
```
var btn = document.querySelectorAll('.btn');
for(var i=0; i < btn.size(); i++){
		(function (n) {
			btn[n].onclick = function(){
				alert(n);
			};
		})(i);	
}
```
&nbsp;
<button class="btn222">버튼1</button>
<button class="btn222">버튼2</button>
<button class="btn222">버튼3</button>

---
class: center, middle

## **객체지향 프로그래밍**
***

---
## **상속과 프로토타입 체인**
***
### ▶ 프로토타입 체인을 이용한 상속 기능 구현
- 하위 클래스의 프로토타입을 상위 클래스의 객체로 지정
- 상위 클래스의 모든 속성을 물려받아 사용할 수 있음
```
function Score(){
        this.sum = function () {return ...}    
}
Score.prototype.avg = function(){};
　
function SubScore(){...}
SubScore.prototype = new Score();
　
var sub = new SubScore();
sub.sum();
sub.avg();
```

---
## **상속과 프로토타입 체인**
***
### ▶ 1. Score 함수 생성 및 prototype에 avg 메서드 추가
```
function Score() {
    this.sum = function () {return ...}    
}
Score.prototype.avg = function(){};
```
![Default-aligned image](img/prototype_chain_1.png)

---
## **상속과 프로토타입 체인**
***
### ▶ 2. SubScore 생성
```
function SubScore(){...}
```
![Default-aligned image](img/prototype_chain_2.png)

---
## **상속과 프로토타입 체인**
***
### ▶ 3. SubScore의 prototype을 Score.prototype으로 변경
```
SubScore.prototype = new Score();
```
![Default-aligned image](img/prototype_chain_3.png)

---
## **상속과 프로토타입 체인**
***
### ▶ 4. SubScore로 객체 생성 후 기능 호출
```
var sub = new SubScore();
sub.sum();
sub.avg();
```

---
## **상속과 프로토타입 체인**
***
### ▶ 최종 결과
![Default-aligned image](img/prototype_chain_5.png)

---
## **객체지향 프로그래밍**
***

### ▶ 클래스, 생성자, 메서드
- 자바스크립트 함수로 구현 가능 

### ▶ 생성자 함수 정의
- 클래스 및 생성자 역할
- `new` 키워드로 인스턴스를 생성해서 사용
```
function Person(name) {
		this.name = name;
	　	
		this.getName = function() {
			return this.name;
		};
	　	
		this.setName = function(value) {
			this.name = value;
		};
}
　
var me = new Person('me');
var you = new Person('you');
var him = new Person('him');
```

---
## **객체지향 프로그래밍**
***

### ▶ 중복되는 영역 제거
- 공통 메소드를 함수에 구현하면 자원 낭비
- 함수 객체의 프로토타입으로 해결
```
function Person(name) {
		this.name = name;
}
　
Person.prototype.getName = function() {
		return this.name;
};
　
Person.prototype.setName = function(value) {
		this.name = value;
};
　
var me = new Person('me');
var you = new Person('you');
console.log(me.getName());
console.log(you.getName());
```

---
## **객체지향 프로그래밍**
***

### ▶ 메소드 정의하는 공통 함수 작성
- 더글라스 클락포드가 소개
```
Function.prototype.method = function(name, func) {
		if(!this.prototype[name]) {
			this.prototype[name] = func;
		}
};
　
function Person(name) {
		this.name = name;
}
Person.method("getName", function() {
		return this.name;
});
Person.method("setName", function(value) {
		this.name = value;
});
　
var me = new Person('me');
var you = new Person('you');
console.log(me.getName());
console.log(you.getName());
```

---
## **상속**
***

### ▶ 프로토타입을 이용한 상속
- 자바스크립트는 클래스 개념이 없음
- 객체의 프로토타입으로 상속을 구현

---
## **상속 구현 방법 1/2**
***

### ▶ 객체 리터럴로 생성된 객체의 상속
- 더글라스 클락포드가 소개
- ECMAScript5에서 Object.create() 함수로 제공
```
function create_object(o) {
		var F = function() {};
		F.prototype = o;
		return new F();
}
　
var person = {
		name: '홍길동',
		getName: function() {
			return this.name;
		},
		setName: function(value) {
			this.name = value;
		}
};
　
var student = create_object(person);
student.setName('임꺽정');
console.log(student.getName());
```

---
## **상속 구현 방법 2/2**
***

### ▶ 클래스 역할을 하는 생성자 함수로 상속
- 자식 함수 객체의 프로토타입으로 부모 함수 객체의 인스턴스를 참조
```
var Person = function (name) {
	this.name = name;
};
Person.prototype.getName = function() {
	return this.name;
};
Person.prototype.setName = function(value) {
	this.name = value;
};
　
var Student = function(name) {};
　
var p1 = new Person("홍길동");
*Student.prototype = p1;
　
var s1 = new Student("임꺽정");
s1.setName("임꺽정");
console.log(s1.getName());
```

---
## **상속 구현 방법 2/2**
***

### ▶ 클래스 역할을 하는 생성자 함수로 상속
- 부모 클래스 생성자 호출 방법 
```
var Person = function (name) {
		this.name = name;
};
Person.prototype.getName = function() {
		return this.name;
};
Person.prototype.setName = function(value) {
		this.name = value;
};
　
var Student = function(name) {
	*	Person.apply(this, arguments);
};
　
var p1 = new Person("홍길동");
Student.prototype = p1;
　
var s1 = new Student("임꺽정");
console.log(s1.getName());
```

---
## **상속 구현 방법 2/2**
***

### ▶ 부모 함수의 인스턴스와 자식 함수의 인스턴스 분리
- 중개자 이용 방법
```
var Person = function (name) {
		this.name = name;
};
Person.prototype.getName = function() {
		return this.name;
};
Person.prototype.setName = function(value) {
		this.name = value;
};
var Student = function(name) {
		Person.apply(this, arguments);
};
　
var F = function() {};
F.prototype = Person.prototype;
Student.prototype = new F();
Student.prototype.constructor = Student;
Student.super = Person.prototype;
　
var s1 = new Student('홍길동');
console.log(s1.getName());
```

---
## **상속 구현 방법 2/2**
***

### ▶ 부모 함수의 인스턴스와 자식 함수의 인스턴스 분리
- Javascript Patterns 저자 스테파노프
- 즉시 실행 함수와 클로저를 활용하여 최적화된 함수를 소개
```
var inherit = (function(Parent, Child) {
		var F = function() {};
　		
		return function(Parent, Child) {
			F.prototype = Parent.prototype;
			Child.prototype = new F();
			Child.prototype.constructor = Child;
			Child.super = Parent.prototype;
		};
})();
```