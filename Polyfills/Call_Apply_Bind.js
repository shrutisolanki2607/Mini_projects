//bind call apply are the javascript methods used to control this context 
// invoked especially when need to borrow or reuse methods across different objects 

const user = {
    name : "Shruti"
}

function getInfo(age){
    console.log(`My name is ${this.name} and age is ${age} `);
}

//  Simple analogy


// bind → "Save for later"
// call → "Run now"

const user1 = getInfo.bind(user,10)

user1();


// Method	    Arguments format
// call	    fn.call(obj, a, b, c)
// apply	fn.apply(obj, [a, b, c])

