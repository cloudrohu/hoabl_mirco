$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();

    // Rera Non-Rera 
    $("body").attr('id', 'on-rera');

    // Header Logo
    $('#head_logo').append('<img src="assets/images/logo/logo.png" alt="" class="img-fluid d-block mx-auto" width="160" />');
    $('#modal-logo').append('<img src="assets/images/logo/logo.png" class="img-fluid" width="150" />')

    // Footerlogo and RERA No changes here 
    $('.foot_logo').append('<img src="assets/images/logo/logo.png" alt="" class="img-fluid d-block mx-auto" width="150" />');

    // $('#foot_rera_qr').append(`
    // <img src="assets/images/qr-code/P51900052415.png" alt="" class="img-fluid m-1 d-inline-block" width="90" />`);

    $('#Agent_Rera').append('Agent Rera Number : A51900029955');
    $('#Project_Rera').append('Project MAHARERA : P52000077814');
    // END Footerlogo here


    // Offset top header
    // Adjust scroll for anchor links
    $('#navbarNav a[href^="#"]').on('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior

        let target = $($(this).attr('href')); // Get the target element
        let offset = 50; // Offset height (e.g., height of fixed header)

        if (target.length) {
            $('html, body').animate({
                    scrollTop: target.offset().top - offset
                },
                500 // Animation duration in ms
            );
        }
    });


    //////whatsapp code////////

    let urlString = window.location.href;
    // console.log(urlString);
    const url = new URL(urlString);
    $(".website_url").val(url.href);

    // First, try to get parameters from the search part
    let utm_source = url.searchParams.get('utm_source');
    let mainsource = url.searchParams.get('mainsource');

    // If not found, check if the hash contains a query string
    if ((!utm_source && !mainsource) && url.hash) {
        // Remove the leading '#' from the hash
        const hashContent = url.hash.substring(1);

        // If the hash itself contains a '?' indicating query parameters,
        // split by '?' and get the query string portion.
        let queryString = "";
        if (hashContent.indexOf('?') !== -1) {
            queryString = hashContent.split('?')[1];
        } else {
            // Otherwise, treat the entire hash content as a query string.
            queryString = hashContent;
        }

        // Parse the query string from the hash
        const hashParams = new URLSearchParams(queryString);

        // Retrieve parameters from the hash
        if (!utm_source) {
            utm_source = hashParams.get('utm_source');
        }
        if (!mainsource) {
            mainsource = hashParams.get('mainsource');
        }
    }

    // alert(mainsource+"---"+mainsource)

    const phoneNumber = '+919967445524';
    const projectName = "Lodha - Blue Zone At Neral, Raigad, Maharashtra";

    const defaultGoogleMessage = `Hello, I would like to explore further details about ${projectName}.`;
    const defaultPPCMessage = `Hi I'm interested in Learning more About ${projectName}. Please Share Details.`;
    const defaultBingMessage = `Hi There, I'm interested in Learning more About ${projectName}. Please Share Details.`;
    const defaultBingoMessage = `Hello There, I would like to explore further details About ${projectName}. Please Share Details.`;
    const defaultWappMessage = `Hey, I would like to explore further details About ${projectName}. Please Share Details.`;
    const defaultWappintMessage = `Hey, I would like to explore further details About ${projectName}. Please Share Details.`;

    const googleWhatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(defaultGoogleMessage)}`;
    const ppcWhatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(defaultPPCMessage)}`;
    const bingWhatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(defaultBingMessage)}`;
    const bingoWhatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(defaultBingoMessage)}`;
    const wappWhatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(defaultWappMessage)}`;
    const wappintWhatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(defaultWappintMessage)}`;

    // --- Helper Function ---
    function updateLinks(link, href) {
        if (link) {
            link.href = href;
        }
    }

    // --- Main Logic ---
    // Function to get URL parameters
    function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // Determine the case
    let whatsappLinkToUse = null;
    if (utm_source) {
        if (utm_source.toLowerCase() === 'google') {
            whatsappLinkToUse = googleWhatsappLink;
        } else if (utm_source.toLowerCase() === 'ppc') {
            whatsappLinkToUse = ppcWhatsappLink;
        }
    } else if (mainsource) {
        const lowerCaseMainSource = mainsource.toLowerCase();
        if (lowerCaseMainSource.includes('google')) {
            whatsappLinkToUse = googleWhatsappLink;
        } else if (lowerCaseMainSource === 'ppc') {
            whatsappLinkToUse = ppcWhatsappLink;
        } else if (lowerCaseMainSource === 'bing') {
            whatsappLinkToUse = bingWhatsappLink;
        } else if (lowerCaseMainSource === 'bingo') {
            whatsappLinkToUse = bingoWhatsappLink;
        } else if (lowerCaseMainSource === 'wapp') {
            whatsappLinkToUse = wappWhatsappLink;
        } else if (lowerCaseMainSource === 'wappint') {
            whatsappLinkToUse = wappintWhatsappLink;
        }
    }

    // Update the links, check if the elements exist first
    const discoveryLink = document.getElementById('discovery');
    const discoveryMobileLink = document.getElementById('discovery_mobile');

    if (whatsappLinkToUse) {
        updateLinks(discoveryLink, whatsappLinkToUse);
        updateLinks(discoveryMobileLink, whatsappLinkToUse);
    }

    //////whatsapp code end////////

    // Location Advantage stop a href 
    // Adjust scroll for anchor links
    $('#exTab1 > a[href^="#"]').on('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior

        let target = $($(this).attr('href')); // Get the target element
        let offset = 50; // Offset height (e.g., height of fixed header)

        if (target.length) {
            $('html, body').animate({
                    scrollTop: target.offset().top - offset
                },
                500 // Animation duration in ms
            );
        }
    });

    // Form name submission code
    $(".custom-btn, .data-id-btn").click(function() {
        var myBookId = $(this).data('id');
        $(".form_name").val(myBookId);
    });

    // Toggle more and less content
    $(".moredisclaimerBtn").click(function() {
        if ($(this).html() === 'Read more <i class="fa fa-chevron-down"></i>') {
            $(this).html('Read less <i class="fa fa-chevron-up"></i>');
        } else {
            $(this).html('Read more <i class="fa fa-chevron-down"></i>');
        }
        $(".moredisclaimerText[data-hit=more" + $(this).data('target') + "]").slideToggle(500);
    });

    $(".moreBtn").click(function() {
        var button = $(this);
        var target = button.data('target');
        var isReadMore = button.html().includes('Read more');
        var newHtml = isReadMore ? 'Read less <i class="fa fa-chevron-up"></i>' : 'Read more <i class="fa fa-chevron-down"></i>';
        button.html(newHtml);
        $(".moreText[data-hit=more" + target + "]").slideToggle(500);
    });

    // Modal content update
    $('#enquire-modal').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget);
        var recipient = button.data('bs-whatever');
        var modal = $(this);
        modal.find('.modal-title').text(recipient);
        modal.find('input[name="recipient"]').val(recipient);
    });

});

