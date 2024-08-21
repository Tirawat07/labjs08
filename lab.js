// // Lab 1
// // จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด

// let calmulti = (...nums)  => {
//   let sum = 1
//   for (let num of nums){
//     console.log(num)
//     sum *= num
//   }
//   return sum
// }
// let result = calmulti (1,2,3,4,5,6)
// console.log(result)


// // ----------------------------------------------------------------------------
// // Lab 2
// // จงเขียนฟังก์ชัน filterOutOdds โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่

// let filterOdds = (...nums) => {
//   let odd = nums.filter((item) => {
//     console.log(item)
//     return item % 2 == 0
//   })
//   return odd
// }

// let result = filterOdds(1, 2, 3, 4, 5, 6, 7, 8)
// console.log(result)

// Lab 3
// จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด 
// และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน

// let mergeObj = (...obj) => {
//   let empty = {}
//   for (let i = 0; i < obj.length; i++) {
//     Object.assign(empty, obj[i])
//   }
//   return empty
// }
// let obj1 = {
//   fname: 'Tee',
//   lname: 'rawat'
// }
// let obj2 = {
//   nickName: 't'
// }

// let result = mergeObj(obj1, obj2)
// console.log(result)


// Lab 4
// จงรวม nums1 และ num2 เข้าด้วยกัน
// จงสร้าง array ที่ได้จากการนำ nums1 และ nums2 มารวมกัน แต่ให้เพิ่ม 5 เข้าไปก่อน nums1 และเพิ่ม - 6, -1 เข้าไประหว่าง nums1 กับ nums2
// หาผลรวมของทุก element ใน Array ที่ได้

// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];

// let num1 = [1, -2, 3, 4]
// let num2 = [8, 3, -8, 1]

// let num3 = [5, ...num1, -6, -1, ...num2]
// console.log(num3)

// let sum = num3.reduce((prev, curr) => {
//   return prev += curr
// }, 0)
// console.log('------- Lab 4 --------')
// console.log(sum)



// Lab 5
// จงเขียนฟังก์ชันที่ใช้คุณสมบัติของ Spread operator เพื่อรับค่า array1
// แล้วคืนค่าเป็น array ที่มีการเปลี่ยนแปลงค่าของ index ที่ 3 ให้มีค่าเท่ากับ ค่าเดิมยกกำลัง 2 โดยที่ array1 ไม่เกิดการเปลี่ยนแปลง

// let editArr = (arr) => {
//   let newArr = [...arr]
//   console.log(newArr)
//   // if(newArr.length > 3 ){

//   // }
//   newArr[3] = newArr[3] ** 2
//   return newArr
// }

// let arr = [2, 3, 4, 5, 6]
// let result = editArr(arr)
// console.log(result)

// Lab 6
// จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้ แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ spread parameter


// let handlePerson = (fname,lname,...hobbies) =>{
//   console.log(hobbies)
//   return [fname,lname, ...hobbies]

// }

// let result = handlePerson('Tirawat','Suayngam','html',)
// console.log(result)


// Lab 7
// จงเขียนฟังก์ชัน doubleAndReturnArgs โดยรับพารามิเตอร์มาเป็น Array และตัวเลขกี่ตัวก็ได้ และ return ค่าเป็น Array ที่ประกอบด้วยค่าเดิมในพารามิเตอร์ที่เป็น Array และค่าพารามิเตอร์ที่เป็นตัวเลขคูณสอง
// let doubleAndReturnArgs = (arr,...num) =>{
//   console.log(arr)
//   console.log(num)
//   let doubleAndReturnArgs = num.map((item) => item * 2)
//   console.log(doubleAndReturnArgs)
//   return arr.concat(...doubleAndReturnArgs)
// }

// let result = doubleAndReturnArgs([1,2,3],4,5,6,7,8)
// console.log(result)

// Lab 8
// จงเขียนฟังก์ชัน removeRandom โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element ถูกลบออกไปหนึ่งตัวโดยตำแหน่งที่ลบให้เกิดจากการสุ่ม






// lab9
// จงเขียนฟังก์ชัน cloneArray โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว
// let cloneArray = (arr)=> newarr = [...arr]
// arr = ["A","B","C","D"]
// console.log(cloneArray(arr))


// lab10
// จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object และ return ค่าเป็น Object ที่มี key-value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว

// let cloneArray = ()=> newobj = {...}

//  = {key:"A",key1:"B",key2:"C",key3:"D"}

// console.log(cloneArray())
// console.log(newobj)






// let doubleArr = (arr, ...num) => {
//     console.log(arr)
//     console.log(num)
//     let doubleArr = num.map((item) => item * 2)
//     console.log(doubleArr)
//     return arr.concat(...doubleArr)
//   }

//   let result = doubleArr([1, 2, 3], 4, 4, 5, 6, 7)
//   console.log(result)




//lab 11
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // *
// console.log(second); // **
// console.log(third); // ***
// เพราะตัวอาเรย์มีการdestructuring เมื่อนำมาเท่ากันตัวอาเรย์จะนำค่าstingในตำแหน่งที่เหมือนกันมาแทนค่ากัน

//lab 12
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
  
