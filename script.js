document.addEventListener('DOMContentLoaded', () => {
  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq__btn');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      
      // Close others (optional, comment out if you want multiple open)
      faqItems.forEach(i => {
        i.classList.remove('is-open');
        i.querySelector('.faq__btn').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // --- Projects Slider ---
  const track = document.querySelector('.projects__track');
  const prevBtn = document.querySelector('.navbtn[data-dir="prev"]');
  const nextBtn = document.querySelector('.navbtn[data-dir="next"]');

  if (track && prevBtn && nextBtn) {
    const scrollAmount = 300;

    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  // --- Contact Form ---
  const contactForm = document.getElementById('contactForm');
  const toast = document.querySelector('.cForm__toast');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.print = false; // Prevent actual printing if needed
      e.preventDefault();
      
      // Basic validation check
      if (contactForm.checkValidity()) {
        const formData = new FormData(contactForm);
        console.log('Form Submitted:', Object.from_entries(formData));
        
        // Show success toast
        if (toast) {
          toast.hidden = false;
          contactForm.reset();
          setTimeout(() => {
            toast.hidden = true;
          }, 5000);
        }
      } else {
        contactForm.reportValidity();
      }
    });
  }
});
