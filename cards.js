window.onload = start();

async function start() {
  await setCard();
}

async function getCard(id) {
  const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?id=" + id;

  return axios.get(url).then((response) => {
    console.log(response.data.data[0].card_images[0].image_url);
    console.log("acima");
    return response.data.data[0].card_images[0].image_url;
  });
}
async function setCard() {
  // let cardTemplate = document.querySelector("#cardTemplate1");
  await getCard("6983839").then((res) => {
    let cardTemplate = document.querySelector("#cardTemplate1");
    cardTemplate.src = res;
  });
  await getCard("37478723").then((res) => {
    let cardTemplate = document.querySelector("#cardTemplate2");
    cardTemplate.src = res;
  });
  await getCard("64867422").then((res) => {
    let cardTemplate = document.querySelector("#cardTemplate3");
    cardTemplate.src = res;
  });
  await getCard("67748760").then((res) => {
    let cardTemplate = document.querySelector("#cardTemplate4");
    cardTemplate.src = res;
  });
  await getCard("1966438").then((res) => {
    let cardTemplate = document.querySelector("#cardTemplate5");
    cardTemplate.src = res;
  });

  // response.data.data[0].card_images[0].image_url;

  // await getCard("6983839").then((response) => {
  //   console.log(response);
  //   if (response) {
  //     console.log("Funcionando");
  //     let cardTemplate = document.querySelector("#cardTemplate1");
  //     cardTemplate.src = response.data.data[0].card_images[0].image_url;
  //   }
  // });
}
