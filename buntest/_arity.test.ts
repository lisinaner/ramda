import { add } from "ramda";
import {expect,test} from "bun:test"
import _arity from "ramda/source/internal/_arity"
console.log(add(1,2)) 


test("_arity不能实际限制参数数量",()=>{
    let fn=function(){
        return [arguments]
    }
    expect((_arity(0,fn))).toMatchInlineSnapshot(`[Function]`)
    expect((_arity(0,fn))()).toMatchInlineSnapshot(`
      [
        {},
      ]
    `)
    expect((_arity(0,fn))(1)).toMatchInlineSnapshot(`
      [
        {
       "0": 1
      },
      ]
    `)
    expect((_arity(1,fn))()).toMatchInlineSnapshot(`
        [
          {},
        ]
      `)
      expect((_arity(1,fn))(1)).toMatchInlineSnapshot(`
        [
          {
         "0": 1
        },
        ]
      `)
})


