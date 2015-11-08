class: center, middle

![Default-aligned image](img/wordle-js2.png)

---

.left-column[
.black[
    # 목차
]

#### 1. 자바스크립트 기초 문법 (11/6)
.black[
    #### 2. 자바스크립트 함수와 프로토타입
]
 
#### 3. 클로저와 객체지향 프로그래밍
#### 4. 함수형 프로그래밍
]


---
class: center, middle

# **객체지향 Javascript 기본**
***
###`- 자바스크립트 기초 문법 -`

---
## **자바스크립트란?**
***
### ▶ 자바스크립트
- 단순히 링크 위주의 하이퍼텍스트로만 이루어진 웹 페이지의 동작을 향상시키기 위해 만들어진 프로그래밍 언어
- 네스케이프사의 브렌던 아이크가 개발. 네스케이프 네비게이터2.0에 탑재

### ▶ Javascript?  LiveScript?  Jscript?  ECMAScript?  Java?
- 모카 -> 라이브스크립트 -> 자바스크립트로 이름 변경
- 네스케이프 네이게이터에 자바 탑재를 논하던 시점에 홍보효과를 위해서 [자바]라는 이름을 차용했을 뿐 자바언어와는 전혀 무관
- 인터넷 익스플로러3.0에 비슷한 기능이 Jscript란 이름으로 탑재
- ECMA에서 표준화(ECMAScript)

--

.red.bold[*] 그냥 다 자바스크립트라 부르면 됨(자바 빼고)

---
## **역사**
***

|날짜|설명|
|---|---|
| 1996년 3월  |  네비게이터2.0에 JavaScript 탑재  |
| 1996년 8월  |  익스플로러3.0에 JScript 탑재     |
| 1997년 6월  |  ECMAScript 1.0표준(ECMA-262)   |
| 1998년 6월  | ECMAScript 2 |
| 1999년 12월 | ECMAScript 3  |
| 2009년 12월 | ECMAScript 5(4는 폐기됨)|
| 2011년 6월| ECMAScript 5.1|
| 2015년 6월| ECMAScript 6(코드명 Harmony)|

---
## **자바스크립트 개발**
***
### ▶ 대다수 개발자들의 접근법
- C, C++, Java 등의 프로그램 개발능력 갖춤
- 웹개발 시 폼 검증 및 달력 컴포넌트 등의 자바스크립트 기능이 필요함
- C, Java와 문법이 비슷해서 한 시간에 문법 마스터
- 심지어 만들려고 하는 비슷한 소스코드도 웹 상에 널려있음
- 급한대로 copy & paste 해서 조금 수정해보니 동작함
- 필요할 때마다 여기저기 찾아보고 귀동냥으로 자바스크립트 마스터
      
### ▶ 하지만 지금은?
- Web2.0, RIA, Ajax, DOM, JSON, HTML5 등 자바스크립트의 활용 범위가 증가함
- jQuery 같은 비교적 간단한 라이브러리부터 Ext.js, Backbone.js 등 대규모 프레임워크까지 라이브러리가 폭발적으로 많아짐
- 체계적이지 않은 자바스크립트 지식으로는 라이브러리 사용이 어려움
- 라이브러리 소스를 열어봐도 외계어로 되어있어서 해석조차 불가능
  
---
## **자바스크립트로 할 수 있는 일**
***
### ▶ 유효성 검증
- 사용자의 폼 입력 데이터 유효성 검증
- 필수 입력사항 확인
- 데이터 형식(문자, 숫자, 이메일 등)
      
### ▶ 이벤트 처리
- 사용자가 브라우저 내에서 발생시키는 이벤트에 대한 처리
- 클릭, 마우스 이동, 키보드 입력 등
      
### ▶  문서 제어(DOM)
- HTML 문서에 요소를 생성, 삽입, 이동, 삭제 등 변경 작업

---
## **자바스크립트로 할 수 있는 일**
***
### ▶ 서버와 통신
- Ajax
      
### ▶  HTML5
- 데이터관리, 실시간 통신, 위치추적, 멀티스레드, 디바이스 제어
      
### ▶  서버사이드 프로그래밍
- Node.js 

