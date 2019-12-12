export const Hostel = [
    {id:1, number:8, head:'Тимошенко Н.В.'},
    {id:2, number:10,head:'Смішний Г.Г.'},
    {id:3, number:1, head:'Дорошенко А.К.'},
    {id:4, number:2, head:'Крикун О.В.'},
    {id:5, number:3, head:'Іваненко Н.Р.'},
    {id:6, number:4, head:'Сидоров Н.С.'},
    {id:7, number:5, head:'Міщенко К.В.'},
    {id:8, number:6, head:'Бондаренко М.С.'},
    {id:9, number:7, head:'Біла А.В.'},
    {id:10, number:9, head:'Чорна І.К.'},
]

export const RoomType = [
    {id:1, name:'коридорний', price:560},
    {id:2, name:'блочний', price:700},
]

export const Room = [
    {id:1, number:1, capacity:4, hostel_id:8, roomtype_id:1},
    {id:2, number:1, capacity:3, hostel_id:10, roomtype_id:2},
    {id:3, number:1, capacity:4, hostel_id:1, roomtype_id:2},
    {id:4, number:1, capacity:4, hostel_id:2, roomtype_id:1},
    {id:5, number:1, capacity:4, hostel_id:3, roomtype_id:1},
    {id:6, number:1, capacity:3, hostel_id:4, roomtype_id:2},
    {id:7, number:1, capacity:4, hostel_id:5, roomtype_id:1},
    {id:8, number:1, capacity:4, hostel_id:6, roomtype_id:2},
    {id:9, number:1, capacity:3, hostel_id:7, roomtype_id:1},
    {id:10, number:1, capacity:4, hostel_id:9, roomtype_id:1},
]

export const Privelege = [
    {id:1, name: 'інвалід 1 групи', discount:100},
    {id:2, name: 'дитина учасника АТО', discount:50},
    {id:3, name: 'дитина-сирота', discount:50},
    {id:4, name: 'дитина з багатодітної сім`ї', discount:100},
    {id:5, name: 'учасник бойових дій', discount:100},
    {id:6, name: 'дитина з малозабезпеченої сім`ї', discount:50},
]

export const Class = [
    {id:1, title:'ІТ-72', scientificproposal_id:null, curator_id:null},
    {id:2, title:'СА-71', scientificproposal_id:null, curator_id:null},
    {id:3, title:'ММ-73', scientificproposal_id:null, curator_id:null},
    {id:4, title:'ТФ-74', scientificproposal_id:null, curator_id:null},
    {id:5, title:'ЗФ-71', scientificproposal_id:null, curator_id:null},
    {id:6, title:'ПМ-72', scientificproposal_id:null, curator_id:null},
    {id:7, title:'СП-73', scientificproposal_id:null, curator_id:null},
    {id:8, title:'ФЛ-74', scientificproposal_id:null, curator_id:null},
    {id:9, title:'ФТ-71', scientificproposal_id:null, curator_id:null},
    {id:10, title:'РТ-72', scientificproposal_id:null, curator_id:null},
]

export const Student = [
    {id:1, firstname:'Поліна', lastname:'Сергієнко', hostel_need:'t', class_id:1},
    {id:2, firstname:'Ірина', lastname:'Матвійчук', hostel_need:'f', class_id:2},
    {id:3, firstname:'Володимир', lastname:'Мазур', hostel_need:'t', class_id:3},
    {id:4, firstname:'Ганна', lastname:'Руденко', hostel_need:'f', class_id:4},
    {id:5, firstname:'Назар', lastname:'Федоренко', hostel_need:'t', class_id:5},
    {id:6, firstname:'Юлія', lastname:'Новак', hostel_need:'f', class_id:6},
    {id:7, firstname:'Андрій', lastname:'Рудий', hostel_need:'t', class_id:7},
    {id:8, firstname:'Марія', lastname:'Дідович', hostel_need:'f', class_id:8},
    {id:9, firstname:'Святослав', lastname:'Кавун', hostel_need:'t', class_id:9},
    {id:10, firstname:'Кирило', lastname:'Зікратий', hostel_need:'f', class_id:10},
]

