import Person from "./Person.js";
import { HocVien } from "./Person.js";
import { NhanVien } from "./Person.js";
import { KhachHang } from "./Person.js";


export default class ListPerson {
  constructor() {
    this.arrListPerson = [];
  }
nhanGiaTri(select) {
  return document.getElementById(select).value;
}

themPerson(person) {
  const loaiPerson = this.nhanGiaTri('loaiPerson');
  const danhGiaSelect = this.nhanGiaTri('danhGia')
 
  // kiểm tra rỗng
  if (loaiPerson === 'hocVien') {
    if (
      !person.personID ||
      !person.hoTen ||
      !person.email ||
      !person.diaChi ||
      loaiPerson == "" ||
      !person.diemHoa ||
      !person.diemLy ||
      !person.diemToan
    ) {
      alert('Thông tin học viên chưa đầy đủ');
      return;
    }
  } else if (loaiPerson === 'nhanVien') {
    if (
      !person.personID ||
      !person.hoTen ||
      !person.email ||
      !person.diaChi ||
      loaiPerson == "" ||
      !person.soNgayLam ||
      !person.luongNgay
    ) {
      alert('Thông tin nhân viên chưa đầy đủ');
      return;
    }
  } else if (loaiPerson === 'khachHang') {
    if (
      !person.personID ||
      !person.hoTen ||
      !person.email ||
      !person.diaChi ||
      loaiPerson == "" ||
      !person.tenCty ||
      !person.giaTriHoaDon ||
      danhGiaSelect == ""
    ) {
      alert('Thông tin khách hàng chưa đầy đủ');
      return;
    }
  } else {
    alert('Loại người không hợp lệ');
    return;
  }

   // regex email
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   // kiểm tra định dạnh email
   if(!emailRegex.test(person.email)){
     alert('Sai định dạng email');
     return;
   }
   // regex numer
   const numberRegex = /^\d+$/;
    // kiểm tra định dạnh số
  if(loaiPerson === 'hocVien'){
   if(!numberRegex.test(person.diemToan) || !numberRegex.test(person.diemLy) ||!numberRegex.test(person.diemHoa)){
     alert('Sai định dạng số');
     return;
   }
  }else if(loaiPerson === 'khachHang'){
   if(!numberRegex.test(person.giaTriHoaDon)){
     alert('Sai định dạng số');
     return;
   }
  }
  // regex chữ
  const nameRegex = /^[a-zA-ZÀ-ỹ\s]+$/;
// kiểm tra định dạnh chữ
if(!nameRegex.test(person.hoTen)){
  alert('Sai định dạng họ tên');
  return;
}

  // regex địa chỉ
  const addressRegex = /^[a-zA-Z0-9\s,'.-]+$/;
  // const vietnameseAddressRegex = /^\d+\/\d+\/\d+\s[A-Za-z\s\d.'-]+\s[A-Za-z\s\d.'-]+\s[A-Za-z\s\d.'-]+$/;
// kiểm tra định dạnh địa chỉ
if(!addressRegex.test(person.diaChi)){
  alert('Sai định dạng địa chỉ');
  return;
}
  this.arrListPerson.push(person);
  alert('Bạn đã thêm thành công');
}


  renderPerson() {
    let content = this.arrListPerson
      .map((item, index) => {
        // let { personID, hoTen, email, diaChi, loaiPerson } = item;
        // console.log(item);
        let person = new Person();
        Object.assign(person, item);
        console.log(person);
        let {
          personID,
          hoTen,
          email,
          diaChi,
          loaiPerson,
          diemTB,
          tinhLuong,
          tenCty,
          giaTriHoaDon,
          danhGia,
        } = person;
        return `
        <tr>
        <td>${personID}</td>
        <td>${hoTen}</td>
        <td>${email}</td>
        <td>${diaChi}</td>
        <td>${loaiPerson == 'hocVien' ? diemTB() : '<i class="fa-regular fa-circle-xmark"></i>'}</td>
        <td>${loaiPerson == 'nhanVien' ? tinhLuong() : '<i class="fa-regular fa-circle-xmark"></i>'}</td>
        <td>${loaiPerson == 'khachHang' ? tenCty : '<i class="fa-regular fa-circle-xmark"></i>'}</td>
        <td>${loaiPerson == 'khachHang' ? giaTriHoaDon : '<i class="fa-regular fa-circle-xmark"></i>'}</td>
        <td>${loaiPerson == 'khachHang' ? danhGia : '<i class="fa-regular fa-circle-xmark"></i>'}</td>
        <td>
        <button class="btn btn-danger" onclick="xoaPerson('${personID}')">Xoá</button>
        <button class="btn btn-warning" onclick="layThongTinPerson('${personID}')">Sửa</button>
        </td>
    </tr>
        `
      }).join("")
    const selectPerson = document.getElementById("loaiPerson");
    const diemToan = document.getElementById('toan');
    const diemLy = document.getElementById('ly');
    const diemHoa = document.getElementById('hoa');
    const luong = document.getElementById("luong");
    const ngayLam = document.getElementById("ngayLam");
    const cty = document.getElementById("cty");
    const hoaDon = document.getElementById("hoaDon");
    const rating = document.getElementById("rating");
    selectPerson.addEventListener("change", function () {
      if (this.value === "hocVien") {
        luong.style.display = "none";
        cty.style.display = "none";
        hoaDon.style.display = "none";
        rating.style.display = "none";
        ngayLam.style.display = "none";
        diemToan.style.display = "block";
        diemLy.style.display = "block";
        diemHoa.style.display = "block";
      } else if (this.value === 'nhanVien') {
        diemToan.style.display = "none";
        diemLy.style.display = "none";
        diemHoa.style.display = "none";
        cty.style.display = "none";
        rating.style.display = "none";
        hoaDon.style.display = "none";
        luong.style.display = "block";
        ngayLam.style.display = "block";
      }else if(this.value === 'khachHang'){
        diemToan.style.display = "none";
        diemLy.style.display = "none";
        diemHoa.style.display = "none";
        ngayLam.style.display = "none";
        luong.style.display = "none";
        hoaDon.style.display = "block";
        rating.style.display = "block";
        cty.style.display = "block";
      }
    });

    // console.log(content);
    document.getElementById("tbodyPerson").innerHTML = content;
  }

  luuLocal() {
    localStorage.setItem("arrListPerson", JSON.stringify(this.arrListPerson));
  }

  layLocal() {
    let personLocal = JSON.parse(localStorage.getItem("arrListPerson"));
    // console.log(personLocal);
    if (personLocal) {
      this.arrListPerson = [...personLocal];

      this.renderPerson();
    }
  }
  xoaPerson(idPerson) {
    let index = this.arrListPerson.findIndex(
      (item) => item.personID == idPerson
    );
    if (index != -1) {
      this.arrListPerson.splice(index, 1);
      this.renderPerson();
      this.luuLocal();
    }
  }

  layThongTinPerson(idPerson) {
    let person = this.arrListPerson.find((item) => item.personID == idPerson);
    if (person) {
      document.getElementById("btnThem").click();
      let arrInput = document.querySelectorAll(
        "#personForm input, #personForm select"
      );
      for (let item of arrInput) {
        let { id } = item;
        item.value = person[id];
      }
    }
  }
  chinhSuaPerson(person) {
    let index = this.arrListPerson.findIndex(
      (item) => item.personID == person.personID
    );
    if (index != -1) {
      this.arrListPerson[index] = person;
      this.renderPerson();
      this.luuLocal();
      document.getElementById("btnClose").click();
    }
  }

  sortNames() {
    // Create a copy of the original array to avoid modifying the input array
    let sortedNames = this.arrListPerson;
    // console.log(this.arrListPerson);
    
    sortedNames.sort((a, b) => {
      // Convert names to lowercase for case-insensitive sorting
      let nameA = a.hoTen.toLowerCase();
      let nameB = b.hoTen.toLowerCase();
      
      // Compare the lowercase names and return the appropriate value
      if (nameA < nameB) {
        return -1; // nameA comes before nameB
      } else if (nameA > nameB) {
        return 1; // nameA comes after nameB
      } else {
        return 0; // names are equal
      }
    });
    
    // console.log(sortedNames);
    this.renderPerson();
    // return sortedNames;
  };  

// filter hocVien
filterPersonHocVien() {
  let arrLocPerson = this.arrListPerson.filter(item => item.loaiPerson === 'hocVien');
  let content = arrLocPerson.map(item => {
    let person = new Person();
    Object.assign(person, item);
    let { personID, hoTen, email, diaChi, loaiPerson, diemTB, tinhLuong, tenCty, giaTriHoaDon, danhGia } = person;
    let danhGiaPerson = '';
    if (danhGia === 'danhGia1') {
      danhGiaPerson = 'Rất tốt';
    } else if (danhGia === 'danhGia2') {
      danhGiaPerson = 'Tốt';
    } else if (danhGia === 'danhGia3') {
      danhGiaPerson = 'Tàm tạm';
    } else if (danhGia === 'danhGia4') {
      danhGiaPerson = 'Cần cải thiện';
    } else if (danhGia === 'danhGia5') {
      danhGiaPerson = 'Tệ';
    }

    return `
      <tr>
        <td>${personID}</td>
        <td>${hoTen}</td>
        <td>${email}</td>
        <td>${diaChi}</td>
        <td>${loaiPerson === 'hocVien' ? diemTB() : 'X'}</td>
        <td>${loaiPerson === 'nhanVien' ? tinhLuong() : 'X'}</td>
        <td>${loaiPerson === 'khachHang' ? tenCty : 'X'}</td>
        <td>${loaiPerson === 'khachHang' ? giaTriHoaDon : 'X'}</td>
        <td>${loaiPerson === 'khachHang' ? danhGiaPerson : 'X'}</td>
        <td>
          <button class="btn btn-danger" onclick="xoaPerson('${personID}')">Xoá</button>
          <button class="btn btn-warning" onclick="layThongTinPerson('${personID}')">Sửa</button>
        </td>
      </tr>
    `;
  }).join("");

  document.getElementById('tbodyPerson').innerHTML = content;
}


// filter nhanVien
filterPersonNhanVien() {
  let arrLocPerson = this.arrListPerson.filter(item => item.loaiPerson === 'nhanVien');
  let content = arrLocPerson.map(item => {
    let person = new Person();
    Object.assign(person, item);
    let { personID, hoTen, email, diaChi, loaiPerson, diemTB, tinhLuong, tenCty, giaTriHoaDon, danhGia } = person;
    let danhGiaVN = '';
    if (danhGia === 'danhGia1') {
      danhGiaVN = 'Rất tốt';
    } else if (danhGia === 'danhGia2') {
      danhGiaVN = 'Tốt';
    } else if (danhGia === 'danhGia3') {
      danhGiaVN = 'Bình thường';
    } else if (danhGia === 'danhGia4') {
      danhGiaVN = 'Không tốt';
    } else if (danhGia === 'danhGia5') {
      danhGiaVN = 'Tệ';
    }

    return `
      <tr>
        <td>${personID}</td>
        <td>${hoTen}</td>
        <td>${email}</td>
        <td>${diaChi}</td>
        <td>${loaiPerson === 'hocVien' ? diemTB() : 'X'}</td>
        <td>${loaiPerson === 'nhanVien' ? tinhLuong() : 'X'}</td>
        <td>${loaiPerson === 'khachHang' ? tenCty : 'X'}</td>
        <td>${loaiPerson === 'khachHang' ? giaTriHoaDon : 'X'}</td>
        <td>${loaiPerson === 'khachHang' ? danhGiaVN : 'X'}</td>
        <td>
          <button class="btn btn-danger" onclick="xoaPerson('${personID}')">Xoá</button>
          <button class="btn btn-warning" onclick="layThongTinPerson('${personID}')">Sửa</button>
        </td>
      </tr>
    `;
  }).join("");

  document.getElementById('tbodyPerson').innerHTML = content;
}
// filter khachHang
filterPersonKhachHang() {
  let arrLocPerson = this.arrListPerson.filter(item => item.loaiPerson === 'khachHang');
  let content = arrLocPerson.map(item => {
    let person = new Person();
    Object.assign(person, item);
    let { personID, hoTen, email, diaChi, loaiPerson, diemTB, tinhLuong, tenCty, giaTriHoaDon, danhGia } = person;
    let danhGiaVN = '';
    if (danhGia === 'danhGia1') {
      danhGiaVN = 'Rất tốt';
    } else if (danhGia === 'danhGia2') {
      danhGiaVN = 'Tốt';
    } else if (danhGia === 'danhGia3') {
      danhGiaVN = 'Bình thường';
    } else if (danhGia === 'danhGia4') {
      danhGiaVN = 'Không tốt';
    } else if (danhGia === 'danhGia5') {
      danhGiaVN = 'Tệ';
    }

    return `
      <tr>
        <td>${personID}</td>
        <td>${hoTen}</td>
        <td>${email}</td>
        <td>${diaChi}</td>
        <td>${loaiPerson === 'hocVien' ? diemTB() : 'X'}</td>
        <td>${loaiPerson === 'nhanVien' ? tinhLuong() : 'X'}</td>
        <td>${loaiPerson === 'khachHang' ? tenCty : 'X'}</td>
        <td>${loaiPerson === 'khachHang' ? giaTriHoaDon : 'X'}</td>
        <td>${loaiPerson === 'khachHang' ? danhGiaVN : 'X'}</td>
        <td>
          <button class="btn btn-danger" onclick="xoaPerson('${personID}')">Xoá</button>
          <button class="btn btn-warning" onclick="layThongTinPerson('${personID}')">Sửa</button>
        </td>
      </tr>
    `;
  }).join("");

  document.getElementById('tbodyPerson').innerHTML = content;
}


}