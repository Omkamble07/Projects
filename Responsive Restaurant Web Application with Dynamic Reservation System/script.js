// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== MOBILE NAVIGATION =====
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // ===== SMOOTH SCROLLING =====
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== ACTIVE NAVIGATION HIGHLIGHTING =====
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        const navHeight = document.querySelector('.navbar').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ===== MENU FILTERING =====
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            menuItems.forEach(item => {
                // Show all items if 'all' is selected
                if (filterValue === 'all') {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    // Hide items that don't match the filter
                    if (item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });

    // ===== GALLERY MODAL =====
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryModal = document.getElementById('gallery-modal');
    const modalClose = document.querySelector('.modal-close');
    const prevBtn = document.querySelector('.modal-nav.prev');
    const nextBtn = document.querySelector('.modal-nav.next');
    let currentImageIndex = 0;

    // Open modal when clicking on gallery item
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentImageIndex = index;
            openGalleryModal();
        });
    });

    // Close modal
    modalClose.addEventListener('click', closeGalleryModal);
    galleryModal.addEventListener('click', (e) => {
        if (e.target === galleryModal) {
            closeGalleryModal();
        }
    });

    // Navigate gallery
    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
        updateModalImage();
    });

    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
        updateModalImage();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (galleryModal.classList.contains('active')) {
            if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            } else if (e.key === 'Escape') {
                closeGalleryModal();
            }
        }
    });

    function openGalleryModal() {
        galleryModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateModalImage();
    }

    function closeGalleryModal() {
        galleryModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    function updateModalImage() {
        const modalImageContainer = document.querySelector('.modal-image-container');
        const currentItem = galleryItems[currentImageIndex];
        const placeholder = currentItem.querySelector('.gallery-placeholder').cloneNode(true);
        placeholder.classList.add('large');
        
        modalImageContainer.innerHTML = '';
        modalImageContainer.appendChild(placeholder);
    }

    // ===== RESERVATION FORM =====
    const reservationForm = document.getElementById('reservation-form');
    const dateInput = document.getElementById('date');
    const timeSelect = document.getElementById('time');
    const successMessage = document.getElementById('success-message');
    const newReservationBtn = document.getElementById('new-reservation');

    // Set minimum date to today
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];
    dateInput.setAttribute('min', minDate);

    // Set maximum date to 3 months from now
    const maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth() + 3);
    dateInput.setAttribute('max', maxDate.toISOString().split('T')[0]);

    // Populate time slots
    function populateTimeSlots(selectedDate) {
        timeSelect.innerHTML = '<option value="">Select time...</option>';
        
        const selected = new Date(selectedDate);
        const dayOfWeek = selected.getDay();
        
        let startHour, endHour;
        
        // Monday-Friday: 11:00 AM - 10:00 PM
        if (dayOfWeek >= 1 && dayOfWeek <= 5) {
            startHour = 11;
            endHour = 22;
        }
        // Saturday: 10:00 AM - 11:00 PM
        else if (dayOfWeek === 6) {
            startHour = 10;
            endHour = 23;
        }
        // Sunday: 10:00 AM - 9:00 PM
        else {
            startHour = 10;
            endHour = 21;
        }

        for (let hour = startHour; hour < endHour; hour++) {
            for (let minute of ['00', '30']) {
                const timeValue = `${hour.toString().padStart(2, '0')}:${minute}`;
                const displayHour = hour > 12 ? hour - 12 : hour;
                const period = hour >= 12 ? 'PM' : 'AM';
                const displayTime = `${displayHour}:${minute} ${period}`;
                
                const option = document.createElement('option');
                option.value = timeValue;
                option.textContent = displayTime;
                timeSelect.appendChild(option);
            }
        }
    }

    // Update time slots when date changes
    dateInput.addEventListener('change', (e) => {
        if (e.target.value) {
            populateTimeSlots(e.target.value);
            timeSelect.disabled = false;
        } else {
            timeSelect.innerHTML = '<option value="">Select time...</option>';
            timeSelect.disabled = true;
        }
    });

    // Form validation
    function validateField(field) {
        const formGroup = field.closest('.form-group');
        const errorMessage = formGroup.querySelector('.error-message');
        let isValid = true;
        let message = '';

        // Name validation
        if (field.id === 'name') {
            if (field.value.trim().length < 2) {
                isValid = false;
                message = 'Please enter a valid name';
            }
        }

        // Email validation
        if (field.id === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                isValid = false;
                message = 'Please enter a valid email address';
            }
        }

        // Phone validation
        if (field.id === 'phone') {
            const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
            if (!phoneRegex.test(field.value)) {
                isValid = false;
                message = 'Please enter a valid phone number';
            }
        }

        // Required field validation
        if (field.hasAttribute('required') && !field.value) {
            isValid = false;
            message = 'This field is required';
        }

        // Update UI
        if (isValid) {
            formGroup.classList.remove('error');
            errorMessage.textContent = '';
        } else {
            formGroup.classList.add('error');
            errorMessage.textContent = message;
        }

        return isValid;
    }

    // Add blur event listeners to form fields
    const formFields = reservationForm.querySelectorAll('input[required], select[required]');
    formFields.forEach(field => {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => {
            if (field.closest('.form-group').classList.contains('error')) {
                validateField(field);
            }
        });
    });

    // Form submission
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate all fields
        let isFormValid = true;
        formFields.forEach(field => {
            if (!validateField(field)) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                guests: document.getElementById('guests').value,
                date: document.getElementById('date').value,
                time: document.getElementById('time').value,
                occasion: document.getElementById('occasion').value,
                message: document.getElementById('message').value
            };

            // Format date for display
            const dateObj = new Date(formData.date);
            const formattedDate = dateObj.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });

            // Show success message
            document.getElementById('confirm-email').textContent = formData.email;
            reservationForm.classList.add('hidden');
            successMessage.classList.remove('hidden');

            // Store reservation (in real app, this would be sent to backend)
            console.log('Reservation Data:', formData);
            console.log(`Reservation for ${formData.name} on ${formattedDate} at ${formData.time}`);

            // Optional: Store in localStorage
            try {
                const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
                reservations.push({
                    ...formData,
                    timestamp: new Date().toISOString()
                });
                localStorage.setItem('reservations', JSON.stringify(reservations));
            } catch (error) {
                console.error('Error saving reservation:', error);
            }
        } else {
            // Scroll to first error
            const firstError = document.querySelector('.form-group.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });

    // New reservation button
    newReservationBtn.addEventListener('click', () => {
        reservationForm.reset();
        reservationForm.classList.remove('hidden');
        successMessage.classList.add('hidden');
        
        // Remove all error states
        document.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
        });
        
        // Disable time select until date is chosen
        timeSelect.disabled = true;
        
        // Scroll to form
        reservationForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // ===== SCROLL ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.menu-item, .gallery-item, .contact-card, .stat').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ===== INITIALIZE =====
    // Disable time select initially
    timeSelect.disabled = true;

    console.log('Restaurant website initialized successfully!');
});