//https://www.udemy.com/course/understand-javascript/learn/lecture/2237552#overview


let __obj = new Object()
__obj.prop3 = 'prop3'

let _obj = new Object()
_obj.prop2 = 'prop2'
_obj.__proto__ = __obj

let obj = new Object()
obj.prop1 = 'prop1'
obj.__proto__ = _obj

console.log(obj.prop1, obj.hasOwnProperty('prop1'))

console.log(obj.prop2, obj.hasOwnProperty('prop2'))

console.log(obj.prop3, obj.hasOwnProperty('prop3'))