var slideshow = remark.create({
    navigation: {
        scroll: false
    },
    sourceUrl: 'slide.md',
    highlightLanguage: 'javascript',
    highlightStyle: 'zenburn',
    highlightLines: true,
    countIncrementalSlides: false
});


slideshow.on('beforeShowSlide', function (slide) {
    var slideNum = slide.getSlideIndex() + 1;
    console.clear();
    switch (slideNum) {

        case 23:
            console.log("<<<< " + slideNum + "번 슬라이드 예제 실행 결과 >>>");
            slide21();
            break;
        case 26:
            console.log("<<<< " + slideNum + "번 슬라이드 예제 실행 결과 >>>");
            var btn = document.getElementById("area");
            //btn.addEventListener("click", slide24, false); // IE8 동작 안함
            btn.onclick = slide24;
            break;
        case 37:
            console.log("<<<< " + slideNum + "번 슬라이드 예제 실행 결과 >>>");
            slide35();
            break;
        case 40:
            console.log("<<<< " + slideNum + "번 슬라이드 예제 실행 결과 >>>");
            slide38();
            break;
        case 42:
            console.log("<<<< " + slideNum + "번 슬라이드 예제 실행 결과 >>>");
            slide40();
            break;
        case 44:
            console.log("<<<< " + slideNum + "번 슬라이드 예제 실행 결과 >>>");
            slide42();
            break;
        case 57:
            console.log("<<<< " + slideNum + "번 슬라이드 예제 실행 결과 >>>");
            slide55();
            break;
        case 63:
            console.log("<<<< " + slideNum + "번 슬라이드 예제 실행 결과 >>>");
            slide61();
            break;
        case 65:
            console.log("<<<< " + slideNum + "번 슬라이드 예제 실행 결과 >>>");
            slide63();
            break;
        case 67:
            console.log("<<<< " + slideNum + "번 슬라이드 예제 실행 결과 >>>");
            slide65();
            break;
        case 69:
            console.log("<<<< " + slideNum + "번 슬라이드 예제 실행 결과 >>>");
            slide67();
            break;

        // 3부
        case 123:
            console.log("<<<< " + slideNum + "번 슬라이드 예제 실행 결과 >>>");
            slide123();
            break;
        case 124:
            console.log("<<<< " + slideNum + "번 슬라이드 예제 실행 결과 >>>");
            slide124();
            break;


    }
});

slideshow.on('hideSlide', function (slide) {
    var slideNum = slide.getSlideIndex() + 1;

    switch (slideNum) {

        case 32:
            //console.log("<<<< " + slideNum + "번 슬라이드 예제 실행 결과 >>>");
            //slide32();
            break;
        case 33:
            //console.log("<<<< " + slideNum + "번 슬라이드 예제 실행 결과 >>>");
            //slide33();
            break;


    }
});


function slide21() {
    console.log("'' == '0' => " + ('' == '0'));   // 거짓
    console.log("0 == '' => " + (0 == ''));     // 참
    console.log("0 == '0' => " + (0 == '0'));    // 참
    console.log("false == 'false' => " + (false == 'false'));    // 거짓
    console.log("false == '0' => " + (false == '0'));        // 참
    console.log("false == undefined => " + (false == undefined));  // 거짓
    console.log("false == null => " + (false == null));       // 거짓
    console.log("null == undefined => " + (null == undefined));  // 참
    console.log("' \\t\\r\\n ' == 0 => " + (' \t\r\n ' == 0));     // 참
}

function slide24(e) {
    e = e || window.event;

    console.log(e.clientX + ", " + e.clientY);
}

function slide32() {
    var score = new Object();
    score.kor = 100;
    score.eng = 80;
    score.math = 90;
    score.sum = function (){
        return this.kor + this.eng + this.math;
    }
    alert(score.kor + "+" + score.eng + "+" + score["math"] + "=" + score.sum());
}

function slide33() {
    var score = {
        kor: 100,
        eng: 60,
        math: 70,
        sum: function () {
            return this.kor + this.eng + this.math;
        }
    };
    alert(score.kor + "+" + score.eng + "+" + score.math + "=" + score.sum());
}

function slide35() {
    console.log("var foo = {");
    console.log("   name: 'foo',");
    console.log("   age: 30,");
    console.log("   major: 'computer science");
    console.log("};");
    console.log("var prop;");
    console.log("for (prop in foo) {");
    console.log("   console.log(prop, foo[prop]);");
    console.log("}");
    console.log("================================");

    var foo = {
        name: 'foo',
        age: 30,
        major: 'computer science'
    };

    var prop;
    for (prop in foo) {
        console.log(prop, foo[prop]);
    }
}

function slide38() {
    console.log("var emptyArr = [];");
    console.log("console.log(emptyArr[0]);");
    console.log(" ");
    console.log("emptyArr[0] = 100;");
    console.log("emptyArr[3] = 'eight';");
    console.log("emptyArr[7] = true;");
    console.log("console.log(emptyArr);");
    console.log("console.log(emptyArr.length);");

    var emptyArr = [];
    console.log(emptyArr[0]);       // (출력값) undefined

    emptyArr[0] = 100;
    emptyArr[3] = 'eight';
    emptyArr[7] = true;
    console.log(emptyArr);          // (출력값) [100, 200, 3: "eight", 7: true]
    console.log(emptyArr.length);   // (출력값) 8

    emptyArr.length = 2;
    console.log(emptyArr);          // (출력값) [100]
}

