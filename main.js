let production1 = new Product(1, "Iphone", "Apple", "15 promax", "new", "1000$", "10%", "10");
let arr = [production1];
// tạo 1 đối tượng manage nhận 1 mảng các thuộc tính của sản phẩm
let manage = new Production_Management(arr);
function addProduct(){
    let code = document.getElementById("code").value;
    let name = document.getElementById("fullName").value;
    let producer = document.getElementById("made").value;
    let model = document.getElementById("model").value;
    let status = document.getElementById("status").value;
    let price = document.getElementById("price").value;
    let promotion = document.getElementById("promotion").value;
    let inventory = document.getElementById("inventory").value;
    // tạo 1 đối tượng mới với các thông tin đc lấy từ các thẻ HTML
    let production = new Product(code, name, producer, model, status, price, promotion, inventory);
    // gọi hàm addProduction của đối tượng manage để thêm sản phẩm mới vào danh sách
    manage.addProduction(production);
    // gọi hàm showList để hiển thị danh sách
    manage.showList();
    clear();
}
function clear(){
    document.getElementById("code").value='';
    document.getElementById("fullName").value='';
    document.getElementById("made").value='';
    document.getElementById("model").value='';
    document.getElementById("status").value='';
    document.getElementById("price").value='';
    document.getElementById("promotion").value='';
    document.getElementById("inventory").value='';
}
function  deleteProduction(code){
    manage.delete(code);
    manage.showList();
}
 let productionCode = 0;
function editProduction(code){
    let production = manage.findProductionByCode(code);
    document.getElementById("code").value = production.code;
    document.getElementById("fullName").value= production.name;
    document.getElementById("made").value= production.product;
    document.getElementById("model").value = production.model;
    document.getElementById("status").value=production.status;
    document.getElementById("price").value=production.price;
    document.getElementById("promotion").value=production.promotion;
    document.getElementById("inventory").value=production.inventory;
    productionCode = code;
}
function updateProduct(){
    let code = document.getElementById("code").value;
    let name = document.getElementById("fullName").value;
    let producer = document.getElementById("made").value;
    let model = document.getElementById("model").value;
    let status = document.getElementById("status").value;
    let price = document.getElementById("price").value;
    let promotion = document.getElementById("promotion").value;
    let inventory = document.getElementById("inventory").value;
    let production = manage.findProductionByCode(productionCode);
    manage.edit(code, name, producer, model, status, price, promotion, inventory);
    manage.showList();
    clear();
}

manage.showList();