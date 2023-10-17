window.onload = () => {
  const fetchData = async () => {
    const res = await fetch("http://159.223.51.203/api/bio")
    const data = await res.json();

    const cardTitles = document.querySelectorAll(".card-title");
    const cardTexts = document.querySelectorAll(".card-text");
    for (let i = 0; i < cardTitles.length; i++) {
      cardTitles[i].innerText = data[i].name;
      cardTexts[i].innerText = data[i].id;
    }
  }

  fetchData();
}