function slide40() {
    console.log("var arr = ['zero', 'one', 'two'];");
    console.log("console.log(arr.length);");
    console.log("arr.color = 'blue';");
    console.log("arr.name = 'number_array';");
    console.log("console.log(arr.length); ");
    console.log("arr[3] = 'red';");
    console.log("console.log(arr.length);");
    console.log("console.dir(arr);");
    console.log("for (var prop in arr) {");
    console.log("   console.log(prop, arr[prop]);");
    console.log("}");

    console.log("for (var i=0; i < arr.length; i++) {");
    console.log("   console.log(i, arr[i]);");
    console.log("}");

    var arr = ['zero', 'one', 'two'];
    console.log(arr.length);        // (출력값) 3
    arr.color = 'blue';
    arr.name = 'number_array';
    console.log(arr.length);        // (출력값) 3
    arr[3] = 'red';
    console.log(arr.length);        // (출력값) 4
// 배열 객체 출력
    console.dir(arr);
// for in
    console.log("=========for in===============");
    for (var prop in arr) {
        console.log(prop, arr[prop]);
    }
    console.log("=========for===============");
// for
    for (var i=0; i < arr.length; i++) {
        console.log(i, arr[i]);
    }
}

function slide42() {
    console.log("function printArr(arr){");
    console.log("    for(var i=0; i<arr.length; i++){");
    console.log("        console.log(i, arr[i]); // arr[0], arr[1], arr[2]");
    console.log("    }");
    console.log("}");
    console.log("");
    console.log("var colorArr = ['orange', 'yellow', 'green'];");
    console.log("printArr(colorArr);");
    console.log("");
    console.log("var colorObj = {");
    console.log("    0: 'orange',");
    console.log("    1: 'yellow',");
    console.log("    2: 'green',");
    console.log("    length: 3");
    console.log("};");
    console.log("printArr(colorObj);");
    console.log("");
    console.log("Array.prototype.push.apply(colorObj, ['red']);");
    console.log("printArr(colorObj);");

    function printArr(arr){
        for(var i=0; i<arr.length; i++){
            console.log(i, arr[i]); // arr[0], arr[1], arr[2]
        }
    }
    console.log("=============Array================");
    var colorArr = ["orange", "yellow", "green"];
    printArr(colorArr);
    console.log("=============Object================");
    var colorObj = {
        0: "orange",
        1: "yellow",
        2: "green",
        length: 3
    };
    printArr(colorObj);
    console.log("=============================");
    Array.prototype.push.apply(colorObj, ['red']);
    printArr(colorObj);
}

function slide55() {
    console.log("function sum() {");
    console.log("    var result = 0;");
    console.log("    for(var i = 0; i < arguments.length; i++) {");
    console.log("        result += arguments[i];");
    console.log("    }");
    console.log("    return result;");
    console.log("}");
    console.log("");
    console.log("console.log(sum(1,2,3));");
    console.log("console.log(sum(1,2,3,4,5,6,7,8,9));");
    function sum() {
        var result = 0;
        for(var i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }
        return result;
    }
    console.log(sum(1,2,3));                // (출력값) 6
    console.log(sum(1,2,3,4,5,6,7,8,9));    // (출력값) 45
}


function slide61() {
    value = 100;    // 전역 변수
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
    myObject.func1();
    value = 100;
}

function slide63() {
    value = 100;    // 전역 변수
    var myObject = {
        value: 1,
        func1: function() {
            var that = this;
            this.value += 1;
            console.log('func1() called. this.value : ' + this.value);

            // 내부 함수
            func2 = function () {
                that.value += 1;
                console.log('func2() called. this.value : ' + that.value);
            };

            func2();            // ②
        }
    };
    myObject.func1();

}

function slide65() {
    value = 100;    // 전역 변수
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

            func2.call(this, 10, 20);            // ②
        }
    };
    myObject.func1();

}

function slide67() {
    console.log("function Person(name, age, gender) {");
    console.log("    this.name = name;");
    console.log("    this.age = age;");
    console.log("    this.gender = gender;");
    console.log("}");
    console.log("var foo = {};");
    console.log("Person.apply(foo, ['foo', 30, 'man']);");
    console.log("console.dir(foo);");
    console.log("====================");

    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    var foo = {};
    Person.apply(foo, ['foo', 30, 'man']);
    console.dir(foo);
}

function slide123() {
    var btn = document.querySelectorAll('.remark-slide-content .btn111');
    for(var i=0; i< 3; i++){
        btn[i].onclick = function(){
            alert(i);
        };
    }
}

function slide124() {
    var btn = document.querySelectorAll('.remark-slide-content .btn222');
    for(var i=0; i< 3; i++){
        (function (n) {
            btn[n].onclick = function(){
                alert(n);
            };
        })(i);
    }
}