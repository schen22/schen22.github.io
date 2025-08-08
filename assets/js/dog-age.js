function calculateDogAge() {
  const dogBirthDate = new Date("2025-04-14");
  const currentDate = new Date();

  const diffInMs = currentDate - dogBirthDate;
  const diffInMonths = Math.round(diffInMs / (1000 * 60 * 60 * 24 * 30.44));

  let ageText;
  if (diffInMonths < 12) {
    ageText = `${diffInMonths}-month old`;
  } else {
    const years = Math.floor(diffInMonths / 12);
    const remainingMonths = diffInMonths % 12;

    if (remainingMonths === 0) {
      ageText = `${years}-year old`;
    } else {
      ageText = `${years}-year ${remainingMonths}-month old`;
    }
  }

  const dogAgeElement = document.getElementById("dog-age");
  if (dogAgeElement) {
    dogAgeElement.textContent = ageText;
  }
}

document.addEventListener("DOMContentLoaded", calculateDogAge);
