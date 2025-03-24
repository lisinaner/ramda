
import { filter,either,curry, propEq, } from "ramda";
import eqProps from "./source/eqProps"
import { __ } from "ramda";
{

   
 type 有父子结构={
    parentId?: string;
    id: string;
    [key:string]:any
 }
   let arr=[
    {parentId:'parent',id:'2'},
    {parentId:'parent',id:'1'},
    {id:"parent"},
    {id:"3"}
   ] satisfies 有父子结构[]
 
  
   const initialNodes = [
    {
      id: 'A',
      type: 'group',
      data: { label: null },
      position: { x: 0, y: 0 },
      style: {
        width: 170,
        height: 140,
      },
    },
    {
      id: 'B',
      type: 'input',
      data: { label: 'child node 1' },
      position: { x: 10, y: 10 },
      parentId: 'A',
      extent: 'parent',
    },
    {
      id: 'C',
      data: { label: 'child node 2' },
      position: { x: 10, y: 90 },
      parentId: 'A',
      extent: 'parent',
    },
  ] satisfies 有父子结构[]


let 查找id=propEq(__,'id')
let 查找父节点=propEq(__,'parentId')
let fn=curry((arr,id:string)=>{
    //@ts-ignore
    let  子节点=查找id(id)
       //@ts-ignore
    let 父节点=查找父节点(id)
    //@ts-ignore
    let  父和子节点=either(子节点)(父节点)
    let filterFn=filter((v:any)=>{
        return  父和子节点(v)
      })
      return filterFn(arr)
 })

let 应用对象=fn(arr)

 console.log(应用对象('parentId'))









}