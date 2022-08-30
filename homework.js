class A {
    nameAW;
    constructor() {
        this.nameA = 'a'
    }
    validateA() {
        console.log("A")
    }
}

class B extends A {
    constructor() {
        super()
        this.nameB = 'b'
    }

    validateB() {
        console.log("B")
    }
}

class C extends B {
    constructor() {
        super()
        this.nameC = 'c'
    }

    validateC() {
        console.log("C")
    }
}

const _ownKeys = Reflect.ownKeys

function findMembers(instance, fieldPrefix, funcPrefix) {
    // 所有属性
    let result = _findMembers(instance).filter(m => m.startsWith(fieldPrefix) || m.startsWith(funcPrefix))
    return result;
}

function _findMembers(obj,result = []){
    const temp = _ownKeys(obj)
    result.push(...temp)
    if(obj.__proto__ !== null ){
        _findMembers(obj.__proto__,result)
    }
    return result
}


var c = new C()
// 编写一个函数findMembers

const members = findMembers(c, 'name', 'validate')
console.log(members)

// 原型链 查找 