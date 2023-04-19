
/*
import ReactDOM from 'react-dom';

import Webcontent from './App';

ReactDOM.render( <Webcontent />, document.getElementById('root'))

const open_menu = document.querySelector('.open-menu');
const menu = document.querySelector('.menu');
const open_icon = document.querySelector('.open-menu .open');
const close_icon = document.querySelector('.open-menu .close');

open_menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    open_icon.classList.toggle('active');
    close_icon.classList.toggle('active');
});

const links = document.querySelectorAll('.menu ul a');

links.forEach(link => {
    link.addEventListener('click', () => {
        clearActives();
        link.classList.add('active');

        setTimeout(() => {
            menu.classList.remove('active');
            open_icon.classList.remove('active');
            close_icon.classList.remove('active');
        }, 500);
    });
});

function clearActives() {
    for (let i = 0; i<links.length; i++) {
        const elem = links[i];
        elem.classList.remove('active');
    }
}
*/

import ReactDOM from "react-dom";

import Webcontent from "./App";

ReactDOM.render(<Webcontent />, document.getElementById("root"));

const open_menu = document.querySelector(".open-menu");
const menu = document.querySelector(".menu");
const open_icon = document.querySelector(".open-menu .open");
const close_icon = document.querySelector(".open-menu .close");

open_menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  open_icon.classList.toggle("active");
  close_icon.classList.toggle("active");
});

const links = document.querySelectorAll(".menu ul a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    clearActives();
    link.classList.add("active");

    setTimeout(() => {
      menu.classList.remove("active");
      open_icon.classList.remove("active");
      close_icon.classList.remove("active");
    }, 500);
  });
});

function clearActives() {
  for (let i = 0; i < links.length; i++) {
    const elem = links[i];
    elem.classList.remove("active");
  }
}

const introtxt = document.querySelector(".section.s1 .text-container span");

introtxt.innerHTML = introtxt.innerHTML
  .split("")
  .map((txt, idx) => `<p style='--i:${idx}'>${txt} </p>`)
  .join("");

const section_1 = document.querySelector(".section.s1");

const section_2 = document.querySelector(".section.s2");

const section_3 = document.querySelector(".section.s3");

const section_4 = document.querySelector(".section.s4");

const section_5 = document.querySelector(".section.s5");

const windowHeight = window.innerHeight;

const animationPoint = 500;

function scrollAnimation() {
  const sect1_top = section_1.getBoundingClientRect().top;

  const sect2_top = section_2.getBoundingClientRect().top;

  const sect3_top = section_3.getBoundingClientRect().top;

  const sect4_top = section_4.getBoundingClientRect().top;

  const sect5_top = section_5.getBoundingClientRect().top;

  if (sect1_top < windowHeight - animationPoint) {
    section_1.classList.add("active");
    clearActives();
    links[0].classList.add("active");
  }

  if (sect2_top < windowHeight - animationPoint) {
    section_2.classList.add("active");
    clearActives();
    links[1].classList.add("active");
  }

  if (sect3_top < windowHeight - animationPoint) {
    section_3.classList.add("active");
    clearActives();
    links[2].classList.add("active");
  }

  if (sect4_top < windowHeight - animationPoint) {
    section_4.classList.add("active");
    clearActives();
    links[3].classList.add("active");
  }

  if (sect5_top < windowHeight - animationPoint) {
    section_5.classList.add("active");
    clearActives();
    links[4].classList.add("active");
  }
}

scrollAnimation();
window.addEventListener("scroll", scrollAnimation);

const moregames = document.querySelector(".section.s3 .more-games");

const moregameslink = document.querySelector(".section.s3 .intro h4");

moregameslink.addEventListener("click", () => {
  moregames.classList.add("active");
});

const back = document.querySelector(".section.s3 .more-games .back");
back.addEventListener("click", () => {
  moregames.classList.remove("active");
});