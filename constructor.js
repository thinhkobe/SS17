// // cú pháp khai báo

// function User(userName, email, password) {
//   this.userName = userName;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.className = "JV321103";

// // Khởi tạo đối tượng User
// const user1 = new User("Lâm đẹp gái", "lam@gmail.com", "1223312");
// user1.readpost = "Đọc Báo";
// const user2 = new User("Lâm đẹp gái", "lam@gmail.com", "1223312");
// user2.manager = "quản lý hệ thống";

// console.log("user1", user1);
// console.log("user2", user1);

// // Viết chương trình yêu cầu người dùng nhập các lựa chọn
// // 1,Nhập thông tin user:name,email,password và lưu vào mảng
// // 2,In ra thông tin mảng người dùng ra bên ngoài
// // 3,Nhập tên người dùng từ trình duyệt và tìm kiếm tên người dùng đó có trong mảng không
// // 4,Thoát chương trình
// // các trường hợp còn lại thông báo là nhập sai lựa chọn

// const users = [];

// // hàm thêm user
// const addUser = () => {
//   const userName = prompt("nhập tên");
//   const email = prompt("nhập email");
//   const password = prompt("nhập password");
//   const user = {
//     userName: userName,
//     email: email,
//     password: password,
//   };
//   //   thêm phần tử vào cuối
//   users.push(user);
// };

// /**
//  * hàm tìm kiếm user theo tên
//  * @param {*} inputValue Tên cần tìm kiếm
//  * @param {*} array mảng chứa danh sách user
//  * @returns trả về index nếu như tìm thấy user,-1 nếu không tìm thấy
//  */
// const handleSearch = (inputValue, array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].userName === inputValue) {
//       return i; //trả về vị trí tìm thấy
//     } else {
//       return -1;
//     }
//   }
// };

// /**
//  * hàm đọc danh sách user
//  * @param {*} array  mảng user
//  */
// const readUser = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     console.log("Danh sách user", array[i]);
//   }
// };
// do {
//   choose = +prompt("nhập lựa chọn");
//   switch (choose) {
//     case 1:
//       //   gọi hàm
//       addUser();
//       break;
//     case 2:
//       // gọi hàm read User
//       readUser(users);
//       break;

//     case 3:
//       const isUserName = prompt("nhập tên ");
//       for (i = 0; i <= users.length; i++) {
//         if (users[i].userName == isUserName) {
//           console.log("có", isUserName);
//           break;
//         } else {
//           console.log("không có", isUserName);
//         }
//       }
//       break;
//     default:
//       console.log("nhập sai lựa chọn");
//       break;
//   }
// } while (choose != 4);

const users = [];

const products = [];

const carts = [];

let choose;

do {
  choose = +prompt("mời bạn nhập lựa chọn");
  switch (choose) {
    case 1:
      const userId = prompt("nhập Id :");
      const userName = prompt("nhập tên user :");
      const email = prompt("nhập email :");
      const password = prompt("nhập password :");

      // Tạo đối tượng user
      const user = {
        userId: userId,
        userName: userName,
        email: email,
        password,
        password,
        createdAt: new Data().toIOSSring().split("T")[0],
      };
      // thêm đối tượng user
      users.push(user);
      break;
    case 2:
      const producId = +prompt("Nhập id sản phẩm");
      const producName = +prompt("Nhập tên sản phẩm");
      const price = +prompt("Nhập giá sản phẩm");

      const product = {
        producId: producId,
        producName: producName,
        price: price,
      };
      // thêm đối tượng product
      products.push(product);
      break;
    case 3:
      const cartId = +prompt("nhập id cart :");
      const proId = +prompt("Nhập ID của sản phẩm");
      const uId = +prompt("nhập id của user");
      const quantity = +prompt("nhập id của user");

      //   tạo đối tượng cart
      const cart = {
        cartId: cartId,
        proId: proId,
        uId: uId,
        quantity: quantity,
      };
      // thêm đối tượng cart vào trong mảng
      carts.push(cart);
      break;

    case 4:
      for (let i = 0; i < users.length; i++) {
        console.log("danh sách user :", users[i]);
      }
      break;
    case 5:
      for (let i = 0; i < users.length; i++) {
        console.log(" product:", products[i]);
      }
      break;
    case 6:
      for (let i = 0; i < users.length; i++) {
        console.log(" art:", carts[i]);
      }
      break;
    case 7:
      // Biến lưu trữ tổng giá
      let total = 0;
      // lặp qua từng phần tử của mảng cats
      for (let i = 0; i < users.length; i++) {
        // lấy ra id của product từ mảng cart
        const productId = carts[i].productId;
        // tìm kiếm product theo product id
        const productById = products.find((pro) => pro.productId === productId);
        // cộng dồn giá tiền
        // tổng= Giá trị trước đó +giá sản phẩm *số lượng
        total = total + findProduct.price * carts[i].quantity;
      }
      console.log("tổng số tiền của giỏ hàng :", total);
      break;
    default:
      break;
  }
} while (choose !== 8);
