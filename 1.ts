import { lift } from "ramda"
import _isFunction from "./source/internal/_isFunction"
import {curry} from "ramda"

{

    var and = curry(function and(a, b) {
      return a && b;
    });
    const both=curry((a,b)=>{
        return _isFunction(a)?function _both(){
            return a.apply(this,arguments) && b.apply(this,arguments)
        }:lift(and)(a,b)
    })
    
    console.log(both([true])([true,false]))
 
}