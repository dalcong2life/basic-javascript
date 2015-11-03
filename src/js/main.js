var slideshow = remark.create({
    navigation: {
        scroll: false
    },
    sourceUrl: 'slide.md',
    highlightLanguage: 'javascript',
    highlightStyle: 'zenburn',
    highlightLines: true
});


slideshow.on('beforeShowSlide', function (slide) {
    var slideNum = slide.getSlideIndex() + 1;
    //console.log("<<<< " + slideNum + "번 슬라이드 예제 실행 결과 >>>");
    switch (slideNum) {

        case 21:
            slide21();
            break;
        case 23:
            var btn = document.getElementById("area");
            //btn.addEventListener("click", slide23, false); // IE8 동작 안함
            btn.onclick = slide23;
            break;
        case 37:
            slide37();
            break;


    }
});

slideshow.on('hideSlide', function (slide) {
    var slideNum = slide.getSlideIndex() + 1;
    console.log("<<<< " + slideNum + "번 슬라이드 예제 실행 결과 >>>");
    switch (slideNum) {

        case 32:
            slide32();
            break;
        case 33:
            slide33();
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

function slide23(e) {
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

function slide37() {
    var colorArr = new Array("orange", "yellow", "blue", "green", "red");
    //var colorArr = new Array();

    for(var i=0; i<colorArr.length; i++){
        console.log(colorArr[i]);
    }
    console.log('----------------------------');
// 배열의 값과 메소드까지 모두 출력
    for(var k in colorArr){
        console.log(k);
        console.log(colorArr[k]);
    }
}