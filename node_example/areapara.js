var obj={
    rect:(
        function area(l, w) {

            area = (l * w);
            console.log("Area:" + area);
        },
        function parameter(l, w) {
            parameter = (2 * (l + w));
            console.log("parameter:" +obj.rect(l,w));
        }
    )
}


area(3,4);
parameter(5,10);
