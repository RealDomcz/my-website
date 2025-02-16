// Language Switcher functionality
const languageButtons = document.querySelectorAll('.language-switch button');
const contents = document.querySelectorAll('.content');

languageButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const language = button.dataset.language;

    // Hide all content
    contents.forEach(function(content) {
      content.classList.remove('active');
    });

    // Show content for the selected language
    const activeContent = document.querySelector(`.content[data-language="${language}"]`);
    activeContent.classList.add('active');

    // Update button styles
    languageButtons.forEach(function(btn) {
      btn.classList.remove('active');
    });
    button.classList.add('active');
  });
});