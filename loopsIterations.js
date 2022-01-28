// level 3
const data = {
  liked: [
    { id: 1, name: "John Doe", age: 20 },
    { id: 2, name: "Jane Doe", age: 30 },
    { id: 3, name: "John Smith", age: 40 },
  ],
  disliked: [
    { id: 4, name: "Jason Doe", age: 20 },
    { id: 5, name: "Josh Doe", age: 30 },
    { id: 6, name: "Karen Smith", age: 40 },
  ],
  loved: [
    { id: 7, name: "Jasmine Doe", age: 20 },
    { id: 8, name: "Bob Doe", age: 30 },
    { id: 9, name: "Tom Smith", age: 40 },
  ],
};

const newData = [...data.liked, ...data.disliked, ...data.loved];
const finalData = [];
newData.map((item) => {
  if (item.id >= 1 && item.id <= 3) {
    finalData.push({ ...item, reaction: "liked" });
  } else if (item.id >= 4 && item.id <= 6) {
    finalData.push({ ...item, reaction: "disliked" });
  } else {
    finalData.push({ ...item, reaction: "loved" });
  }
});
console.log(finalData);

//Output
// [
//   { id: 1, name: "John Doe", age: 20, reaction: "liked" },
//   { id: 2, name: "Jane Doe", age: 30, reaction: "liked" },
//   { id: 3, name: "John Smith", age: 40, reaction: "liked" },
//   { id: 4, name: "Jason Doe", age: 20, reaction: "disliked" },
//   { id: 5, name: "Josh Doe", age: 30, reaction: "disliked" },
//   { id: 6, name: "Karen Smith", age: 40, reaction: "disliked" },
//   { id: 7, name: "Jasmine Doe", age: 20, reaction: "loved" },
//   { id: 8, name: "Bob Doe", age: 30, reaction: "loved" },
//   { id: 9, name: "Tom Smith", age: 40, reaction: "loved" },
// ];
