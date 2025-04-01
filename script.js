document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const experienceDetails = button.closest('.experience-details');
        const fullText = experienceDetails.querySelector('.full-text');
        const shortText = experienceDetails.querySelectorAll('.short-text');

        if (fullText.style.display === 'none') {
            fullText.style.display = 'block';
            button.textContent = 'Read Less';
        } else {
            fullText.style.display = 'none';
            button.textContent = 'Read More';
        }
    });
});


  document.getElementById('resumeBtn').addEventListener('click', function() {
    window.open('Resume.pdf', '_blank');
  });


  document.getElementById('githubBtn').addEventListener('click', function() {
    window.open('https://github.com/Atulkamboj12', '_blank');
  });


  