// Tạo một đối tượng
// từ khóa khai báo _tên đối tượng={
// các key và value
// }
// Cách 1 :object literal
const user = {
  // key :value
  userName: "Nguyễn văn A",
  email: "nav@gmail.com",
  password: "123456",
  age: 21,
  isMale: true,

  //   Phương thức -Hàm (method)
  getEmail: function () {
    return this.email;
  },

  getName: function () {
    return this.userName;
  },
};

// Cách xóa key và value vào đối tượng
delete user.isMale;

// Thêm key và value vào đối tượng
user.address = "hà nội";
user.dateOfBirth = "12/12/2012";
console.log(user);
// Cách truy xuất các phần tử trong object
//  Cách 1:
console.log(user.userName);

// Cách 2 :
console.log(user["isMale"]);
console.log(user["age"]);

// lặp qua các thuộc tính của đối tượng
for (let key in user) {
  console.log("key", key);
  console.log("value", user[key]);
}

// for (let key in user){
//     if(user.hasOwnproperty(key))
// }

// tạo một mảng và lưu trữ 3 đối tượng product

const products = [
  {
    productId: 1,
    productName: "áo thun nam",
    price: 200000,
    description: "",
    image: "",
  },
  {
    productId: 2,
    productName: "áo thun nam",
    price: 200000,
    description: "",
    image: "",
  },
];
