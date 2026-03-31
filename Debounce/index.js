const getData = () => {
    console.log("2345678")
}


function doSomething(fn,delay) {
    let timer
    return function () {
        let context = this ,
        args = arguments;

        clearTimeout(timer)

        timer = setTimeout(()=>{
            fn.apply(context,args)
        },delay)
    }
}


const betterFunction = doSomething(getData,1000)