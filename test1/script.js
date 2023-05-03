const selectElement = document.querySelector('#language-selector'); // получаем элемент <select>
const enElements = document.querySelectorAll('.en'); // получаем все элементы с классом .en
const uaElements = document.querySelectorAll('.ua'); // получаем все элементы с классом .ua

// устанавливаем начальные значения стилей
enElements.forEach((el) => el.style.display = 'block');
uaElements.forEach((el) => el.style.display = 'none');

selectElement.addEventListener('change', (event) => { // добавляем обработчик события на изменение значения в <select>
  if (event.target.value === 'en') { // если выбрано значение "en"
    enElements.forEach((el) => el.style.display = 'block'); // показываем все элементы с классом .en
    uaElements.forEach((el) => el.style.display = 'none'); // скрываем все элементы с классом .ua
  } else if (event.target.value === 'ua') { // если выбрано значение "ua"
    enElements.forEach((el) => el.style.display = 'none'); // скрываем все элементы с классом .en
    uaElements.forEach((el) => el.style.display = 'block'); // показываем все элементы с классом .ua
  }
});
$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault(); // предотвратить отправку формы по умолчанию
    $.ajax({
      url: 'process_form.php',
      type: 'POST',
      data: $('form').serialize(),
      success: function(response) {
        console.log('Данные успешно отправлены!');
      },
      error: function(response) {
        console.log('Ошибка при отправке данных!');
      }
    });
  });
});
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const languageSelector = document.getElementById('language-selector');
const form = document.querySelector('.first-block__form');
const translationMap = {
  en: {
    name: 'Name',
    surname: 'Surname',
    phone: 'Mobile number',
    email: 'E-mail',
    agreement: 'I consent to the collection of my email address for the purpose of receiving commercial offers that we believe will be of interest to you, on behalf of the companies and industries detailed in our Terms of Use and Privacy Policy.',
    button: 'SEND A REQUEST'
  },
  ua: {
    name: 'Ім\'я',
    surname: 'Прізвище',
    phone: 'Мобільний номер',
    email: 'E-mail',
    agreement: 'Я згоден на збір моєї адреси електронної пошти з метою отримання комерційних пропозицій, які, на наш погляд, будуть цікавими для вас від імені компаній та промисловостей, зазначених в наших Умовах використання та Політиці конфіденційності.',
    button: 'ВІДПРАВИТИ ЗАПИТ'
  }
};

languageSelector.addEventListener('change', () => {
  const selectedLanguage = languageSelector.value;
  const translations = translationMap[selectedLanguage];
  
  const nameInput = form.querySelector('[name="user_name"]');
  nameInput.placeholder = translations.name;
  
  const surnameInput = form.querySelector('[name="user_surname"]');
  surnameInput.placeholder = translations.surname;
  
  const phoneInput = form.querySelector('[name="user_phone"]');
  phoneInput.placeholder = translations.phone;
  
  const emailInput = form.querySelector('[name="user_email"]');
  emailInput.placeholder = translations.email;
  
  const agreementLabel = form.querySelector('.pv-label span');
  agreementLabel.textContent = translations.agreement;
  
  const submitButton = form.querySelector('.first-block__submit-button');
  submitButton.textContent = translations.button;
});
