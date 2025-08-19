    let testScopeVar= "hello World";

    function scopeTest(){
        scopeTestSecond();
}

function scopeTestSecond(){
    console.log(testScopeVar);
}

