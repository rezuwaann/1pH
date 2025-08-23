console.log('file connected');

const sections = document.querySelectorAll('section')
// console.log(sections)
// for (const section of sections) {
// section.style.backgroundColor='lightblue';
// section.style.border='3px solid green';
// section.style.marginBottom='5px';
// section.style.borderRadius='13px';
// section.style.padding='10px';

// }
  

// dynamic class

for (const section of sections) {
    section.classList.add('section-card')
}