import find from "./source/find"
import {identity,into, transduce} from "ramda"

let listXf={
    "@@transducer/init":()=>[],
    "@@transducer/step":(acc,x)=>{
        return acc.concat([x])
    },
    "@@transducer/result":x=>x

}

let r=find(identity,listXf)
// console.log(r(1))


// console.log(into([], r, [2,3]))

const numbers = [1, 2, 3, 4];

//=> [2, 3]

console.log(into([], r.f, numbers))//=> [2, 3])