//form submit//
function submitForm(event, formName) {
    event.preventDefault(); // Prevent default form submission
    console.log("--- submitForm called for:", formName, "---"); // DEBUG

    // --- Get Form and Price ---
    const formElement = document.forms[formName];
    if (!formElement) {
        console.error("CRITICAL: Form element not found for name:", formName); // DEBUG
        return; // Exit if form doesn't exist
    }
    var price = $(".price-sub-text").text().trim();


    // --- URL Handling ---
    var currentUrl = window.location.href;

    // Fix URL if it contains more than one '?'
    var questionMarkIndex = currentUrl.indexOf('?');
    var secondQuestionMarkIndex = currentUrl.indexOf('?', questionMarkIndex + 1);

    if (secondQuestionMarkIndex !== -1) {
        currentUrl = currentUrl.substring(0, secondQuestionMarkIndex) + '&' + currentUrl.substring(secondQuestionMarkIndex + 1);
    }

    // Handle URL fragment (everything after #)
    var hashIndex = currentUrl.indexOf('#');
    if (hashIndex !== -1) {
        var fragment = currentUrl.substring(hashIndex + 1);
        currentUrl = currentUrl.substring(0, hashIndex) + '&' + fragment;
    }



    // --- Clear Previous Errors & Styles ---
    const errorMessages = formElement.querySelectorAll('.error');
    errorMessages.forEach(function(error) {
        error.style.display = 'none';
    });
    const inputs = formElement.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.classList.remove('is-invalid', 'is-valid');
    });


    // --- Validation Logic ---
    let isValid = true; // Start assuming valid
    const formData = new FormData(formElement);

    const nameInput = formElement.querySelector('[name="name"]');
    const mobileInput = formElement.querySelector('[name="mobile"]');
    const consentCheckbox = formElement.querySelector('.form-check-input[type="checkbox"]');

    // Validate Name
    if (nameInput) { // Check if the input exists first
        console.log("Name input found. Is required?", nameInput.required); // DEBUG
        if (nameInput.required) { // Only validate if it's required
            const nameValue = nameInput.value.trim(); // Trim whitespace!
            const nameErrorSpan = nameInput.closest('.forms-input-fields') ? .querySelector('.error') || nameInput.parentNode.querySelector('.error'); // Try parentNode as fallback
            console.log(`Name value (raw): "${nameInput.value}" | (trimmed): "${nameValue}"`); // DEBUG

            if (nameValue === '') {
                console.log("Validation Failed: Name is empty or spaces."); // DEBUG
                isValid = false;
                if (nameErrorSpan) {
                    nameErrorSpan.textContent = 'Name field is required.';
                    nameErrorSpan.style.display = 'inline';
                } else {
                    console.warn("Name error span not found!");
                } // DEBUG
                nameInput.classList.add('is-invalid');
            } else {
                nameInput.classList.add('is-valid');
            }
        }
    } else {
        console.log("Name input not found in form:", formName);
    } // DEBUG

    // Validate Mobile
    if (mobileInput) { // Check if the input exists
        console.log("Mobile input found. Is required?", mobileInput.required); // DEBUG
        if (mobileInput.required) { // Only validate if it's required
            const mobileValue = mobileInput.value.trim(); // Trim whitespace!
            const mobileErrorSpan = mobileInput.closest('.forms-input-fields') ? .querySelector('.error') || mobileInput.parentNode.querySelector('.error'); // Try parentNode as fallback
            console.log(`Mobile value (raw): "${mobileInput.value}" | (trimmed): "${mobileValue}"`); // DEBUG

            if (mobileValue === '') {
                console.log("Validation Failed: Mobile is empty or spaces."); // DEBUG
                isValid = false;
                if (mobileErrorSpan) {
                    mobileErrorSpan.textContent = 'Mobile field is required.';
                    mobileErrorSpan.style.display = 'inline';
                } else {
                    console.warn("Mobile error span not found!");
                } // DEBUG
                mobileInput.classList.add('is-invalid');
            } else {
                mobileInput.classList.add('is-valid');
            }
        }
    } else {
        console.log("Mobile input not found in form:", formName);
    } // DEBUG

    // --- Stop Submission If Invalid ---
    console.log("Final validation check. Is form valid?", isValid); // DEBUG
    if (!isValid) {
        const firstInvalid = formElement.querySelector('.is-invalid');
        if (firstInvalid) {
            firstInvalid.focus();
        }
        console.log("STOPPING SUBMISSION due to validation errors."); // DEBUG
        return; // Exit the function
    }

    // --- Prepare Data for Submission (If Valid) ---
    console.log("Validation passed. Preparing data for AJAX..."); // DEBUG
    var formnameValue = formData.get('form_name');
    var form_data = {
        name: formData.get('name') ? formData.get('name').trim() : '',
        email: formData.get('email') ? formData.get('email').trim() : '',
        mobile: formData.get('mobile') ? formData.get('mobile').trim() : '',
        form_name: formnameValue,
        website_url: formData.get('website_url') ? formData.get('website_url') : window.location.origin,
        price: price,
        currentUrl: currentUrl
    };

    // --- Disable Submit Button ---
    const submitButton = event.target.closest('button');
    let originalButtonText = '';
    if (submitButton) {
        originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
    } else {
        console.warn("Submit button not found for disabling!");
    } // DEBUG

    // --- AJAX Request ---
    console.log("Sending AJAX request to send_email.php with data:", form_data); // DEBUG
    $.ajax({
        type: 'POST',
        url: 'send_email.php',
        data: form_data,
        success: function(response) {
            console.log("AJAX Success Response:", response); // DEBUG
            formElement.reset();
            inputs.forEach(input => {
                input.classList.remove('is-invalid', 'is-valid');
            });
            errorMessages.forEach(error => error.style.display = 'none');

            if (formName === 'modal-form' || formName === 'main-popup') {
                const modalElement = document.getElementById('enquire-modal');
                if (modalElement) {
                    try { // Add try-catch for modal instance
                        const modalInstance = bootstrap.Modal.getInstance(modalElement);
                        if (modalInstance) {
                            modalInstance.hide();
                        } else {
                            $(modalElement).modal('hide');
                        }
                    } catch (e) {
                        console.error("Error hiding modal:", e);
                        $(modalElement).modal('hide'); // Fallback jQuery hide
                    }
                }
            }

            if (formnameValue === 'Brochure') {
                // window.location.href = 'thank-you.html?formName=Brochure';
                window.location.href = 'thank-you.html';
            } else {
                window.location.href = 'thank-you.html';
            }
        },
        error: function(xhr, status, error) {
            console.error('AJAX Error:', status, error, xhr.responseText); // DEBUG
            alert('An error occurred while submitting the form. Please try again later.');
        },
        complete: function() {
            console.log("AJAX request complete."); // DEBUG
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        }
    });
}
// use to add URL in nav for other pages like Policy, T&C

document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links in the navbar
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Event listener for navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Get the current href of the clicked link
            let href = this.getAttribute('href');

            // Check if the href is already a full URL
            if (href.startsWith('http') || href.startsWith('https')) {
                // If it's a full URL, simply redirect to it
                window.location.href = href;
            } else {
                // If it's a relative path or contains "../", resolve dynamically
                const currentPath = window.location.pathname;
                const baseUrl = `${window.location.protocol}//${window.location.host}`;

                if (href.includes('#')) {
                    // Preserve the #hash and dynamically resolve the base
                    const hash = href.split('#')[1];
                    href = `${baseUrl}${currentPath.split('/').slice(0, -1).join('/')}/#${hash}`;
                } else {
                    // For other cases, resolve the full URL
                    href = `${baseUrl}/${href.replace(/^\.\.\//, '')}`;
                }

                // Perform the redirection
                window.location.href = href;
            }
        });
    });
});