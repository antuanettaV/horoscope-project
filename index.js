function displayHoroscope(response) {
  new Typewriter("#horoscope", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateHoroscope(event) {
  event.preventDefault();

  let signInput = document.querySelector("#user-instructions");
  let apiKey = "03a1760f00b35ee83btdd2da764o002b";
  let context =
    "You are a professional astrologer. Please provide a short horoscope and separate each line with <br />. Please do not include title at the beginning";
  let prompt = ` User instructions: Generate a Horoscope about ${signInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let horoscopeElement = document.querySelector("#horoscope");
  horoscopeElement.classList.remove("hidden");
  horoscopeElement.innerHTML = `<div class="generating">⏳Generating a horoscope for the sign ${signInput.value}</div>`;

  axios.get(apiURL).then(displayHoroscope);
}

let horoscopeFormElement = document.querySelector("#horoscope-generator-form");
horoscopeFormElement.addEventListener("submit", generateHoroscope);
