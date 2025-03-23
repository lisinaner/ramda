

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
            }
          },a)
       }
    }
        ,
    {id:"2",display:false,parentId:"1", displayBecause:""},
    {id:"3",display:false,parentId:"1",displayBecause:""}
]


a[0].display=true
console.log(a)