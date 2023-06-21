// console.log("Hello");
// import Person, { HocVien } from "../models/Person.js";
import Person from "../models/Person.js";
import { HocVien } from "../models/Person.js";
import { NhanVien } from "../models/Person.js";
import { KhachHang } from "../models/Person.js";
import ListPerson from "../models/ListPerson.js";

let listPerson = new ListPerson();

listPerson.layLocal();

document.getElementById('btnThemPerson').addEventListener
    ('click', () => {
        let arrInput = document.querySelectorAll('#personForm input, #personForm select');
        console.log(arrInput)
        let person = new Person();
        // Object.assign(person, item);

        for (let item of arrInput) {
            let { id, value } = item;
            person[id] = value;
        }
       
        console.log(person);
        listPerson.themPerson(person)
        listPerson.renderPerson();
        listPerson.luuLocal();
              
        document.getElementById('btnClose').click();
    });
// xoá Person
window.xoaPerson = (idPerson) => {
    listPerson.xoaPerson(idPerson);
}
// lấy thông tin person
window.layThongTinPerson = (idPerson) => {
    listPerson.layThongTinPerson(idPerson);
}
window.chinhSuaPerson = (person) => {
    listPerson.chinhSuaPerson(person);
}
// cập nhật person
document.getElementById('btnCapNhatPerson').onclick = () => {
    let arrInput = document.querySelectorAll('#personForm input, #personForm select');

    let person = new Person();
    for (let item of arrInput) {
        let { id, value } = item;
        person[id] = value;
    }
    console.log(person);
    listPerson.chinhSuaPerson(person);
}


// Sắp xếp person
document.getElementById('sapXep').onclick = () => {
    listPerson.sortNames();
    listPerson.renderPerson();

}
// Lọc person
document.getElementById('locPerson').onclick = () => {


    let locPerson = document.getElementById('sepLoai').value * 1;

    if (locPerson == 1) {
        listPerson.filterPersonHocVien();
    } else if (locPerson == 2) {
        listPerson.filterPersonNhanVien();
    } else if (locPerson == 3) {
        listPerson.filterPersonKhachHang();
    }
}

// tìm kiém person
// function timKiemPerson(event){
//     let value = event.target.value
//     console.log(value)
// }
window.timKiemPerson =(event) => {
    let value = event.target.value
    // listPerson.timKiemPerson(value);
    console.log(value)
    listPerson.timKiemPerson(value)
}