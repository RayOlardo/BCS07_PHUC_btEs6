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

// document.getElementById('loaiPerson').addEventListener('change', () => {
//     let loaiPerson = document.getElementById('loaiPerson').value;
//     if (loaiPerson == "hocVien") {
//         document.getElementById('diemToan').disabled = false;
//         document.getElementById('diemLy').disabled = false;
//         document.getElementById('diemHoa').disabled = false;

//         document.getElementById('soNgayLam').disabled = true;
//         document.getElementById('luongNgay').disabled = true;
//         document.getElementById('tenCty').disabled = true;
//         document.getElementById('giaTriHoaDon').disabled = true;
//         document.getElementById('danhGia').disabled = true;
//     } else if (loaiPerson == "nhanVien") {
//         document.getElementById('soNgayLam').disabled = false;
//         document.getElementById('luongNgay').disabled = false;

//         document.getElementById('diemToan').disabled = true;
//         document.getElementById('diemLy').disabled = true;
//         document.getElementById('diemHoa').disabled = true;
//         document.getElementById('tenCty').disabled = true;
//         document.getElementById('giaTriHoaDon').disabled = true;
//         document.getElementById('danhGia').disabled = true;
//     } else if (loaiPerson == "khachHang") {
//         document.getElementById('tenCty').disabled = false;
//         document.getElementById('giaTriHoaDon').disabled = false;
//         document.getElementById('danhGia').disabled = false;

//         document.getElementById('diemToan').disabled = true;
//         document.getElementById('diemLy').disabled = true;
//         document.getElementById('diemHoa').disabled = true;
//         document.getElementById('soNgayLam').disabled = true;
//         document.getElementById('luongNgay').disabled = true;
//     }
// });

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
    // let noe = [listPerson.layLocal()];
    // console.log(noe);
    listPerson.sortNames();
    // console.log(name);
}

document.getElementById('locPerson').onclick = () => {
    listPerson.filterPerson();
}
 