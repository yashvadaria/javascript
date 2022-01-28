//level 3
getUsers = async (users) => {
  const new_users = [];
  users.map((item, index) => {
    new_users = [...new_users, { ...item, id: index }];
  });
  return new_users;
};

// async function getUsers(users) {
//     const new_users = [];

//     for (let i = 0; i < users.length; i = i + 1) {
//       const newUser = user[i];
//   🎯 considering users[i] 👆🏻
//       newUser.id = i;

//       new_users.push(newUser);
//     }

//     return new_users;
//   }
