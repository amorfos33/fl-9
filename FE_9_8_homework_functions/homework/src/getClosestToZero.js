function getClosestToZero(){
    let curr = arguments[0];
        let diff = Math.abs(0 - curr);
        let val;
        for (val = 0; val < arguments.length; val++) {
            let newdiff = Math.abs(0 - arguments[val]);
            if (newdiff < diff) {
                diff = newdiff;
                curr = arguments[val];
            }
        }
return curr;
}