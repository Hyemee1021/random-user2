//get root api

const apiEp = "https://randomuser.me/api/?results=25";

//make an empty array and put users inside

let userList = [];

const userCard = document.querySelector(".userRow");
console.log(userCard.innerHTML);

const userNumber = document.querySelector(".userNumber");
console.log(userNumber);

const fetchUser = async (url) => {
  try {
    const dt = await fetch(url);

    const data = await dt.json();
    console.log(dt);
    console.log(data);

    userList = data.results;
    console.log(userList);

    display(userList);
  } catch (error) {
    console.log(error);
  }
};

fetchUser(apiEp);

const display = (users) => {
  let str = ``;

  userList.map((item, i) => {
    console.log(item);
    str += `
    
            <div class="card flex-grow-2 mt-5" style="width: 15rem">
              <img src="${item?.picture?.large}"  class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${item?.name?.title} ${item?.name?.first} ${item?.name?.last}</h5>
                <div class="card-text">
                 <h6> <i class="fa-solid fa-phone"></i>
                 ${item?.phone}</h6>
                 <h6><i class="fa-solid fa-envelope"></i>
                 ${item?.email}</h6>
                </div>
               
              </div>
            </div>
       

    `;
  });
  userCard.innerHTML = str;
  userNumber.innerText = `${userList.length} user(s) found!`;
};

//getting a number of users put in input
const handleOnNumberUser = (e) => {
  console.log(e.value);

  const number = e.value;
  const url = `https://randomuser.me/api/?results=${number}`;

  fetchUser(url);
};

const handleOnGenderSelect = (e) => {
  console.log(e);
  const gender = e.value;
  const url = `${apiEp}&gender=${gender}`;

  fetchUser(url);
};
