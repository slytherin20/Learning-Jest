let data = require("./app");
const sum = data[0];
const obj = data[1];

test('adds 1+2 to equal 3',()=>{
    expect(sum(1,2)).toBe(3);  //toBe is Object.is which checks exacts equality.
})
test("object assignment",()=>{
    expect(obj).toEqual({a:1,b:2,c:3})  //toEqual checks recursively for each array value or object value.
})

test('adding positive numbers does not return zero',()=>{
    for(let i=1;i<=10;i++){
        for(let j=1;j<=10;j++){
            expect(i+j).not.toBe(0)
        }
    }
})


test('null',()=>{
    const val = null;
    expect(val).toBeNull();
    expect(val).toBeUndefined();
    expect(val).toBeDefined();
    expect(val).toBeTruthy();
    expect(val).toBeFalsy();
})

test('zero',()=>{
    const val = 0;
    expect(val).toBeNull();
    expect(val).toBeUndefined();
    expect(val).toBeDefined();
    expect(val).toBeTruthy();
    expect(val).toBeFalsy();
})

test('value comparison',()=>{
    const val = 4;
    expect(val).toBeLessThan(5);
    expect(val).toBeLessThanOrEqual(5);
    expect(val).toBeGreaterThanOrEqual(5);
    expect(val).toBeGreaterThan(5);

    //ToBe and toEqual same for numbers
    expect(val).toBe(4);
    expect(val).toEqual(4);

})

test('floating point comparison',()=>{
    const n = 3.45;
    expect(n).toBeCloseTo(3.451); //Use instead of toBe and toEqual
})