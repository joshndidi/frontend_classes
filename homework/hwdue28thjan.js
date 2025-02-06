const character = "#";
const count = 10;
const rows = [];
let inverted = false;
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}
let result = ""
for (const row of rows) {
  result = result + row + "\n";
}
console.log(result);
// answer to 3 and 4
answerto3 =`Hello`
// answer to 5
const firstClassFuntion = (a, b) => {
  return (a + " " + b);
}

console.log(firstClassFuntion("hi", "bye"));
// answer to 6
function fun() {
  console.log("Hello, World!");
}
function fun2(action) {
  action();
  action();
}

fun2(fun);
