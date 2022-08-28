// 处理全局异常，有可能有 异步的错误 ，try catch 是捕获不到异步的错误的，所以得特别注意一下。
// 所以我们在封装插件的时候，一定要注意返回 Promise ，这样既方便了自己，也方便了别人
function func1() {
    func2()
}

async function func2() {
    try {
        await func3()
    } catch (error) {
        console.log("error----------");
    }

}

function func3() {
    //  setTimeout( () => {
    //     throw new Error('123')
    // }, 1000);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("123")
        }, 1000);
    })
}

func1()