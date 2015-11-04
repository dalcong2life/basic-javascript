---
class: center, middle

# **객체지향 Javascript 기본**
***
###`- 자바스크립트 클로저 -`

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
## **클로저 용법 1**
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
## **클로저 용법 2**
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
## **클로저 용법 3**
***

### ▶ 부분 적용 함수
- 함수가 실행 되기 전에 인자를 미리 설정하는 기술
- 미리 정의된 인자를 가진 새로운 함수를 반환하고(커링, currying) 실제 호출 할 때에는 이렇게 반환된 프록시 함수가 사용됨
- Prototype.js의 curry() 메서드
- Functional.js의 partial() 메서드	

---
## **.gray[클로저 용법 3 >] 부분 적용 함수 1**
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
## **.gray[클로저 용법 3 >] 부분 적용 함수 2**
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
## **클로저 용법 4**
***

### ▶ 함수 동작 오버라이딩
- 함수를 호출하는 사람이 눈치 채지 못하게 함수의 내부 동작을 변경
- 존재하는 함수의 동작을 수정
- 존재하는 정적 함수를 바탕으로 새로운 함수를 생성

---
## **.gray[클로저 용법 4 >] 오버라이딩 1**
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
　
someFunction.memoized(arg1);
someFunction.memoized(arg1);
```

---
## **.gray[클로저 용법 4 >] 오버라이딩 2**
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
　
var someFunction = (function(){ ... }).memoize();
　
someFunction(arg1); 
someFunction(arg1); 
```

---
## **즉시실행함수**
***

### ▶ 즉시실행함수(Immediate function)
- 함수 선언 후 곧바로 스스로를 호출하여 실행되는 함수

### ▶ 코드 실행 순서
- 함수 인스턴스를 생성한다.
- 함수를 실행한다.
- 함수를 폐기한다.(실행을 마치고 나면 더 이상 이 함수를 참조할 수 없음)
```
(function(){
		var msg = "함수 호출";
		console.log(msg);
})();
```
```
(function(msg){
		console.log(msg);
})("함수 호출");
```

---
## **즉시실행함수 용법 1**
***

### ▶ 임시 유효 범위와 private 변수 
- 코드를 함수로 감싸고 호출하면 해당 코드의 유효 범위가 함수로 제한
- 함수 내에서 사용하는 변수는 외부에 노출되지 않으므로 외부 변수와 충돌이 발생하지 않는다.
- 즉, 외부에서 접근할 수 없는 독립적인 공간을 확보할 수 있음
- 특정 코드 블럭을 독립적인 모듈로 사용할 수 있음
```
var count = 0;
var sum = 100;
var avg = 0;
// ……
/////////////////////////////////////////
　
		var sum = 0;
		for(var i=1; i<=100; i++){
			sum += i;
		}
		console.log(sum);	
　	
/////////////////////////////////////////
```

---
## **즉시실행함수 용법 1**
***

### ▶ 임시 유효 범위와 private 변수
- 
```
var count = 0;
var sum = 100;
var avg = 0;
// ……
/////////////////////////////////////////
		(function(){
			var sum = 0;
			for(var i=1; i<=100; i++){
				sum += i;
			}
			console.log(sum);	
		})();
/////////////////////////////////////////
```

---
## **즉시실행함수 용법 2**
***

### ▶ 매개변수 활용
- 
```
jQuery.ajax({
		url: "time.jsp",
		success: function(result){
			console.log(result);
		}
});
```
```
(function($){
		$.ajax({
			url: "time.jsp",
			success: function(result){
				console.log(result);
			}
		});
})(jQuery);
```

---
## **즉시실행함수 용법 3**
***

### ▶ 변수명 대체
- Some.long.reference.to.something 같은 복잡한 참조 관계를 짧은 변수로 대체
```
function(v) {
		Object.extend(v, {
			href : v._getAttr2,
			src : v._getAttr2,
			......
			onchange : v._getEv
		});
})(Element._attributeTranslations.read.values);
```

---
## **즉시실행함수 용법 4**
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
## **즉시실행함수 용법 4**
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
## **즉시실행함수 용법 5**
***

### ▶ 라이브러리 래핑
- 자바스크립트 라이브러리 개발 시 임시 변수들을 즉시실행함수 내부에 묶어놓음으로써 전역 네임스페이스를 더럽히지 않는다.
- 여러 라이브러리를 로딩하면서 발생하는 이름 충돌을 막을 수 있다.
- jQuery의 사용 예
```
(function(){
		var jQuery = window.jQuery = function(){
			// 초기화
			...
		};
})();
```


---
class: center, middle
# 끝