---
## **자바스크립트 코드의 위치**
***
### ▶ HTML 문서내에 &lt;script&gt; 태그를 이용하여 직접 코드 기술
- 
```javascript
    ...
    <head>
        <script type="text/javascript">
    	    alert("Hello World!!!");
        </script>
    </head>
    ...    
```

--
***
- 
```
    <body>
        ...
        <script type="text/javascript">
    	    alert("Hello World!!!");
        </script>
    </body>
</html>           
```

---
## **자바스크립트 코드의 위치**
***
### ▶ xxx.js 파일 작성
- 
```javascript
    alert("Hello World!!!");
```

### ▶ &lt;script&gt; 태그의 src 속성으로 지정
- 
```javascript
...
    <head>
        <script type="text/javascript" src="hello.js"></script>
    </head>
...    
```

--
***
- 
```
    <body>
        ...
        <script type="text/javascript" src="hello.js"></script>
    </body>
</html>           
```

---
## __명령문과 주석__
***
### ▶ 명령문
- 자바스크립트는 명령문의 집합으로 구성되며 인터프리터가 명령문을 순차적으로 해석하여 실행
- 명령문은 줄바꿈이나 ;(세미콜론)으로 구분
```javascript
  명령문1;
  명령문2;
```

### ▶ 주석
- 한 줄 주석
```javascript
  // 주석입니다.
```
- 블럭 주석
```remark
  /*
      블럭 주석입니다.
　*/
```

---

## __리터럴__
***

### ▶ 프로그램에 직접 나타나는 데이터 값
- 10
- 3.14
- "Hello"
- 'World'
- true
- false
- /,\s*/
- null
- [10, 20]
- {name: "김철수", age: 30}


---
## __변수(Variable)__
***

### ▶ 변수 선언
- var 변수명;
- var 변수명=초기값;
```remark
  var a;
  var a, b;
  var a=10, b=100;
```

### ▶ 식별자 명명 규칙
- `대소문자 구별`
- 예약어를 제외한 알파벳, 한글, <b>_</b>, $, 숫자
- 첫 글자는 숫자가 올 수 없음

---
## **데이터 타입**
***

### ▶ 기본 타입
- 숫자(Number)
- 문자열(String)
- 논리값(Boolean)
- null
- undefined

### ▶ 참조 타입
- 객체(Object)
- 배열(Array)
- 함수(Function)
- 정규표현식(RegExp)

---
## **데이터 타입**
***
### ▶ 강형(strongly typed) 언어
- 변수 선언시 데이터 타입을 지정하는 언어(C++, Java 등의 주류언어)
- 자바의 예
  - String name = "홍길동";
  - int age = 30;
  - ~~name = "김철수";~~

### ▶ 약형(weakly typed) 언어
- 변수를 선언하지 않고 쓰거나 선언시 데이터 타입을 지정하지 않는 언어
- 값에 따라서 자동으로 데이터 타입이 결정됨
- 자바스크립트의 예
  - var name = "홍길동"; 
  - var age = 30;
  - name = "김철수";  

---
## **기본 데이터 타입**
***
### ▶ 숫자(Number)
- 64비트 부동소수점 방식
- 정수, 실수, 음수, 양수 구별 없음
- var temp = 15;
- var temp = 15.3;

### ▶ 문자열(String)
- var name = "김철수";
- var name = ‘김철수’;
- var msg = "김철수가 ‘안녕’ 이라고 말했다."; 
- ~~var msg = "김철수가 "안녕" 이라고 말했다.";~~
- var msg = "김철수가 \"안녕\" 이라고 말했다.";
- name[0], msg[1] : 한 번 생성된 문자열은 읽기만 가능 수정은 불가능.

### ▶ 논리값(Boolean)
- 참(true) 또는 거짓(false) 둘 중 하나의 값을 가지는 데이터
- var male = true;
- var male = false;

---
## **기본 데이터 타입**
***
### ▶ undefined
- 값이 없음을 나타냄
- 값이 할당되지 않은 변수에 타입과 값 모두 `undefined`로 지정됨
- var undefinedVar;