export const Inventory = [
    {id:1, name:'матрац', count:500},
    {id:2, name:'покривало', count:478},
    {id:3, name:'ковдра', count:689},
    {id:4, name:'подушка', count:870},
    {id:5, name:'постільна білизна', count:232},
    {id:6, name:'стілець', count:980},
    {id:7, name:'полиця', count:900},
    {id:8, name:'стіл', count:789},
    {id:9, name:'тумба', count:897},
    {id:10, name:'шафа', count:600},
]

export const HostelResident = [
    {id:1, abilities:'bla bla bla', student_id:1, room_id:1, privelege_id:1},
    {id:2, abilities:'bla bla bla', student_id:2, room_id:2, privelege_id:2},
    {id:3, abilities:'bla bla bla', student_id:3, room_id:3, privelege_id:3},
    {id:4, abilities:'bla bla bla', student_id:4, room_id:4, privelege_id:4},
    {id:5, abilities:'bla bla bla', student_id:5, room_id:5, privelege_id:5},
    {id:6, abilities:'bla bla bla', student_id:6, room_id:6, privelege_id:6},
    {id:7, abilities:'bla bla bla', student_id:7, room_id:7, privelege_id:null},
    {id:8, abilities:'bla bla bla', student_id:8, room_id:8, privelege_id:null},
    {id:9, abilities:'bla bla bla', student_id:9, room_id:9, privelege_id:null},
    {id:10, abilities:'bla bla bla', student_id:10, room_id:10, privelege_id:null},
]

