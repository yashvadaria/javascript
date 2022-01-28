// level 3
//1st problem
const user = {
  name: "Elie",
  job: "Instructor",
  workDetails: {
    type: "Part Time",
    hours: "40 hours",
  },
  educationQualifications: [
    {
      name: "Full Stack",
      type: "Certification",
    },
    {
      name: "Javascript",
      type: "Certification",
    },
  ],
};
function iterate(obj) {
  for (var key in obj) {
    if (obj[key] !== null && typeof obj[key] === "object") {
      iterate(obj[key]);
    } else if (obj[key] !== null && typeof obj[key] === "string") {
      obj[key] = obj[key].toUpperCase();
    }
  }
}

iterate(myObj);
//Ref used stackoverflow
//2nd problem
//It has to be like Input string: "a":2,"b":3,"c":4,"a":5,"b":6"
let aTotal = 0;
let bTotal = 0;
let cTotal = 0;
const text = '{"a":2,"b":3,"c":4,"a":5,"b":6}';
const obj = JSON.parse(text, function (key, value) {
  if (key == "a") {
    return (aTotal += value);
  } else if (key == "b") {
    return (bTotal += value);
  } else {
    return (cTotal += value);
  }
});

//3rd problem
function areBracketsBalanced(expr) {
  let stack = [];
  for (let i = 0; i < expr.length; i++) {
    let x = expr[i];

    if (x == "(" || x == "[" || x == "{") {
      stack.push(x);
      continue;
    }

    if (stack.length == 0) return false;

    let check;
    switch (x) {
      case ")":
        check = stack.pop();
        if (check == "{" || check == "[") return false;
        break;

      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") return false;
        break;

      case "]":
        check = stack.pop();
        if (check == "(" || check == "{") return false;
        break;
    }
  }
  return stack.length == 0;
}
//ref used geeks for geeks