### ▶ null
- 값이 없음을 나타냄
- 개발자가 명시적으로 값이 비어있음을 지정
- 데이터 타입은 `Object`가 된다.
- var nullVar = null;
- null 타입 변수인지를 확인 할 때는 일치 연산자(===)를 사용
```
    console.log(typeof nullVar === null);   // false
    console.log(nullVar === null);          // true
```

---
## **연산자**
***
### ▶ 산술 연산자
- +, -, *, /, %
- 1 + 4
- 1 + 4 * 5
- (1 + 4) * 5
- .bold.red[*]`9 / 4 = 2.25`, 정수 필요 시 Math.floor, Math.round 메소드 사용
- 9 % 4
- "나이는 " + age + " 입니다."; (결합 연산자)

### ▶ 대입 연산자
- 우측 항목을 계산한 후 좌측 항목에 대입(=, +=, -=, *=, /=)
```javascript
  var a = 10 + 5;
  var sum = 20;
  sum += a; // (sum = sum + a;)
```

---
## **연산자**
***
### ▶ 증감 연산자
- 값을 1 증가 또는 감소(++, --)
- count++	(count = count + 1)
- count--	(count = count - 1)

### ▶ 비교 연산자
- 두 항을 비교하여 참이면 true, 거짓이면 false를 반환
- \>, <, >=, <=, ==, ===, !=, !==
- 1 > 2 (false)
- 10 <= 10 (true)
- 100 == "100" (true)
- 100 === "100" (false)
- 100 != 100 (false)
- 조건문에서 true/false의 기준
  - false, 0, ‘’, null, undefined -> false
  - 나머지는 true ("false" 포함)

---
## **연산자**
***
### ▶ 비교 연산자
- ===/!== : 데이터 타입과 값이 같을 때 참
- ==/!= : 같은 값일 때 참(데이터 타입 자동 변환)
```
    '' == '0'   // 거짓
    0 == ''     // 참
    0 == '0'    // 참
    
    false == 'false'    // 거짓
    false == '0'        // 참
    
    false == undefined  // 거짓
    false == null       // 거짓
    null == undefined   // 참
    
    ' \t\r\n ' == 0     // 참
```
--
.footnote[.bold.red[*] ==/!= 사용하지 말고 ===/!== 사용할 것]

---
## **연산자**
***
### ▶ 논리 연산자
- || (논리합)
  - 일반적인 언어에서는 둘 중 하나라도 참이면 참을 반환하는 동작이지만 자바스크립트에서는 다음의 규칙을 따른다.
  - 앞의 값이 참이면 앞의 값 반환
  - 앞의 값이 거짓이면 뒤의 값 반환
  - var invalidId = (id.length < 4) || (id.length > 12);
  - event = event || window.event;
- && (논리곱)
  - 일반적인 언어에서는 둘 중 하나라도 거짓이면 거짓을 반환하는 동작이지만 자바스크립트에서는 다음의 규칙을 따른다. 
  - 앞의 값이 참이면 뒤의 값 반환
  - 앞의 값이 거짓이면 앞의 값 반환
  - var validId = (id != null) && (id.length > 4);
- ! (부정) 
  - 참이면 거짓, 거짓이면 참 반환
  - !(10 < 100) -> false
  - `!!undefined` === false(boolean) 




---
## **논리 연산자 사용 예시**
***
### ▶ 크로스 브라우징(IE 8 이벤트 처리)(.bold.red[*])
```
// DOM API
window.onload = function(){
	var div = document.getElementById("area");
	//div.addEventListener("click", printPosition, false); // IE8 동작 안함
	div.onclick = printPosition;
};

function printPosition(e){
	e = e || window.event;
	
	//if(!e) e = window.event;  ------------ ①
	// or
	//if(e == undefined){       ------------ ②
	//	e = window.event;
	//}
    
	console.log(e.clientX + ", " + e.clientY);
}
```

<div style="border-style: dotted; width: 160px;height: 100px;" id="area">

---
## **조건문**
***
### ▶ if 문
- 지정한 조건식이 참(true)일 경우 해당 구문 수행
```javascript
  if(조건식){
      수행구문1;
      수행구문2;
  }
```
```javascript
  var num = 9;
  if(num < 10){
        alert("num 값은 10보다 작습니다.");
  }
```

