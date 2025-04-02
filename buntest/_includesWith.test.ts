import {expect,test} from "bun:test"
import _includesWith from "ramda/source/internal/_includesWith"
test("",()=>{
    let fn=(x:any,item:any)=>item==x
    let r1= _includesWith(fn,'a',['a','b'])
    let r2=_includesWith(fn,'c',['a','b'])
    let r3=''
    let r4=''
    expect(r1).toMatchInlineSnapshot(`true`)
    expect(r2).toMatchInlineSnapshot(`false`)
    expect(r3).toMatchInlineSnapshot(`""`)
    expect(r4).toMatchInlineSnapshot(`""`)

})