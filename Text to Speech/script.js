const speechBtn = document.querySelector("button"),
  ale = document.querySelector("p"),
  //   clr = document.querySelector("a"),
  textarea = document.querySelector("textarea");

//   clr.addEventListener("click", () => {
//     location.reload();
//   });

function refreshPage() {
  location.reload();
}

speechBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let text = textarea.value;

  if (text.trim() === "") {
    ale.innerHTML = "Please enter some text!";

    setTimeout(() => {
      ale.style.display = "none";
    }, 2000); // Menunda selama 2 detik (2000 milidetik) sebelum menyembunyikan elemen peringatan
  }

  const speech = new SpeechSynthesisUtterance();
  speech.lang = "id-ID";
  // English
  speech.text = text;

  window.speechSynthesis.speak(speech);
});