---
## **조건문**
***
### ▶ if ~ else 문
- 지정한 조건식이 참일 경우와 거짓일 경우 각각 해당 구문 수행
```javascript
  if(조건식){
  	수행구문1;
  	수행구문2;
  	...
  }else{
  	수행구문3;
  	수행구문4;
  	...
  }
```
```javascript
  var num = 9;
  if(num % 2 == 0){	
      alert("num 값은 짝수입니다.");
  }else{
  *   alert("num 값은 홀수입니다.");
  }
```

---
## **조건문**
***
### ▶ if ~ else if 문
- 지정한 조건식이 참일 경우 해당 구문을 수행하고 거짓일 경우 else if 문의 조건식을 순차적으로 비교하여 참에 해당하는 구문 수행

.left_code[
```
if(조건식1){
  수행구문1;
  수행구문2;
}else if(조건식2){
  수행구문3;
  수행구문4;
}else if(조건식3){
  수행구문5;
  수행구문6;
}else{
  수행구문7;
  수행구문8;
} 
```]

.right_code[
```
var age = 19;
if(age >= 30){	
  alert("30대 이상입니다.");
}else if(age >= 20){
  alert("20대 입니다.");
}else if(age >= 10){
  alert("10대 입니다.");
}else{
  alert("10살 미만입니다.");
}
```
]

---
## **조건문**
***
### ▶ switch ~ case 문
- switch에 지정한 비교값과 매칭되는 case 구문 수행(break 구문을 만날 때까지)
```javascript
  switch(비교값) {
      case 값1:
        수행구문1;
      case 값2:
        수행구문2;
        break;
      case 값3:
        수행구문3;
        수행구문4;
        ...
      default:
        수행구문5;
  }
```


---
## **반복문**
***
### ▶ while 문
- 지정한 조건식이 참일 경우 조건이 거짓이 될 때까지 해당 블럭을 반복하여 수행

.left_code[
```javascript
while(조건식){
    반복할 구문1;
    반복할 구문2;
}
```]

.right_code[
```
var sum = 0;
var i = 0;
while(i <= 10){
    sum += i;
    i++;
}
alert(sum);
```]

---
## **반복문**
***
### ▶ for 문
- 지정한 횟수만큼 반복적인 작업을 할 경우 사용
- 초기화: 조건식에 사용되는 변수를 초기화
- 조건식: 반복문을 실행할지 체크
- 증감식: 조건식에 사용되는 변수값을 증감

.left_code[
```javascript
for(초기화; 조건식; 증감식){
    반복할 구문1;
    반복할 구문2;
}
```]

.right_code[
```
var sum = 0;
for(var i=0; i<=10; i++){
    sum += i;
}
alert(sum);
```]

---
## **참조형 데이터 타입(Object, 객체)**
***
### ▶ Object
- key-value 쌍의 데이터를 나타냄(속성, property)
- 속성의 값으로 모든 데이터 타입 지정 가능
  - 값으로 함수가 지정된 속성을 메소드(method)라 함
- 여러개의 속성을 포함할 수 있음
```
    var person = {
        kor: 100,
        eng: 80,
        math: 90,
        sum: function () {
            return this.kor + this.eng + this.math;
        },
        grade: [1,2,3],
        '': 'empty attr',
        'var': 'reserve keyword',
        'full-name': '홍길동',
        nick_name: '번쩍'
    };
```


---
## **객체 생성**
***
### ▶ 객체 생성 1 - Object 생성자 함수
- Object 생성 후 속성과 기능 부여
- 객체의 속성과 기능에 접근할 때는 마침표(.) 표기법 또는 대괄호([]) 표기 사용
- 
```javascript
  var score = new Object();                               
 
  score.kor = 100;
  score.eng = 80;
  score.math = 90;
 
  score.sum = function (){
        return this.kor + this.eng + this.math;
  };
 
  alert(score.kor + "+" + score.eng + "+" + score["math"] + "=" + score.sum());
```

