// 1.ts
import { filter, either, curry, propEq } from "ramda";
import { __ } from "ramda";
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
  let 查_id = propEq(__, "id");
  let 查_ = propEq(__, "parentId");
  let fn = curry((arr2, id) => {
    let 子_ = 查_id(id);
    let 父_ = 查_(id);
    let 父_2 = either(子_)(父_);
    let filterFn = filter((v) => {
      return 父_2(v);
    });
    return filterFn(arr2);
  });
  let 应_ = fn(arr);
  console.log(应_("parentId"));
}
