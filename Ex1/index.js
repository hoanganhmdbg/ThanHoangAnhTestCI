function findOppositeNumber(n, inputNumber) {

    if (n % 2 == 0 && n >= 4 && n < 20 && inputNumber < n && inputNumber >= 0) {
        let a = inputNumber + n / 2;
        if (a >= n) {
            console.log(`${a-n}`);
        } else {
            console.log(`${a}`);
        }
    } else {
        console.log("nhập số nguyen dương chẵn là nằm trong khoảng từ 4 đến 20");
        console.log(`nhập số trong khoảng từu 0 đến ${n - 1}`);
    }
}
findOppositeNumber(10, 2);
findOppositeNumber(10,6);
