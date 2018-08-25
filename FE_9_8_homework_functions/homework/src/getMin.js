function getMin(){
    // return Math.min(a,b,c);-old version;
    let arr = Array.from(arguments);
    let minArgument=arguments[0];
    arr.forEach(function(element) {
        if (element<minArgument) {
            minArgument=element;
        }
    });
    return minArgument;
}