---
## **객체 생성**
***
### ▶ 객체 생성 2 - 객체 리터럴
- JSON(JavaScript Object Notation) 표기법 이용
- {속성명1: 속성값1, 속성명2: 속성값2, ...}
- 
```javascript
  var score = {
  	kor: 100,
  	eng: 60,
  	math: 70,
  	sum: function(){
  		return this.kor + this.eng + this.math;
  	}
  };
          
  alert(score.kor + "+" + score.eng + "+" + score.math + "=" + score.sum());
```

---
## **객체 프로퍼티 접근하기**
***
### ▶ 객체 프로퍼티 읽기/쓰기/갱신
```
var foo = {
    name: 'foo',
    major: 'computer science'
};

// 읽기
console.log(foo.name);          // (출력값) foo
console.log(foo['name']);      // (출력값) foo
console.log(foo.nickname);      // (출력값) undefined

// 갱신
foo.major = 'electronics engineering';
console.log(foo.major);         // (출력값) electronics engineering
console.log(foo['major']);     // (출력값) electronics engineering

// 동적 생성
foo.age = 30;
console.log(foo.age);           // (출력값) 30

// 대괄호 표기법만 사용해야 할 경우
foo['full-name'] = 'foo bar';
console.log(foo['full-name']);  // (출력값) foo bar
console.log(foo.full-name);     // (출력값) NaN
```

---
## **참조형 데이터 타입(Object, 객체)**
***
### ▶ 객체의 모든 속성 접근(.bold.red[*])
- for in 구문
```
  for (var key in obj){ ... };
```

### ▶ 속성 삭제
- delete 연산자
```
  delete obj.name;
```

### ▶ 참조타입의 특징
- 기본 데이터 타입은 실제 데이터를 저장하고 다룸
  - 함수 호출 방식: 값에 의한 호출
- 참조형 데이터 타입은 실제 데이터가 있는 위치의 주소를 저장하고 다룸
  - 함수 호출 방식: 참조에 의한 호출

---
## **참조형 데이터 타입(Array, 배열)**
***
### ▶ 배열
- `자바스크립트 객체의 특별한 형태`
- 어떤 위치에 어느 타입의 데이터를 지정하더라도 에러가 발생되지 않음
- 하나의 변수에 여러개의 값을 지정하는 데이터 구조
- index를 이용하여 각 요소를 참조(0부터 시작)

### ▶ 생성
- 크기를 미리 지정하지 않음
- Array 생성자 함수로 생성
```
  var score = new Array();
```
- 배열 리터럴
```
  var score = [];
```

---
## **참조형 데이터 타입(Array, 배열)**
***
### ▶ 초기화
- Array 클래스로 생성 및 초기화
```
  var score = new Array(90, 70, 100);
```
- JSON 표기법으로 생성 및 초기화
```
  var score = [90, 70, 100];
```

### ▶ 요소 읽기
- index 이용
```
  score[3]
```

### ▶ 배열 요소의 수
- length 속성

---
## **참조형 데이터 타입(Array, 배열)**
***
### ▶ 배열 length 프로퍼티(.bold.red[*])
- 
```
// 빈 배열
var emptyArr = [];
console.log(emptyArr[0]);       // (출력값) undefined
　
// 배열 요소 동적 생성
emptyArr[0] = 100;
emptyArr[3] = 'eight';
emptyArr[7] = true;
console.log(emptyArr);          // (출력값) [100, 3: "eight", 7: true]
console.log(emptyArr.length);   // (출력값) 8
　
emptyArr.length = 2;
console.log(emptyArr);          // (출력값) [100]
```

---
## **참조형 데이터 타입(Array, 배열)**
***
### ▶ 배열과 객체
- length 프로퍼티 존재 여부
- 배열 표준 메서드 호출 여부(ex:push())
- Object.prototype과 Array.prototype
```
// 배열
var colorArr = ["orange", "yellow", "green"];
console.log(colorArr[0]);       // (출력값) orange 
console.log(colorArr[1]);       // (출력값) yellow
console.log(colorArr[2]);       // (출력값) green
// 객체
var colorObj = {
        '0': "orange",
        '1': "yellow",
        '2': "green",
};
console.log(colorObj[0]);       // (출력값) orange
console.log(colorObj[1]);       // (출력값) yellow
console.log(colorObj[2]);       // (출력값) green
// typeof 연산자 비교
console.log(typeof colorArr);   // (출력값) object
console.log(typeof colorObj);   // (출력값) object
```

