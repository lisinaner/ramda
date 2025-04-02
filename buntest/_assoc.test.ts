import _assoc from "ramda/source/internal/_assoc"
import {expect,test} from "bun:test"
// 拷贝和修改值，2功能的，数组和对象
test("",()=>{
    let r1=_assoc(1,'2',[1,2,3])
    let r2=_assoc('a','2',{a:1})
    expect(r1).toMatchInlineSnapshot(`
      [
        1,
        "2",
        3,
      ]
    `)
    expect(r2).toMatchInlineSnapshot(`
      {
        "a": "2",
      }
    `)

})