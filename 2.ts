

import {filter, map} from "ramda"

let a=[
    {
        type:"page",
        id:"1",
        _display:false,
        displayBecause:"",
        get display(){
            console.log(this)
            return this._display
        },
       set display(v){
        this
          map((item:any)=>{
            this._display=true
            if(item.parentId==this.id){
                item.displayBecause='是'+this.id+"的子代"
                    item.display=true
                if(item.type=="表单"){
                    console.log(1)
                }
            }
          },a)
       }
    }
        ,
    {id:"2",display:false,parentId:"1", displayBecause:""},
    {id:"3",display:false,parentId:"1",displayBecause:""},
    {id:"4",display:false,parentId:"1",displayBecause:"",type:"表单",表单id:"1"},
    { 标签id:"1",字段id:"1",_display:false,id:"1",type:"表单字段"}
]

let d=[
 
]
let 标签=[
    {
        id:"1",
        _display:false,
        name:"汽车",
        字段id:[1]
    }
]

let 字段=[
    {
        id:"1",
        _display:false,
        name:"油或者电"
    },
 
]
a[0].display=true
console.log(a)