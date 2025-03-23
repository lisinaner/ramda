// 1.ts
{
  let r = [1, 100].reduce((lastResult, currentValue) => {
    return currentValue > 1 ? lastResult + 1 : 0;
  }, 0);
  console.log(r);
}
