const header = document.querySelector('#header');
const title = document.querySelector('#title');
const excerpt = document.querySelector('#excerpt');
const profile_img = document.querySelector('#profile_img');
const userName = document.querySelector('#name');
const date = document.querySelector('#date');

const anmiated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

async function userDB() {
  try {
    const res = await fetch(`https://randomuser.me/api/?results=10?`);
    const data = await res.json();
    let userName = await data.results[0].name;
    let userImg = await data.results[0].picture;
    let location = await data.results[0].location.country;
    console.log(data.results[0]);
    header.innerHTML = `<img src="${userImg.large}" alt="" />`;
    profile_img.innerHTML = `<img src="${userImg.medium}" alt="" />`;
    date.innerHTML = await location;
    return `${userName.last} ${userName.first}`;
  } catch (error) {
    console.log(`error messeage=` + error);
    return `false 400`;
  }
}

async function getData() {
  title.innerHTML = `Lorem ipsum dolor sit amet.`;
  excerpt.innerHTML = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
  quod.`;
  userName.innerHTML = await userDB();
  anmiated_bgs.forEach((bg) => {
    bg.classList.remove('animated-bg');
  });
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
setTimeout(getData, 2000);
