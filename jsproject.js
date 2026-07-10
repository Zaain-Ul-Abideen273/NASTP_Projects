// 1. Add a paragraph and a div to the document body
const p = document.createElement('p');
p.id = 'myParagraph';
p.textContent = 'Original text';

const div = document.createElement('div');
div.id = 'myDiv';

document.body.appendChild(p);
document.body.appendChild(div);

// 2. Select both elements with document.querySelector
const selectedP = document.querySelector('#myParagraph');
const selectedDiv = document.querySelector('#myDiv');

// 3. Change the paragraph text
selectedP.textContent = 'This text has been updated.';

// 4. Change the div's style
selectedDiv.style.backgroundColor = 'black';
selectedDiv.style.width = '200px';
selectedDiv.style.height = '100px';