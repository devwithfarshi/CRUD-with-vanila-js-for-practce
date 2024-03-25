let users = [
  {
    id: "a",
    name: "sumon",
    age: 20,
    gender: "male",
    email: "thesumonart@gmail.com",
    isPatner: true,
  },
  {
    id: "b",
    name: "slaman",
    age: 29,
    gender: "male",
    email: "devwithfarshi@gmail.com",
    isPatner: true,
  },
  {
    id: "c",
    name: "Rabeya",
    age: 19,
    gender: "female",
    email: "rabeya@gmail.com",
    isPatner: true,
  },
  {
    id: "d",
    name: "Abir",
    age: 50,
    gender: "male",
    email: "seobyabir@gmail.com",
    isPatner: false,
  },
];

// Delete

// 1. splice
// 2. filter

// delete user by splice

// const email = prompt("Enter email which you want to delete");

// const value = users.find((user) => {
//   return user.email === email;
// });
// if (value !== undefined) {
//   const desicion = confirm("Are you sure you want to delete?");
//   if (desicion === true) {
//     const deleteItemIndexNumber = users.findIndex((item) => {
//       return item.email === email;
//     });

//     users.splice(deleteItemIndexNumber, 1);
//     alert("User deleted successfully");
//   } else {
//     console.log("You saved your account successfully!");
//   }
// } else {
//   console.log(`Email (${email}) not found`);
// }

// delete user by filter

// const tempUsers = users.filter((user) => {
//   return user.id !== "b";
// });

// users = tempUsers;

// const email = prompt("Enter email which you want to delete");

// const value = users.find((user) => {
//   return user.email === email;
// });
// if (value) {
//   const desicion = confirm("Are you sure you want to delete?");
//   if (desicion) {
//     //we can write it like (desicion ===true)
//     const tempUsers = users.filter((user) => {
//       return user.id !== "b";
//     });

//     users = tempUsers;
//     alert("User deleted successfully");
//   } else {
//     console.log("You saved your account successfully!");
//   }
// } else {
//   console.log(`Email (${email}) not found`);
// }

// Create👇

// const name = prompt("Enter your name");
// const email = prompt("Enter your email");
// const age = +prompt("Enter your age");
// const isMale = confirm("Are you male?");

// const newUser = {
//   id: Date.now().toString(),
//   name,
//   age,
//   gender: isMale ? "male" : "female",
//   email,
// };

// users.push(newUser);

//TODO: Filter by isParter

// const tepmUser = users.filter((user) => {
//   return user.isPatner;
// });
// users = tepmUser;

//TODO: Sort by age

// const tempUser = users.filter((user) => {
//   return user.age <= 25;
// });

// users = tempUser;

// Read
console.log("===================================");
console.log("Id | Name | Email | Gender | Age | Partner");
users.forEach((item) => {
  console.log(`
${item.id} | ${item.name} | ${item.email} | ${item.gender} | ${item.age} | ${
    item.isPatner ? "Active" : "Disabled"
  }
`);
});
