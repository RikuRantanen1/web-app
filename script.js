const ul = document.querySelector('.kurssit');
const kurssinappi = document. querySelector('.kurssinappi');
const nimiSisalto = document.querySelector('#nimi');
const asiaSisalto = document. querySelector('#tieto');
const virhe = document.querySelector('.virheilmoitus');
const viesti = document.querySelector('#tiedot');

kurssinappi.addEventListener('click', e =>{
  e.preventDefault();
if(nimiSisalto.value === '' || asiaSisalto.value === ''){
  virhe.classList.add('virhe');
  virhe.innerHTML = 'täytä kaikki kentät';
  kurssinappi.style.background = 'red';
  kurssinappi.value= 'Virhe! En lisannyt tietoa';
  setTimeout(() => virhe.classList.remove('virhe'), 3000);
  setTimeout(() => virhe.innerHTML="'", 3000);
  setTimeout(() => kurssinappi.style.background = 'rgb(51, 44, 44)', 3000);
  setTimeout(() => kurssinappi.value = 'Lisää tieto', 3000);
}else{
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`${nimiSisalto. value}: ${asiaSisalto.value}`));
  viesti.appendChild(li) ;
  nimiSisalto.value = '';
  asiaSisalto.value = '';
  }
  });
 

const merkitseValmiit = document.querySelector('.merkinta');
merkitseValmiit.addEventListener('click', e => {
e.preventDefault();

if(document.querySelector('#tehta').checked){
ul.children[0].innerHTML = '<input type="checkbox" id="tehta" checked>HTML tunnit pidetty';

}else{
ul.children[0].innerHTML = '<input type="checkbox" id="tehta">HTML';

}
if(document.querySelector('#tehtb') .checked){
  ul.children[1].innerHTML = '<input type="checkbox" id="tehtb" checked>CSS tunnit pidetty';
}else{
ul. children[1] .innerHTML = '<input type="checkbox" id="tehtb">CSS' ;
}
if (document .querySelector('#tehtc') .checked){
ul.children[2].innerHTML = '<input type="checkbox" id="tehtc" checked>JavaScript tunnit pidetty';

}else{
ul.children[2].innerHTML = '<input type="checkbox" id="tehtc">JavaScript';
}



});