// ];
// console.log(raindrops); // *Raindrops on roses เนื่องจากสืบทอดค่าจากความสามารถของ destructuring
// console.log(whiskers); // **whiskers on kittens เนื่องจากสืบทอดค่าจากความสามารถของ destructuring
// console.log(aFewOfMyFavoriteThings); // ***[ Bright copper kettles,warm woolen mittens ] เมื่อมี... ซึ่งเป็นการประยุกต์ใช้rest parameter จะทำให้ค่าที่นำไปเทียบและค่าที่อยู่หลังจากตำแหน่งที่เทียบนั้นถูกเก็บกับไว้ในตัวแปล...aFewOfMyFavoriteThings ซึ่งถ้าเพิ่มตัวแปลที่จะนำมาเทียบไปเรื่อยๆ ค่าก็จะยังคงเก็บอยู่ในตัวแปล...aFewOfMyFavoriteThingsเหมือนเดิม



// // lab13
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // *เพราะอาเรย์ทำให้สลับตำแหน่งกันจากการแทนค่าตัวแปลให้เท่ากันคือ เปลี่ยนค่าตัวที่2กับ1


// // lab14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // *8 เกิดจากการnumPlanetsถูกนำไปเทียบกับvalue กับ facts  ดังนั้นค่าจึงเท่ากับ 8
// console.log(yearNeptuneDiscovered); // **1846 เกิดจากการyearNeptuneDiscoveredถูกนำไปเทียบกับvalue กับ facts  ดังนั้นค่าจึงเท่ากับ 8


//lab15
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // *{ yearMarsDiscovered:1659,yearNeptuneDiscovered:1846 }  เกิกจากdestructuringกับ rest parameter ทำให้ ตัวแปลdiscoveryYears เก็บค่าที่เหลือนอกเหนือจากnumPlanets


// //lab16
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // *`Your name is Alejandro and you like purple`
// getUserData({ firstName: 'Melissa' }); // **`Your name is Melissa and you like green`  เนื่องจากมีค่าdefault เป็นgreenจึงมีต่าออกมาเป็นgreen
// getUserData({}) // ***'undefined' เพราะfirst name ไม่ได้กำหนดค่าdefault 


// lab17
// ให้ใช้ Array destructuring ในการสลับค่าตัวแปร guest กับ admin

// let guest = ['Jane'];
// let admin = ['Pete'];

// [guest, admin] = [admin, guest];


// console.log(guest,admin)

// lab18
// จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object ที่มี keys เป็น firstName lastName และ age โดยถ้า user มีอายุมากกว่า 18 ให้แสดงผลเป็นการทักทายแล้วตามด้วยชื่อ - นามสกุล ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18 ให้แสดงผลว่า ไม่มีสิทธิ์เข้าใช้งาน(ใช้ destructuring)


  // function age(user) {
  //   const { firstName, lastName, age } = user;


  // if(age > 18 ){console.log(  `สวัสดี  ${firstName}  ${lastName}` )
  // } else {console.log('ไม่มีสิทธิ์เข้าใช้งาน')}
  // }

  // const user1 = { firstName: 'John', lastName: 'Doe', age: 20 };
  // const user2 = { firstName: 'Jane', lastName: 'Smith', age: 18 };

  // age(user1); // สวัสดี John Doe
  // age(user2);

// lab19จงเขียน Object destructuring โดยกำหนดให้
// ตัวแปร name เก็บค่า name property
// ตัวแปร age เก็บค่า years property
// ตัวแปร isAdmin เก็บค่า isAdmin property หากไม่มีค่าให้ default value เป็น false

// let user = {
//   name: 'John',
//   years: 27
// };
// let {name , years = age ,isAdmin = false } = user

// console.log(name)
// console.log(years)
// console.log(isAdmin)

// lab20
// จงเขียนฟังก์ชัน topSalaries(salaries) เพื่อ return ชื่อคนที่มี salary สูงสุด
// ถ้า salaries เป็น empty object ให้ return null
// ถ้ามีคนที่ได้ salary มากสุดให้ return ชื่อคนใดคนหนึ่ง



// lab21
// let arr = [1, [2, [[[3, 4], 5], 6]]];
// let[a, [b, [[[c, d], e], f]]] = arr
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f)

// lab22
// const  obj = { prop: 5, prop2: 10 };
// let { prop: a, prop2: b } =obj
// console.log(a);
// console.log(b);
// lab 23
// let a, b;
// let { a, b } = {a: 1, b: 2};
// console.log(a)
// console.log(b)


// lab 23
// let a, b;
// let { a, b } = {a: 1, b: 2};
// console.log(a)
// console.log(b)

// lab 24
// const [, , , a, b] = [1, 2, 3];
// console.log(a)
// console.log(b)

// lab25
// const q = { prop: 5, prop2: [10, 100] };
// let { prop: x, prop2: [, y] } = q
// console.log(x);
// console.log(y);


// lab26
// const q = {
//     prop: 'Hello',
//     prop2: {
//       prop2: {
//         nested: ['a', 'b', 'c']
//       }
//     }
//   };

//   let   {
//     prop: x,
//     prop2: {
//       prop2: {
//         nested: [, y, ]
//       }
//     }
//   } = q

//   console.log(x);
//   console.log(y);

// lab27
// const names = [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Jack', lastName: 'Dann' },
//     { firstName: 'Joe', lastName: 'Dunne' }
//   ];

// for (let key of names){
//     let{firstName , lastName} = key
//     fullname = `${firstName}  ${lastName}`
//     console.log(fullname)
// }



// lab28
// const users = [
//     { user: "Name1" },
//     { user: "Name2", age: 2 },
//     { user: "Name2" },
//     { user: "Name3", age: 4 }
//   ];


//   for (let i of users){
//     let {user,age="unknown"} = i
//     console.log(user,age);

//   }
