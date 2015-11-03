---
class: center, middle

# **객체지향 Javascript 기본**
***
`- 자바스크립트 클로저 -`

---
## **클로저는 어떻게 동작하는가?**
***

### ▶ 클로저란?
- 함수를 선언할 때 만들어지는 유효 범위
- 함수가 선언되는 시점에 접근할 수 있는 모든 변수를 포함하는 유효 범위
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
## **클로저 용법**
***

### ▶ private 변수
- 외부에서 접근할 수 없는 속성을 지정할 때 사용하는 객체지향 언어의 기능(자바의 private 접근 지정자)
- 함수 내부에서 선언한 지역변수는 외부에서 접근하지 못하는 반면 내부 메소드에서는 클로저를 통해 접근 가능하다는 특징을 이용해서 구현
- 
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
---

```
추가 장표
```

---
## **클로저 용법**
***

### ▶ 콜백과 타이머
- 지정된 함수들이 임의의 시간 뒤에 비동기적으로 호출이 될 때 함수 외부의 데이터에 접근하는 경우
- 
		function setTimer(){
			var inner = 100; 
				
			setTimeout(function(){
				console.log(inner); 
			}, 1000);	
		} 
		
		setTimer();
---
## **클로저 용법**
***

### ▶ 부분 적용 함수
- 함수가 실행 되기 전에 인자를 미리 설정하는 기술
- 미리 정의된 인자를 가진 새로운 함수를 반환하고(커링, currying) 실제 호출 할 때에는 이렇게 반환된 프록시 함수가 사용됨
- Prototype.js의 curry() 메서드
- Functional.js의 partial() 메서드	

---
## **부분 적용 함수**
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
## **부분 적용 함수**
***

### ▶ Prototype.js의 curry() 메서드