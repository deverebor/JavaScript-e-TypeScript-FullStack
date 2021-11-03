// Type assertions

// const body = document.querySelector('body');

// if(body) body.style.backgroundColor = 'red';

//Non Null assertions => " ! "
// const body = document.querySelector('body')!;

// body.style.backgroundColor = 'red';

//Type Assertions
const body = document.querySelector('body') as HTMLBodyElement;

body.style.backgroundColor = 'red';
