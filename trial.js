function clickLimit() {
  let click = 0;
  return function () {
    if (click < 5) {
      click++;
      console.log(`Clicked : ${click} times`);
    } else {
      console.error("LIMIT EXCEEDED");
    }
  };
}
let fnc = clickLimit();
fnc();
fnc();
fnc();
fnc();
fnc();
clickLimit.click=0;
fnc();
