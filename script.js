// document.addEventListener('DOMContentLoaded', function () {
//     const languageOptions = document.querySelectorAll('#language-options a');
//     const langIcon = document.getElementById('lang-icon');
    
//     // Check if there's a language preference stored
//     const savedLanguage = localStorage.getItem('language');
//     if (savedLanguage) {
//       translatePage(savedLanguage);
//     }
    
//     // Add click event to each language option
//     languageOptions.forEach(option => {
//       option.addEventListener('click', function (e) {
//         e.preventDefault();
//         const lang = this.getAttribute('data-lang');
//         localStorage.setItem('language', lang);  // Save language in localStorage
//         translatePage(lang);
//       });
//     });
  
//     // Translate the entire page using Google Translate API
//     function translatePage(language) {
//       const elementsToTranslate = document.querySelectorAll('[data-translate]'); // Elements with data-translate attribute
//       const textContent = {}; // Object to store original text content
  
//       // Collect original text content
//       elementsToTranslate.forEach(element => {
//         textContent[element.id] = element.textContent;
//       });
  
//       fetch(`https://translation.googleapis.com/language/translate/v2?key=9aa12b7245mshe310554835664c1p1f6125jsna77eccc49c91`, {
//         method: 'POST',
//         body: JSON.stringify({
//           q: Object.values(textContent),
//           target: language,
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       })
//       .then(response => response.json())
//       .then(data => {
//         const translations = data.data.translations;
        
//         // Update the text content of the elements
//         elementsToTranslate.forEach((element, index) => {
//           element.textContent = translations[index].translatedText;
//         });
//       })
//       .catch(error => {
//         console.error('Error translating text:', error);
//       });
//     }
//   });
//   function translatePage(language) {
//     const elementsToTranslate = document.querySelectorAll('[data-translate]'); // Include elements with this attribute
//     const textContent = {};
  
//     elementsToTranslate.forEach(element => {
//       textContent[element.id] = element.textContent || element.alt;  // Handle text and alt attributes
//     });
  
//     fetch(`https://translation.googleapis.com/language/translate/v2?key=YOUR_GOOGLE_API_KEY`, {
//       method: 'POST',
//       body: JSON.stringify({
//         q: Object.values(textContent),
//         target: language,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//     .then(response => response.json())
//     .then(data => {
//       const translations = data.data.translations;
      
//       elementsToTranslate.forEach((element, index) => {
//         if (element.alt) {
//           element.alt = translations[index].translatedText;
//         } else {
//           element.textContent = translations[index].translatedText;
//         }
//       });
//     })
//     .catch(error => {
//       console.error('Error translating text:', error);
//     });
//   }
  


// document.addEventListener('DOMContentLoaded', function () {
//     const langIcon = document.getElementById('lang-icon');
//     const languageSelector = document.querySelector('.language-selector');
//     const languageOptions = document.querySelectorAll('#language-options a');
    
//     // Check if there's a language preference stored
//     const savedLanguage = localStorage.getItem('language');
//     if (savedLanguage) {
//       translatePage(savedLanguage);
//     }
    
//     // Toggle language dropdown visibility on Earth icon click
//     langIcon.addEventListener('click', function (e) {
//       e.preventDefault();
//       languageSelector.classList.toggle('active'); // Toggle visibility of the dropdown
//     });
  
//     // Add click event to each language option
//     languageOptions.forEach(option => {
//       option.addEventListener('click', function (e) {
//         e.preventDefault();
//         const lang = this.getAttribute('data-lang');
//         localStorage.setItem('language', lang);  // Save language in localStorage
//         translatePage(lang);
//         languageSelector.classList.remove('active');  // Close the dropdown after selecting a language
//       });
//     });
  
//     // Close the dropdown if the user clicks outside of it
//     document.addEventListener('click', function (e) {
//       if (!languageSelector.contains(e.target)) {
//         languageSelector.classList.remove('active'); // Close the dropdown
//       }
//     });
  
//     // Translate the entire page using Google Translate API
//     function translatePage(language) {
//       const elementsToTranslate = document.querySelectorAll('[data-translate]'); // Elements with data-translate attribute
//       const textContent = {}; // Object to store original text content
  
//       // Collect original text content
//       elementsToTranslate.forEach(element => {
//         textContent[element.id] = element.textContent;
//       });
  
//       fetch(`https://translation.googleapis.com/language/translate/v2?key=YOUR_GOOGLE_API_KEY`, {
//         method: 'POST',
//         body: JSON.stringify({
//           q: Object.values(textContent),
//           target: language,
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       })
//       .then(response => response.json())
//       .then(data => {
//         const translations = data.data.translations;
        
//         // Update the text content of the elements
//         elementsToTranslate.forEach((element, index) => {
//           element.textContent = translations[index].translatedText;
//         });
//       })
//       .catch(error => {
//         console.error('Error translating text:', error);
//       });
//     }
//   });
  
// Save selected language to localStorage
function saveSelectedLanguage(lang) {
  localStorage.setItem('selectedLanguage', lang);
}

// Initialize Google Translate with saved language
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
  let selectedLanguage = localStorage.getItem('selectedLanguage');
  if (selectedLanguage) {
      // Trigger Google Translate to switch to the saved language
      let iframe = document.querySelector('iframe.goog-te-menu-frame');
      if (iframe) {
          iframe.contentWindow.document.querySelector(`.goog-te-menu2-item span[lang='${selectedLanguage}']`).click();
      }
  }
}

// Listen for language selection changes
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('goog-te-menu2-item')) {
      // Save the selected language when changed
      let lang = event.target.getAttribute('lang');
      if (lang) {
          saveSelectedLanguage(lang);
      }
  }
});
