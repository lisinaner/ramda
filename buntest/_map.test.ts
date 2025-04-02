import {expect,test} from "bun:test"
import _map from "ramda/source/internal/_map"

test("单参数的map",()=>{
    let arr=[1,2,3]
    let  fn=(item:number)=>item+1
    let argfn=function(){
        return arguments
    }
    let r1=_map(fn,arr)
    let r2=_map(argfn,arr)
    let r3=''
    let r4=''
    expect(r1).toMatchInlineSnapshot(`
      [
        2,
        3,
        4,
      ]
    `)
    expect(r2).toMatchInlineSnapshot(`
      [
        {
       "0": 1
      },
        {
       "0": 2
      },
        {
       "0": 3
      },
      ]
    `)
    expect(r3).toMatchInlineSnapshot(`""`)
    expect(r4).toMatchInlineSnapshot(`""`)

})