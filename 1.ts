
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


let id值等于=propEq('id')
let fn=curry((arr,id:string)=>{
   
   let fn2=id值等于(id)
    // let  这个节点=either()
    // let  和节点子=这个节点(propEq('parent')(id))
    let filterFn=filter((v:any)=>{
        // console.log(v)
        // console.log(propEq('parentId','parent')(v))
        return  fn2(v)
      })
      return filterFn(arr)
 })

//  let 给定集合=fn(arr)
 console.log(propEq('hair', 'brown',{name: 'Rusty', age: 10, hair: 'brown'}))







}