function solution(data, key) {
  // 변수로 접근: undefined
  console.log(data.key);
  // 프로퍼티로 접근
  console.log(data.name);
  
  // 프로퍼티로 접근
  console.log(data["name"])
  // 변수로 접근
  console.log(data[key])
}

solution({ name: "abc" }, "name")