export const Cheque = [
    {id:10, payment_date:'2019-09-08', sum:100, start_date:'2019-09-01', end_date:'2019-12-31', hostelresident_id:5},
    {id:13, payment_date:'2019-09-01', sum:700, start_date:'2019-09-01', end_date:'2019-12-31', hostelresident_id:8},
    // {id:8, payment_date:'2019-09-17', sum:300, start_date:'2019-09-01', end_date:'2019-12-31', hostelresident_id:4},//
    // {id:9, payment_date:'2019-09-17', sum:300, start_date:'2019-09-01', end_date:'2019-12-31', hostelresident_id:4},//
    {id:14, payment_date:'2019-10-01', sum:700, start_date:'2019-10-01', end_date:'2019-10-31', hostelresident_id:8},
    {id:3, payment_date:'2019-10-05', sum:900, start_date:'2019-09-01', end_date:'2019-10-31', hostelresident_id:2},
    {id:4, payment_date:'2019-10-05', sum:600, start_date:'2019-11-01', end_date:'2019-12-31', hostelresident_id:2},
    {id:1, payment_date:'2019-10-12', sum:600, start_date:'2019-09-01', end_date:'2019-09-31', hostelresident_id:1},
    {id:2, payment_date:'2019-10-12', sum:600, start_date:'2019-10-01', end_date:'2019-11-30', hostelresident_id:1},
    {id:5, payment_date:'2019-10-17', sum:100, start_date:'2019-09-01', end_date:'2019-12-31', hostelresident_id:3},
    {id:6, payment_date:'2019-10-17', sum:300, start_date:'2019-09-01', end_date:'2019-12-31', hostelresident_id:3},
    {id:7, payment_date:'2019-10-17', sum:200, start_date:'2019-09-01', end_date:'2019-12-31', hostelresident_id:3},
    {id:15, payment_date:'2019-11-01', sum:700, start_date:'2019-11-01', end_date:'2019-11-30', hostelresident_id:8},
    {id:16, payment_date:'2019-11-01', sum:700, start_date:'2019-12-01', end_date:'2019-12-31', hostelresident_id:8},
    {id:12, payment_date:'2019-11-05', sum:1000, start_date:'2019-09-01', end_date:'2019-12-31', hostelresident_id:7},
    {id:11, payment_date:'2019-11-08', sum:2000, start_date:'2019-09-01', end_date:'2019-12-31', hostelresident_id:6},
    {id:17, payment_date:'2019-12-01', sum:800, start_date:'2019-10-01', end_date:'2019-10-31', hostelresident_id:9},
    {id:18, payment_date:'2019-12-05', sum:1000, start_date:'2019-09-01', end_date:'2019-10-31', hostelresident_id:10},
    {id:19, payment_date:'2019-12-11', sum:900, start_date:'2019-11-01', end_date:'2019-11-30', hostelresident_id:10},
    {id:19, payment_date:'2019-12-11', sum:900, start_date:'2019-12-01', end_date:'2019-12-31', hostelresident_id:10},


    // {id:1, payment_date:'2019-10-12', sum:600, start_date:'2019-09-01', end_date:'2019-09-31', hostelresident_id:1},
    // {id:2, payment_date:'2019-10-12', sum:600, start_date:'2019-10-01', end_date:'2019-11-30', hostelresident_id:1},
    // {id:3, payment_date:'2019-10-05', sum:900, start_date:'2019-09-01', end_date:'2019-10-31', hostelresident_id:2},
    // {id:4, payment_date:'2019-10-05', sum:600, start_date:'2019-11-01', end_date:'2019-12-31', hostelresident_id:2},
    // {id:5, payment_date:'2019-10-017', sum:100, start_date:'2019-09-01', end_date:'2019-12-31', hostelresident_id:3},
    // {id:6, payment_date:'2019-10-017', sum:300, start_date:'2019-09-01', end_date:'2019-12-31', hostelresident_id:3},
    // {id:7, payment_date:'2019-10-017', sum:200, start_date:'2019-09-01', end_date:'2019-12-31', hostelresident_id:3},
    // {id:8, payment_date:'2019-09-017', sum:300, start_date:'2019-09-01', end_date:'2019-12-31', hostelresident_id:4},//
    // {id:9, payment_date:'2019-09-017', sum:300, start_date:'2019-09-01', end_date:'2019-12-31', hostelresident_id:4},//
    // {id:10, payment_date:'2019-09-08', sum:100, start_date:'2019-09-01', end_date:'2019-12-31', hostelresident_id:5},
    // {id:11, payment_date:'2019-11-08', sum:2000, start_date:'2019-09-01', end_date:'2019-12-31', hostelresident_id:6},
    // {id:12, payment_date:'2019-11-05', sum:1000, start_date:'2019-09-01', end_date:'2019-12-31', hostelresident_id:7},
    // {id:13, payment_date:'2019-11-01', sum:700, start_date:'2019-09-01', end_date:'2019-12-31', hostelresident_id:8},
    // {id:14, payment_date:'2019-11-01', sum:700, start_date:'2019-10-01', end_date:'2019-10-31', hostelresident_id:8},
    // {id:15, payment_date:'2019-11-01', sum:700, start_date:'2019-11-01', end_date:'2019-11-30', hostelresident_id:8},
    // {id:16, payment_date:'2019-11-01', sum:700, start_date:'2019-12-01', end_date:'2019-12-31', hostelresident_id:8},
    // {id:17, payment_date:'2019-12-01', sum:800, start_date:'2019-10-01', end_date:'2019-10-31', hostelresident_id:9},
    // {id:18, payment_date:'2019-12-05', sum:1000, start_date:'2019-09-01', end_date:'2019-10-31', hostelresident_id:10},

]

export const DoInventory = [
    {id:1, inventory_date:'2019-08-27', inventory_id:1, hostelresident_id:1},
    {id:2, inventory_date:'2019-08-28', inventory_id:2, hostelresident_id:2},
    {id:3, inventory_date:'2019-08-29', inventory_id:3, hostelresident_id:3},
    {id:4, inventory_date:'2019-08-29', inventory_id:4, hostelresident_id:4},
    {id:5, inventory_date:'2019-08-28', inventory_id:5, hostelresident_id:5},
    {id:6, inventory_date:'2019-08-27', inventory_id:6, hostelresident_id:6},
    {id:7, inventory_date:'2019-08-29', inventory_id:7, hostelresident_id:7},
    {id:8, inventory_date:'2019-08-28', inventory_id:8, hostelresident_id:8},
    {id:9, inventory_date:'2019-08-30', inventory_id:9, hostelresident_id:9},
    {id:10, inventory_date:'2019-08-27', inventory_id:10, hostelresident_id:10},
]