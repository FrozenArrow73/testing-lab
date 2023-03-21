const {returnTwo, greeting, add} = require('./functions.js')

test("Test of returnTwo", () => {
    expect(returnTwo()).toEqual(2)
})
test("test of greeting", () => {
    expect(greeting('Jill')).toEqual("Hello, Jill")
    expect(greeting('James')).toEqual("Hello, James")
})
test("test of add", () => {
    expect(add(1, 2)).toEqual(3)
    expect(add(5,9)).toEqual(14)
})