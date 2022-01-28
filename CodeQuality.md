# Code Quality

## Level 1

Re-write the below code to better code quality standards.

```
async function GET_daTA() {
  let r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let DATA = await r.json();
  return DATA;
}
```

## Level 2

Re-write the below code to better code quality standards.
Hint: use modern ES6 syntax and reduce lines of code.

```
async function getUsers() {
  let doc = await Promise.all(getUser(), getProfile(), getPosts());

  let user = doc[0];
  let Profile = doc[1];
  let p = doc[2];

  const userProfile = {
    user: user,
    profile: Profile,
    posts: p
  };

  return userProfile;
}
```

## Level 3

Re-write the below code to better code quality standards.
Hint: use modern ES6 syntax and reduce lines of code.

```
async function getUsers(users) {
  const new_users = [];

  for (let i = 0; i < users.length; i = i + 1) {
    const newUser = user[i];
    newUser.id = i;

    new_users.push(newUser);
  }

  return new_users;
}
```
