// Wait until document is fully loaded
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  // Set RERA ID
  $('body').attr('id', 'on-rera');

  // Append logos
  $('#head_logo').append('<img src="assets/images/logo/logo.png" alt="" class="img-fluid d-block mx-auto" width="160" />');
  $('#modal-logo').append('<img src="assets/images/logo/logo.png" class="img-fluid" width="150" />');
  $('.foot_logo').append('<img src="assets/images/logo/logo.png" alt="" class="img-fluid d-block mx-auto" width="150" />');



  // Smooth scroll for nav links
  $('#navbarNav a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    let target = $($(this).attr('href'));
    let offset = 50;
    if (target.length) {
      $('html, body').animate({ scrollTop: target.offset().top - offset }, 500);
    }
  });
 // ✅ Modal popup after delay with repeat logic
  let popupShownCount = 0;
  const maxPopupTimes = 7; // max baar modal dikhana hai
  const firstDelay = 9000; // pehli baar 5 sec baad
  const repeatDelay = 7000; // close hone ke baad kitne sec baad dikhana hai

  const modalElement = document.getElementById('enquire-modal');
  const modalInstance = new bootstrap.Modal(modalElement);

  function showModalWithRepeat() {
    if (popupShownCount < maxPopupTimes) {
      modalInstance.show();
      popupShownCount++;
    }
  }

  // Pehli baar show
  setTimeout(showModalWithRepeat, firstDelay);

  // Close hone ke baad fir repeat
  modalElement.addEventListener('hidden.bs.modal', function () {
    if (popupShownCount < maxPopupTimes) {
      setTimeout(showModalWithRepeat, repeatDelay);
    }
  });

  // Store website URL in form field
  const url = new URL(window.location.href);
  $(".website_url").val(url.href);

  // Read UTM or hash parameters
  let utm_source = url.searchParams.get('utm_source');
  let mainsource = url.searchParams.get('mainsource');

  if ((!utm_source && !mainsource) && url.hash) {
    const hashContent = url.hash.substring(1);
    let queryString = hashContent.includes('?') ? hashContent.split('?')[1] : hashContent;
    const hashParams = new URLSearchParams(queryString);
    utm_source = utm_source || hashParams.get('utm_source');
    mainsource = mainsource || hashParams.get('mainsource');
  }

  // WhatsApp messaging logic
  const phoneNumber = '+919967445524';
  const projectName = "Lodha - Blue Zone At Neral, Raigad, Maharashtra";
  const messages = {
    google: `Hello, I would like to explore further details about ${projectName}.`,
    ppc: `Hi I'm interested in Learning more About ${projectName}. Please Share Details.`,
    bing: `Hi There, I'm interested in Learning more About ${projectName}. Please Share Details.`,
    bingo: `Hello There, I would like to explore further details About ${projectName}. Please Share Details.`,
    wapp: `Hey, I would like to explore further details About ${projectName}. Please Share Details.`,
    wappint: `Hey, I would like to explore further details About ${projectName}. Please Share Details.`
  };

  let whatsappLink = null;
  const lowerSource = (utm_source || mainsource || '').toLowerCase();
  if (messages[lowerSource]) {
    whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(messages[lowerSource])}`;
  }

  if (whatsappLink) {
    document.getElementById('discovery')?.setAttribute('href', whatsappLink);
    document.getElementById('discovery_mobile')?.setAttribute('href', whatsappLink);
  }

  // Scroll for Location Advantage links
  $('#exTab1 > a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    let target = $($(this).attr('href'));
    let offset = 50;
    if (target.length) {
      $('html, body').animate({ scrollTop: target.offset().top - offset }, 500);
    }
  });

  // Set form name on button click
  $(".custom-btn, .data-id-btn").click(function () {
    var id = $(this).data('id');
    $(".form_name").val(id);
  });

  // Read more/less toggle
  $(".moredisclaimerBtn, .moreBtn").click(function () {
    var target = $(this).data('target');
    var isMore = $(this).html().includes('Read more');
    var newText = isMore ? 'Read less <i class="fa fa-chevron-up"></i>' : 'Read more <i class="fa fa-chevron-down"></i>';
    $(this).html(newText);
    $(`.moreText[data-hit=more${target}], .moredisclaimerText[data-hit=more${target}]`).slideToggle(500);
  });

  // Modal form title & value
  $('#enquire-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var value = button.data('bs-whatever');
    var modal = $(this);
    modal.find('.modal-title').text(value);
    modal.find('input[name="recipient"]').val(value);
  });

  // Navbar links with relative/absolute path handling
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      let href = this.getAttribute('href');
      if (href.startsWith('http')) {
        window.location.href = href;
      } else {
        const base = `${window.location.protocol}//${window.location.host}`;
        if (href.includes('#')) {
          const hash = href.split('#')[1];
          href = `${base}${window.location.pathname.split('/').slice(0, -1).join('/')}/#${hash}`;
        } else {
          href = `${base}/${href.replace(/^\.\.\//, '')}`;
        }
        window.location.href = href;
      }
    });
  });
});
// ✅ Modal popup after delay with repeat logic (safe version)
let popupShownCount = 0;
const maxPopupTimes = 7; // max baar modal dikhana hai
const firstDelay = 9000; // pehli baar 5 sec baad
const repeatDelay = 7000; // close hone ke baad kitne sec baad dikhana hai

const modalElement = document.getElementById('enquire-modal');
const modalInstance = new bootstrap.Modal(modalElement);

function showModalWithRepeat() {
  // Sirf tab show ho jab modal open na ho aur count max se kam ho
  if (popupShownCount < maxPopupTimes && !modalElement.classList.contains('show')) {
    modalInstance.show();
    popupShownCount++;
  }
}

// Pehli baar show
setTimeout(showModalWithRepeat, firstDelay);

// Close hone ke baad fir repeat
modalElement.addEventListener('hidden.bs.modal', function () {
  if (popupShownCount < maxPopupTimes) {
    setTimeout(showModalWithRepeat, repeatDelay);
  }
});
