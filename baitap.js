// // Xây dựng một trang web quản lý bán hàng đơn giản gồm các thông tin sau:
// // Tạo một mảng chứa danh sách user. Thông tin user bao gồm: userId, userName, email, password, createdAt
// // (thời gian tạo, sử dụng hàm new Date() để sử dụng và format về định dạng ngày/tháng/năm)

// // const users = [];

// /**
//  * hàm lấy thời gian
//  */
// const getToday = () => {
//   let today = new Date();
//   const year = today.getFullYear();
//   const month = today.getMonth();
//   const day = today.getDate();
//   return `${day}/${month + 1}/${year}`;
// };

// // Tạo một mảng chứa danh sách product. Thông tin product gồm: productId, productName, image, price,
// // getUser();
// // const products = [];
// //  description, createdAt (thời gian tạo, sử dụng hàm new Date() để sử dụng và format về định dạng ngày/tháng/năm)
// // Tạo mảng carts gồm các thông tin sau: cartId, userId, productId, quantity.
// //  Trong đó userId lấy từ mảng users, productId lấy từ mảng products
// // Tính tổng tiền của các sản phẩm có trong giỏ hàng hiện tại
// // Vẽ sơ đồ hoạt động trước và sau đấy mới code. Chưa cần thiết phải chạy ngay mà nên suy nghĩ ý tưởng
// // làm bài trước

// function User(userId, userName, email, password, createdAt) {
//   this.userId = userId;
//   this.userName = userName;
//   this.email = email;
//   this.password = password;
//   this.createdAt = createdAt;
// }
// const users = [];

// users.push(new User(1, "Thinh", "email@gmail.com", "123", getToday()));
// users.push(new User(2, "Minh", "email@gmail.com", "123", getToday()));
// users.push(new User(3, "Hung", "email@gmail.com", "123", getToday()));
// users.push(new User(4, "Quy", "email@gmail.com", "123", getToday()));
// // =====================================================================

// function Product(productId, productName, image, price, description, createdAt) {
//   this.productId = productId;
//   this.productName = productName;
//   this.image = image;
//   this.price = price;
//   this.description = description;
//   this.createdAt = createdAt;
// }
// const products = [];

// products.push(new Product(1, "O to", "image", 1000, "o to toyota", getToday()));
// products.push(
//   new Product(2, "Xe may", "image", 2000, "o to toyota", getToday())
// );
// products.push(
//   new Product(3, "Xe dap", "image", 3000, "o to toyota", getToday())
// );
// products.push(
//   new Product(4, "May bay", "image", 4000, "o to toyota", getToday())
// );
// // ======================================================================

// function Cart(cartId, userId, productId, quantity) {
//   this.cartId = cartId;
//   this.userId = userId;
//   this.productId = productId;
//   this.quantity = quantity;
// }

// const cart1 = [];
// const cart2 = [];
// const cart3 = [];
// const cart4 = [];

// cart1.push(new Cart(1, 1, 2, 4));
// cart1.push(new Cart(2, 1, 1, 2));
// cart1.push(new Cart(3, 1, 4, 3));

// cart2.push(new Cart(1, 2, 3, 3));

// // =====================================================================

// function totalMoney(carts) {
//   let total = 0;
//   for (let i = 0; i < carts.length; i++) {
//     let infoProduct = products.find(
//       (product) => product.productId == carts[i].productId
//     );
//     total += infoProduct.price * carts[i].quantity;
//   }
//   return total;
// }

// console.log(totalMoney(cart1));
// console.log(totalMoney(cart2));

