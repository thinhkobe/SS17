const array = [1, 2, 3, 4, 5, 6, 7, 8];

// lọc ra những phần tử thỏa mãn hoặc không thỏa mãn điều kiện
// Nó sẽ trả về một mảng mới chứa các giá trị thỏa mãn điều kiện,nếu không có thì sẽ trả về mảng
// rỗng

// ứng dụng trong trường hợp muốn xóa một phần tử khỏi mảng
// const filterNumber = array.filter((item, index) => {
//   console.log(`item:${item},index:${index}`);
//   return item !== 1;
// });
// const filterNumber = array.filter((arr) => arr !== 1);//kết quả  [2, 3, 4, 5, 6, 7, 8]

// const filterNumber = array.filter((arr) => arr > 5); //kết quả [6, 7, 8]
const filterNumber = array.filter((arr) => arr > 9); //kết quả []

// Tìm kiếm một phần tử trong mảng theo một điều kiện cụ thể=>hàm find()

// Nó sẽ trả về một phần tử có trong mảng và thỏa mãn điều kiện,Nếu không có điều kiện nào
// thỏa mãn nó sẽ trả về undefined

// const findNumber = array.find((arr) => arr !== 2); //kết quả:2
const findNumber = array.find((arr) => arr !== 9); //kết quả:undefined

console.log(findNumber);

// lấy ra vị trí của một phần tử trong mảng theo một điều kiện nếu thỏa mãn điều kiện
// ứng dụng trong trường hợp tìm kiếm vị trí của một phần tử trong mảng nó trả về vị trí của
// phần tử nếu thỏa mãn điều kiện;và trả về -1 nếu không thỏa mãn điều kiện

// const findIndex = array.findIndex((arr) => arr === 4);//kết quả 3
const findIndex = array.findIndex((arr) => arr === 10); //kết quả -1

console.log(findIndex);

//hàm làm thay đổi tất cả giá trị của phần tử trong mảng=>fill()

const fillArray = array.fill(1, 0, 5); //kết quả[1, 1, 1, 1, 1, 6, 7, 8]

console.log(fillArray);
//Kiểm tra xem là các phần tử có trong mản có thỏa mãn điều kiện không
//chỉ cần có 1 điều kiện sai sẽ trả về false
const chekAllCondition = array.every((arr) => arr >= 8); //kết quả false

//Kiểm tra chỉ cần một điều kiện thỏa mãn thì mảng sẽ nhận true

// const checkSomeCondition = array.some((arr) => arr >= 10); //kết quả true
// console.log(checkSomeCondition);

// //forEach()
// const listNumber = array.forEach((value) => {
//   console.log(`phần tử trong mảng ${value}`);
// });

// map():được sử dụng để lặp qua các phần tử của mảng và trả về một mảng mới đã được chỉnh sửa có
// số lượng của phần tử bằng với số lượng của mảng cũ

const users = [
  {
    userId: 1,
    userName: "A",
    age: 20,
  },
  {
    userId: 2,
    userName: "B",
    age: 21,
  },
  {
    userId: 3,
    userName: "C",
    age: 22,
  },
];

const htmls = users.map((value, index) => {
  return `
  <ul>
    <li>Số thứ tự:${index}</li>
    <li>Họ Và Tên: ${value.userName}</li>
    <li>Tuổi:${value.age}</li>
  </ul>    
  
  `;
});
// console.log(htmls.join(""));

//9,Reduce() Hay được sử dụng để thực hiện các tính toán trong một mảng

const prices = [200, 400, 500, 1000, 780];

//Cú pháp:array.reduce(callbackfc,initalValue)

const total = prices.reduce((prevValue, currentValue, currentIndex, arr) => {
  //Lần 1 :prevValue:0,currentValue:200=>total=200
  //Lần 2 :prevValue:200,currentValue:400=>total=600
  //Lần 3 :prevValue:600,currentValue:200=>total=1100
  return prevValue + currentValue;
}, 0);

console.log(total);

// Cách clone mảng

const numbers1 = [1, 2, 3, 4];
const arrCopy = [...numbers1, 5, 6, 7]; //spread operrator

const obj1 = {
  name: "A",
  age: 22,
};

const obj2 = {
  address: "hà nội",
  gender: "nam",
};
const mergeObj = { ...obj1, ...obj2 };
console.log("mergeObj:", mergeObj);

// Cách để truy xuất nhanh vào các thuộc tính trong đối tượng
// Destrutoring
const user = {
  name: "N",
  age: 22,
  address: "ha noi",
};

let { name, age, address } = user;
