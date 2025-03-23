// 1.ts
import { filter, curry, propEq } from "ramda";
{
  let arr = [
    { parentId: "parent", id: "2" },
    { parentId: "parent", id: "1" },
    { id: "parent" },
    { id: "3" }
  ];
  const initialNodes = [
    {
      id: "A",
      type: "group",
      data: { label: null },
      position: { x: 0, y: 0 },
      style: {
        width: 170,
        height: 140
      }
    },
    {
      id: "B",
      type: "input",
      data: { label: "child node 1" },
      position: { x: 10, y: 10 },
      parentId: "A",
      extent: "parent"
    },
    {
      id: "C",
      data: { label: "child node 2" },
      position: { x: 10, y: 90 },
      parentId: "A",
      extent: "parent"
    }
  ];
  let id_ = propEq("id");
  let fn = curry((arr2, id) => {
    let fn2 = id_(id);
    let filterFn = filter((v) => {
      return fn2(v);
    });
    return filterFn(arr2);
  });
  console.log(propEq("hair", "brown")({ name: "Rusty", age: 10, hair: "brown" }));
}
