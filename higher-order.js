// This function should execute the callback function the number of times specified.
// When the function is being executed, the repetition number (i.e. 1 for the first call)
// should be passed to the callback.
const repeatFn = (times, callback) => {};

// Test repeatFn
const addButton = num => {
  const button = document.createElement('button');
  button.innerText = `Button ${num}`;
  document.querySelector('body').appendChild(button);
};
repeatFn(6, addButton);

const toThePower = (num, pow) => {
  let product = 1;
  repeatFn(pow, () => {
    product += product * num;
  });
  return product;
};

console.log(toThePower(3, 3));


const repeatFn = (num, callback) => {
  
  for (let i = 0; i < num; i++) {
    callback(i)
  }

};

const doubleNumber = (num) => {
  console.log(num * 2)
}

repeatFn(5, (param) => {
  console.log(param)
});

repeatFn(5, doubleNumber)