// Tạo một mảng products để lưu trữ các đối tượng product bao gồm các thông tin:
//  productId, productName, price, image, description, createdAt. Thực hiện các yêu cầu sau đây:
// Hiển thị danh sách sản phẩm
// Thêm mới sản phẩm vào trong mảng (Kiểm tra dữ liệu đầu vào, id của sản phẩm không được trùng.
//    Nếu trùng thì báo cho người dùng biết là “Id không được phép trùng”,
//     ngày thêm phải format đúng định dạng khi thêm mới)
// Tìm kiếm sản phẩm theo tên
// Sắp xếp sản phẩm tăng dần theo giá
// Lọc ra những sản phẩm có giá lớn hơn 100.000đ
// Tạo một mảng users, và xây dựng đối tượng user bao gồm các trường sau:
//  userId, userName, gender, email, password, createdAt. Thực hiện các yêu cầu sau:
// Thêm mới user vào trong mảng (Kiểm tra định dạng email, mật khẩu phải lớn hơn 8 ký tự,
//    format ngày tháng)
// Hiển thị danh sách user trong màn hình console.log()
// Thực hiện chức năng tìm kiếm user theo tên hoặc email
// Xây dựng tính năng đăng nhập. Thực hiện tìm kiếm thông tin user theo email và password.
//  Nếu như thỏa mãn điều kiện thì hiển thị thông báo là “Đăng nhập thành công”.
//   Nếu như sau email hoặc mật khẩu thì thông báo “Đăng nhập thất bại”

/**
//  * hàm lấy thời gian
//  */
const getToday = () => {
  let today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  return `${day}/${month + 1}/${year}`;
};
function Product(productId, productName, price, image, description, createdAt) {
  this.productId = productId;
  this.productName = productName;
  this.price = price;
  this.image = image;
  this.description = description;
  this.createdAt = createdAt;
}

const products = [];
products.push(
  new Product(1, "O to", 50000, "image", "o to toyota", getToday())
);
products.push(
  new Product(2, "Xe may", 20000, "image", "o to toyota", getToday())
);
products.push(
  new Product(3, "Xe dap", 400000, "image", "o to toyota", getToday())
);
products.push(
  new Product(4, "May bay", 1000000, "image", "o to toyota", getToday())
);

// Tìm kiếm sản phẩm theo tên

const findProduct = products.find((product) => product.productName == "Xe may");
console.log(findProduct);

// Sắp xếp sản phẩm tăng dần theo giá
products.sort((a, b) => a.price - b.price);

console.log("Khi sort: ", products);
// Lọc ra những sản phẩm có giá lớn hơn 100.000đ

const filterProduct = products.filter((pro) => pro.price > 100000);
console.log(filterProduct);

// Tạo một mảng users, và xây dựng đối tượng user bao gồm các trường sau:
//  userId, userName, gender, email, password, createdAt. Thực hiện các yêu cầu sau:

function User(userId, userName, gender, email, password, createdAt) {
  this.userId = userId;
  this.userName = userName;
  this.gender = gender;
  this.email = email;
  this.password = password;
  this.createdAt = createdAt;
}

const users = [];
users.push(new User(1, "thinh", "nam", "thinh@gmail.vn", "123", getToday()));
users.push(new User(2, "hung", "nam", " hunggmail", "123", getToday()));
users.push(new User(3, "minh", " nam", "minhgmail", "123", getToday()));

console.log(users);
// Thêm mới user vào trong mảng (Kiểm tra định dạng email, mật khẩu phải lớn hơn 8 ký tự,
//    format ngày tháng)
const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};
if (validateEmail(users[0].email)) {
} else {
  console.log("email không hợp lệ");
}
// Hiển thị danh sách user trong màn hình console.log()
// Thực hiện chức năng tìm kiếm user theo tên hoặc email

const findUser = users.find((users) => users.userName == "thinh");
console.log(findUser);

// Xây dựng tính năng đăng nhập. Thực hiện tìm kiếm thông tin user theo email và password.

const findEmail = users.find((user) => user == "");
const findPassword = users.find((user) => user == "");
if (findEmail && findPassword) {
  console.log("đăng nhập thành công");
} else {
  console.log("đăng nhập thất bại");
}
//  Nếu như thỏa mãn điều kiện thì hiển thị thông báo là “Đăng nhập thành công”.
//   Nếu như sau email hoặc mật khẩu thì thông báo “Đăng nhập thất bại”