---
## **참조형 데이터 타입(Array, 배열)**
***
### ▶ 배열의 프로퍼터 동적 생성과 열거(.bold.red[*])
- 배열의 length 프로퍼티는 배열 원소의 가장 큰 인덱스가 변했을 경우만 변경됨
```
var arr = ['zero', 'one', 'two'];
console.log(arr.length);        // (출력값) 3
　
arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length);        // (출력값) 3
　
arr[3] = 'red';
console.log(arr.length);        // (출력값) 4   
// 배열 객체 출력
　
// for in (순서를 보장하지 못함)
for (var prop in arr) {
        console.log(prop, arr[prop]);
}
// for
for (var i=0; i < arr.length; i++) {
        console.log(i, arr[i]);
}
```

---
## **참조형 데이터 타입(Array, 배열)**
***
### ▶ 배열 요소 삭제
- splice(start, deleteCount, [item]) 배열 메소드 사용
    - start: 배열의 시작 위치
    - deleteCount: start에서 지정한 시작 위치부터 삭제할 요소의 수
    - item: 삭제할 위치에 추가할 요소
-     
```
var arr = ["zero", "one", "two"];
delete arr[1];                  // ["zero", undefined, "two"]
console.log(arr.length);        // (출력값) 3   
```
```
var arr = ["zero", "one", "two"];
*var delArr = arr.splice(2, 1);  // delArr===["two"], arr===["zero", "one"]
console.log(arr.length);        // (출력값) 2
```

---
## **참조형 데이터 타입(Array, 배열)**
***
### ▶ 유사 배열 객체(.bold.red[*])
- length 프로퍼티를 가진 객체
- apply() 메소드를 사용해서 배열 메서드 호출 가능
```
function printArr(arr){
        for(var i=0; i<arr.length; i++){
	        console.log(arr[i]); // arr[0], arr[1], arr[2]
	    }
}
　
var colorArr = ['orange', 'yellow', 'green'];
printArr(colorArr);
　
var colorObj = {
	    0: 'orange',
	    1: 'yellow',
	    2: 'green',
	    length: 3
};
printArr(colorObj);
　
*Array.prototype.push.apply(colorObj, ['red']);
printArr(colorObj);
```

---
## **참조형 데이터 타입(Function, 함수)**
***
### ▶ 함수
- 명령어의 묶음
- 특정 기능을 재사용 하고 싶을 때 작성
- 함수이름, 인자목록, 실행구문, 반환값으로 구성됨
```
  function 함수명(변수1, 변수2, ...){
  	실행할 구문1;
  	실행할 구문2;
  	......
  	return 반환값;     // 리턴 문 생략되더라도 'undefined'가 반환됨
  }
```

### ▶ 함수 사용(호출)
-  
```
  var result = 함수명(매개변수값1, 매개변수값2, ...);
```

---
## **변수 스코프**
***
### ▶ 전역 변수
- 함수 외부에서 선언한 변수
- 스크립트 내 어디에서나 접근 가능
- 페이지가 로딩될 때 한번 생성하여 값이 유지됨

### ▶ 지역 변수
- 함수 내부에서 선언한 변수
- 해당 함수 안에서만 접근 가능
- 함수가 호출될 때마다 새로 생성하여 값이 초기화
- `함수 내부에서 선언하지 않고 바로 사용하는 변수는 전역 변수로 동작`

### ▶ 변수 우선순위
- 변수는 가까운 곳부터 찾는다.
- 즉, 지역변수 영역에서 먼저 찾고 없을 경우 전역변수에서 찾는다.

---
## **변수 스코프**
***
```
var sum = 10;           // 전역 변수: window.sum
age = 30;               // 전역 변수: window.age
function rangeSum(num){	
*   var sum = 20;       // 지역 변수
    count = 0;          // 전역 변수: window.count
    alert(sum);
}
```



