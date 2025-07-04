window.aarambhAnimatorConfig = {
    enableParallax: false,      // Disable parallax
    enableVideoTriggers: false, // Disable video controls
    enableNavbarEffects: false  // Disable navbar animations
};
// VIDEO POPUP FUNCTIONALITY
function openPopup(videoSrc) {
    const popup = document.getElementById("videoPopup");
    const popupVideo = document.getElementById("popupVideo");
    popup.style.display = "flex";
    popupVideo.src = videoSrc;
}

function closePopup() {
    const popup = document.getElementById("videoPopup");
    const popupVideo = document.getElementById("popupVideo");
    popup.style.display = "none";
    popupVideo.pause();
    popupVideo.src = "";
}



// Schedule Tabs
const scheduleData = {
    day1: [
        {time: '9:00 AM - 10:30 AM', title: 'Registration & Welcome Kit Distribution', location: 'Main Auditorium'},
        {time: '11:00 AM - 12:30 PM', title: 'Inaugural Ceremony', location: 'Main Auditorium'},
        {time: '1:30 PM - 2:30 PM', title: 'Lunch Break', location: 'University Cafeteria'},
        {time: '3:00 PM - 5:00 PM', title: 'Ice Breaking Sessions', location: 'Department-wise Activity Areas'}
    ],
    day2: [
        {time: '9:30 AM - 11:00 AM', title: 'University Tour', location: 'Campus Grounds'},
        {time: '11:30 AM - 1:00 PM', title: 'Department Introduction', location: 'Respective Departments'},
        {time: '1:00 PM - 2:00 PM', title: 'Lunch Break', location: 'University Cafeteria'},
        {time: '2:30 PM - 4:30 PM', title: 'Industry Expert Talk', location: 'Seminar Hall'},
        {time: '5:00 PM - 7:00 PM', title: 'Cultural Activities', location: 'Central Lawn'}
    ],
    day3: [
        {time: '9:30 AM - 11:30 AM', title: 'Workshop: Career Planning', location: 'Lecture Hall 1'},
        {time: '12:00 PM - 1:30 PM', title: 'Alumni Interaction', location: 'Seminar Hall'},
        {time: '1:30 PM - 2:30 PM', title: 'Lunch Break', location: 'University Cafeteria'},
        {time: '3:00 PM - 6:00 PM', title: 'Sports & Games', location: 'Sports Complex'}
    ],
    day4: [
        {time: '9:30 AM - 12:30 PM', title: 'Technical Workshop', location: 'Computer Labs'},
        {time: '12:30 PM - 1:30 PM', title: 'Lunch Break', location: 'University Cafeteria'},
        {time: '2:00 PM - 4:00 PM', title: 'Entrepreneurship Session', location: 'E-Cell Hub'},
        {time: '4:30 PM - 6:30 PM', title: 'Talent Hunt Preliminaries', location: 'Auditorium'}
    ],
    day5: [
        {time: '10:00 AM - 12:00 PM', title: 'Motivational Talk', location: 'Main Auditorium'},
        {time: '12:30 PM - 1:30 PM', title: 'Lunch Break', location: 'University Cafeteria'},
        {time: '2:00 PM - 5:00 PM', title: 'Cultural Night & Talent Hunt Finals', location: 'Main Auditorium'},
        {time: '5:30 PM - 7:00 PM', title: 'Closing Ceremony', location: 'Main Auditorium'}
    ]
};

function createScheduleHTML(day) {
    const scheduleItems = scheduleData[day];
    let html = '';
    
    scheduleItems.forEach(item => {
        html += `
            <div class="schedule-item">
                <div class="time">${item.time}</div>
                <div class="event-details">
                    <h3>${item.title}</h3>
                    <p>${item.location}</p>
                </div>
            </div>
        `;
    });
    
    return html;
}

// Initialize schedule tabs when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    // Initially load day 1 schedule
    const day1Content = document.getElementById('day1');
    if (day1Content) {
        day1Content.innerHTML = createScheduleHTML('day1');
    }
    
    // Tab switching
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                tabBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const day = this.getAttribute('data-day');
                
                document.querySelectorAll('.tab-pane').forEach(pane => {
                    pane.classList.remove('active');
                });
                
                const tabPane = document.getElementById(day);
                if (!tabPane) {
                    const newPane = document.createElement('div');
                    newPane.id = day;
                    newPane.className = 'tab-pane active';
                    newPane.innerHTML = createScheduleHTML(day);
                    document.querySelector('.tab-content').appendChild(newPane);
                } else {
                    tabPane.classList.add('active');
                    if (tabPane.innerHTML.trim() === '') {
                        tabPane.innerHTML = createScheduleHTML(day);
                    }
                }
            });
        });
    }

    // Gallery initialization
    const gallery = document.querySelector(".gallery-grid");
    if (gallery) {
        const images = Array.from(gallery.children);
        images.forEach((img) => {
            const clone = img.cloneNode(true);
            gallery.appendChild(clone);
        });
    }



    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    initLoadingScreen();
});

// Utility functions
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVH();
window.addEventListener('resize', setVH);
window.addEventListener('orientationchange', () => {
    setTimeout(setVH, 500);
});


  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const heroHeight = document.getElementById("hero-section")?.offsetHeight || 100;

    if (window.scrollY > heroHeight - 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });


//   mobile navigation toggle
     function toggleDropdown() {
            const dropdown = document.getElementById('dropdownMenu');
            // Add null check
            if (!dropdown) return;
            dropdown.classList.toggle('show');
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            const dropdown = document.getElementById('dropdownMenu');
            const menuButton = event.target.closest('.menu-button');
            
            // Add null check
            if (!dropdown) return;
            
            if (!menuButton && dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });

        // Close dropdown when clicking on a dropdown link
        document.querySelectorAll('.dropdown-menu a').forEach(link => {
            link.addEventListener('click', function() {
                document.getElementById('dropdownMenu').classList.remove('show');
            });
        });


function toggleFaq(element) {
        const answer = element.nextElementSibling;
        const toggle = element.querySelector('.faq-toggle');

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            answer.style.padding = '0 25px';
            toggle.textContent = '+';
            element.classList.remove('active');
        } else {
            // Close all other open FAQ answers
            document.querySelectorAll('.faq-answer').forEach(item => {
                if (item !== answer && item.style.maxHeight) {
                    item.style.maxHeight = null;
                    item.style.padding = '0 25px';
                    item.previousElementSibling.querySelector('.faq-toggle').textContent = '+';
                    item.previousElementSibling.classList.remove('active');
                }
            });

            answer.style.maxHeight = answer.scrollHeight + 30 + "px"; // Add padding
            answer.style.padding = '0 25px 15px'; // Adjust padding after opening
            toggle.textContent = 'x';
            element.classList.add('active');
        }
    }

    function updateProgress() {
        const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
        const checkedCount = document.querySelectorAll('.checklist-item input[type="checkbox"]:checked').length;
        const totalCount = checkboxes.length;
        const progress = (checkedCount / totalCount) * 100;

        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');

        if (progressFill && progressText) {
            progressFill.style.width = progress + '%';
            progressText.textContent = `${Math.round(progress)}% Complete (${checkedCount}/${totalCount} items checked)`;
        }
    }

    // Initial call to set the correct progress on page load
    document.addEventListener('DOMContentLoaded', updateProgress);

    /* Search functionality commented out as search box is not present
    // Basic search functionality for FAQ
    document.getElementById('searchInput').addEventListener('keyup', function() {
        const searchValue = this.value.toLowerCase();
        document.querySelectorAll('.faq-item').forEach(item => {
            const question = item.querySelector('.faq-question span:first-child').textContent.toLowerCase();
            const answer = item.querySelector('.faq-answer p').textContent.toLowerCase();

            if (question.includes(searchValue) || answer.includes(searchValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
    */

    // Download Checklist (Placeholder for actual PDF generation)
    function downloadChecklist() {
        // Create a new jsPDF instance
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Set initial position and constants
        let yPos = 20;
        const lineHeight = 8;
        const margin = 20;
        const pageWidth = doc.internal.pageSize.width;
        const pageHeight = doc.internal.pageSize.height;
        
        // Add university logo (if available)
        // doc.addImage('path_to_logo.png', 'PNG', margin, yPos, 30, 30);
        
        // Add title with proper formatting
        doc.setFontSize(24);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(26, 54, 54); // Dark teal color
        doc.text('Essential Packing Checklist', pageWidth/2, yPos, { align: 'center' });
        yPos += lineHeight * 2;
        
        // Add subtitle
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(100, 100, 100); // Gray color
        doc.text('JK Lakshmipat University - Aarambh 2025', pageWidth/2, yPos, { align: 'center' });
        yPos += lineHeight * 2;
        
        // Add date and time
        const now = new Date();
        const dateStr = now.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        const timeStr = now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        doc.setFontSize(10);
        doc.text(`Generated on: ${dateStr} at ${timeStr}`, pageWidth/2, yPos, { align: 'center' });
        yPos += lineHeight * 2;
        
        // Add introduction text
        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60); // Dark gray
        const introText = 'This checklist will help you prepare for your university journey. Mark items as you pack them to ensure you have everything you need.';
        const splitIntro = doc.splitTextToSize(introText, pageWidth - (margin * 2));
        doc.text(splitIntro, margin, yPos);
        yPos += lineHeight * (splitIntro.length + 1);
        
        // Get all checklist categories
        const categories = document.querySelectorAll('.checklist-category');
        
        categories.forEach(category => {
            const categoryTitle = category.querySelector('h4').textContent;
            const items = category.querySelectorAll('.checklist-item');
            
            // Check if we need a new page
            if (yPos > pageHeight - margin) {
                doc.addPage();
                yPos = margin;
            }
            
            // Add category title with styling
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(26, 54, 54); // Dark teal color
            doc.text(categoryTitle, margin, yPos);
            yPos += lineHeight * 1.5;
            
            // Add items with proper formatting
            doc.setFontSize(11);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(60, 60, 60); // Dark gray
            
            items.forEach(item => {
                const checkbox = item.querySelector('input[type="checkbox"]');
                const itemText = item.textContent.trim();
                const isChecked = checkbox.checked;
                
                // Check if we need a new page
                if (yPos > pageHeight - margin) {
                    doc.addPage();
                    yPos = margin;
                }
                
                // Add checkbox symbol and item text with proper spacing
                const checkboxSymbol = isChecked ? '☑' : '☐';
                doc.text(`${checkboxSymbol}  ${itemText}`, margin + 5, yPos);
                yPos += lineHeight;
            });
            
            yPos += lineHeight; // Add space between categories
        });
        
        // Add footer with page numbers
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(10);
            doc.setTextColor(100, 100, 100); // Gray color
            
            // Add page number
            doc.text(`Page ${i} of ${pageCount}`, pageWidth/2, pageHeight - 10, { align: 'center' });
            
            // Add university name in footer
            doc.text('JK Lakshmipat University', pageWidth/2, pageHeight - 5, { align: 'center' });
        }
        
        // Save the PDF
        doc.save('aarambh-2025-packing-checklist.pdf');
    }



// Parallax effect for logo

  const logo = document.querySelector('.logo-image');

  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20; // range -10 to +10
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    logo.style.transform = `translate(${x}px, ${y}px)`;
  });

//   custom cursor effect
const cursor = document.querySelector('.cursor-object');

document.addEventListener('mousemove', (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Optional click effect
document.addEventListener('mousedown', () => {
  cursor.classList.add('clicked');
});

document.addEventListener('mouseup', () => {
  cursor.classList.remove('clicked');
});


// loading animation and progress bar
document.addEventListener('DOMContentLoaded', function () {
    const loadingSection = document.getElementById('loadingSection');
    const loadingVideo = document.getElementById('loadingVideo');
    const skipButton = document.getElementById('skipButton');
    const progressContainer = document.getElementById('progressContainer');
    const progressFill = document.getElementById('progressFill');
    const loadingPercentage = document.getElementById('loadingPercentage');
    const mainContent = document.querySelector('.Main-content');

    // Check if animation has been shown in this session
    const hasSeenAnimation = sessionStorage.getItem('hasSeenAnimation');

    if (hasSeenAnimation) {
        // If animation has been shown, hide loading section and show main content immediately
        if (loadingSection) loadingSection.style.display = 'none';
        if (mainContent) {
            mainContent.style.display = 'block';
            mainContent.style.opacity = '1';
        }
        return;
    }

    let progressInterval;
    let currentProgress = 0;
    let videoStarted = false;
    let loadingComplete = false;

    if (loadingVideo) {
        loadingVideo.muted = true;
        loadingVideo.playsInline = true;
        loadingVideo.play().catch(fallbackToProgressBar);
    }

    const VIDEO_DURATION = 15000; // 15 seconds
    const PROGRESS_INTERVAL_TIME = VIDEO_DURATION / 100; // 150ms per %

    // Initial state
    if (loadingSection) loadingSection.style.display = 'block';
    if (mainContent) {
        mainContent.style.display = 'none';
    }

    // Progress bar logic
    function startProgressBar() {
        if (progressInterval) return;

        progressInterval = setInterval(() => {
            if (currentProgress < 100) {
                currentProgress++;
                if (progressFill) progressFill.style.width = `${currentProgress}%`;
                if (loadingPercentage) loadingPercentage.textContent = `${currentProgress}%`;
            } else {
                clearInterval(progressInterval);
                completeLoading();
            }
        }, PROGRESS_INTERVAL_TIME);
    }

    // Transition to main content
    function completeLoading() {
        if (loadingComplete) return;
        loadingComplete = true;

        // Set flag in sessionStorage
        sessionStorage.setItem('hasSeenAnimation', 'true');

        if (loadingSection) {
            loadingSection.style.transition = 'opacity 0.5s ease-out';
            loadingSection.style.opacity = '0';
        }

        setTimeout(() => {
            if (loadingSection) loadingSection.style.display = 'none';
            if (mainContent) {
                mainContent.style.display = 'block';
                mainContent.style.opacity = '0';
                mainContent.style.transition = 'opacity 0.5s ease-in';
                setTimeout(() => {
                    mainContent.style.opacity = '1';
                }, 10);
            }
        }, 500);
    }

    // Video event handlers
    if (loadingVideo) {
        loadingVideo.addEventListener('playing', () => {
            if (!videoStarted) {
                videoStarted = true;
                startProgressBar();
            }
        });

        loadingVideo.addEventListener('ended', () => {
            if (!loadingComplete) {
                currentProgress = 100;
                if (progressFill) progressFill.style.width = '100%';
                if (loadingPercentage) loadingPercentage.textContent = '100%';
                clearInterval(progressInterval);
                setTimeout(completeLoading, 500);
            }
        });

        loadingVideo.addEventListener('error', (e) => {
            console.error('Video loading error:', e);
            fallbackToProgressBar();
        });
    }

    if (skipButton) {
        skipButton.addEventListener('click', () => {
            if (progressInterval) clearInterval(progressInterval);
            completeLoading();
        });
    }

    function fallbackToProgressBar() {
        if (!videoStarted) {
            console.warn('Falling back to progress bar...');
            videoStarted = true;
            startProgressBar();
        }
    }

    // Force progress bar after 5s if video doesn't autoplay
    setTimeout(fallbackToProgressBar, 5000);

    // Autoplay video
    if (loadingVideo) {
        const playPromise = loadingVideo.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    console.log('Autoplay started');
                })
                .catch((error) => {
                    console.warn('Autoplay blocked, using fallback:', error);
                    fallbackToProgressBar();
                });
        }
    }
});

// SMOOTH SCROLLING ENHANCEMENT
function initSmoothScrolling() {
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Enhanced smooth scroll for navigation
    const navLinks = document.querySelectorAll('.nav-link, .navbar a, .menu-item a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                    const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// SMOOTH MEDIA LOADING WITH LAZY LOADING
function initSmoothMediaLoading() {
    // Lazy loading for images
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.src || img.src;
                
                // Add loading animation
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.6s ease-in-out';
                
                const newImg = new Image();
                newImg.onload = function() {
                    img.src = src;
                    img.style.opacity = '1';
                    img.classList.add('loaded');
                };
                newImg.onerror = function() {
                    img.style.opacity = '0.5';
                    img.classList.add('error');
                };
                newImg.src = src;
                
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.1
    });

    // Observe all images
    document.querySelectorAll('img').forEach(img => {
        if (!img.complete) {
            imageObserver.observe(img);
        }
    });

    // Lazy loading for videos
    const videoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                if (video.dataset.src) {
                    video.src = video.dataset.src;
                    video.style.opacity = '0';
                    video.style.transition = 'opacity 0.8s ease-in-out';
                    
                    video.addEventListener('loadeddata', function() {
                        video.style.opacity = '1';
                    });
                    
                    video.load();
                }
                observer.unobserve(video);
            }
        });
    }, {
        rootMargin: '100px 0px',
        threshold: 0.1
    });

    // Observe all videos
    document.querySelectorAll('video').forEach(video => {
        videoObserver.observe(video);
    });
}

// SMOOTH PAGE TRANSITIONS
function initSmoothPageTransitions() {
    // Add smooth fade-in for page sections
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, {
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    });

    // Add fade-in class to sections
    document.querySelectorAll('section, .content-section, .card, .schedule-item').forEach(section => {
        section.classList.add('fade-in-element');
        sectionObserver.observe(section);
    });
}

// SMOOTH SCROLL MOMENTUM (for better mobile experience)
function initScrollMomentum() {
    // Add smooth scrolling momentum for iOS
    document.body.style.webkitOverflowScrolling = 'touch';
    
    // Custom smooth scroll for better control
    let isScrolling = false;
    let scrollEndTimer = null;

    window.addEventListener('scroll', function() {
        if (!isScrolling) {
            document.body.classList.add('is-scrolling');
            isScrolling = true;
        }

        clearTimeout(scrollEndTimer);
        scrollEndTimer = setTimeout(function() {
            document.body.classList.remove('is-scrolling');
            isScrolling = false;
        }, 150);
    }, { passive: true });
}

// PRELOAD CRITICAL MEDIA
function preloadCriticalMedia() {
    // Preload images that are likely to be viewed first
    const criticalImages = document.querySelectorAll('img[data-priority="high"], .hero img, .banner img');
    criticalImages.forEach(img => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = img.src || img.dataset.src;
        document.head.appendChild(link);
    });

    // Preload critical videos
    const criticalVideos = document.querySelectorAll('video[data-priority="high"], .hero video');
    criticalVideos.forEach(video => {
        if (video.src || video.dataset.src) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'video';
            link.href = video.src || video.dataset.src;
            document.head.appendChild(link);
        }
    });
}

// SMOOTH ANIMATION HELPERS
function addSmoothAnimations() {
    // Add CSS for smooth animations
    const style = document.createElement('style');
    style.textContent = `
        html {
            scroll-behavior: smooth;
        }
        
        .fade-in-element {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in-visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .is-scrolling * {
            pointer-events: none;
        }
        
        img {
            transition: opacity 0.3s ease-in-out;
        }
        
        img.loaded {
            opacity: 1;
        }
        
        img.error {
            opacity: 0.5;
            filter: grayscale(100%);
        }
        
        /* Smooth hover effects */
        a, button, .clickable {
            transition: all 0.3s ease;
        }
        
        /* Smooth focus states */
        *:focus {
            outline: 2px solid #007bff;
            outline-offset: 2px;
            transition: outline 0.2s ease;
        }
        
        /* Mobile scroll improvements */
        body {
            -webkit-overflow-scrolling: touch;
            overscroll-behavior: contain;
        }
        
        /* Loading spinner for media */
        .media-loading {
            position: relative;
        }
        
        .media-loading::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            border: 2px solid #f3f3f3;
            border-radius: 50%;
            border-top: 2px solid #3498db;
            animation: spin 1s linear infinite;
            transform: translate(-50%, -50%);
            z-index: 1;
        }
        
        @keyframes spin {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}

// OPTIMIZED SCROLL LISTENER
function initOptimizedScrolling() {
    let ticking = false;

    function updateScrollEffects() {
        // Your existing scroll effects here
        const navbar = document.querySelector(".navbar");
        const heroHeight = document.getElementById("hero-section")?.offsetHeight || 100;

        if (window.scrollY > heroHeight - 50) {
            navbar?.classList.add("scrolled");
        } else {
            navbar?.classList.remove("scrolled");
        }

        // Back to top button
        const backToTopButton = document.getElementById('backToTop');
        if (backToTopButton) {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        }

        ticking = false;
    }

    function requestScrollUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
}

// INITIALIZE ALL SMOOTH ENHANCEMENTS
function initAllSmoothEnhancements() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(initAllSmoothEnhancements, 100);
        });
        return;
    }

    // Initialize all smooth features
    addSmoothAnimations();
    preloadCriticalMedia();
    initSmoothScrolling();
    initSmoothMediaLoading();
    initSmoothPageTransitions();
    initScrollMomentum();
    initOptimizedScrolling();

    console.log('✅ Smooth enhancements initialized');
}

// AUTO-INITIALIZE
initAllSmoothEnhancements();

// Loading Screen Functionality
function initLoadingScreen() {
    const loadingSection = document.getElementById('loadingSection');
    const loadingVideo = document.getElementById('loadingVideo');
    const skipButton = document.getElementById('skipButton');
    const progressContainer = document.getElementById('progressContainer');
    const progressFill = document.getElementById('progressFill');
    const loadingPercentage = document.getElementById('loadingPercentage');
    const mainContent = document.querySelector('.Main-content');
    let loadingComplete = false;

    // Check if animation has been shown in this session
    const hasSeenAnimation = sessionStorage.getItem('hasSeenAnimation');

    if (hasSeenAnimation) {
        // If animation has been shown, hide loading section and show main content immediately
        if (loadingSection) loadingSection.style.display = 'none';
        if (mainContent) {
            mainContent.style.display = 'block';
            mainContent.style.opacity = '1';
        }
        return;
    }

    let progressInterval;
    let currentProgress = 0;
    let videoStarted = false;

    const VIDEO_DURATION = 15000; // 15 seconds
    const PROGRESS_INTERVAL_TIME = VIDEO_DURATION / 100; // 150ms per %

    // Initial state
    if (loadingSection) loadingSection.style.display = 'block';
    if (mainContent) {
        mainContent.style.display = 'none';
    }

    // Progress bar logic
    function startProgressBar() {
        if (progressInterval) return;

        progressInterval = setInterval(() => {
            if (currentProgress < 100) {
                currentProgress++;
                if (progressFill) progressFill.style.width = `${currentProgress}%`;
                if (loadingPercentage) loadingPercentage.textContent = `${currentProgress}%`;
            } else {
                clearInterval(progressInterval);
                completeLoading();
            }
        }, PROGRESS_INTERVAL_TIME);
    }

    // Transition to main content
    function completeLoading() {
        if (loadingComplete) return;
        loadingComplete = true;

        // Set flag in sessionStorage
        sessionStorage.setItem('hasSeenAnimation', 'true');

        if (loadingSection) {
            loadingSection.style.transition = 'opacity 0.5s ease-out';
            loadingSection.style.opacity = '0';
        }

        setTimeout(() => {
            if (loadingSection) loadingSection.style.display = 'none';
            if (mainContent) {
                mainContent.style.display = 'block';
                mainContent.style.opacity = '0';
                mainContent.style.transition = 'opacity 0.5s ease-in';
                setTimeout(() => {
                    mainContent.style.opacity = '1';
                }, 10);
            }
        }, 500);
    }

    // Video event handlers
    if (loadingVideo) {
        loadingVideo.addEventListener('playing', () => {
            if (!videoStarted) {
                videoStarted = true;
                startProgressBar();
            }
        });

        loadingVideo.addEventListener('ended', () => {
            if (!loadingComplete) {
                currentProgress = 100;
                if (progressFill) progressFill.style.width = '100%';
                if (loadingPercentage) loadingPercentage.textContent = '100%';
                clearInterval(progressInterval);
                setTimeout(completeLoading, 500);
            }
        });

        loadingVideo.addEventListener('error', (e) => {
            console.error('Video loading error:', e);
            fallbackToProgressBar();
        });
    }

    if (skipButton) {
        skipButton.addEventListener('click', () => {
            if (progressInterval) clearInterval(progressInterval);
            completeLoading();
        });
    }

    function fallbackToProgressBar() {
        if (!videoStarted) {
            console.warn('Falling back to progress bar...');
            videoStarted = true;
            startProgressBar();
        }
    }

    // Force progress bar after 5s if video doesn't autoplay
    setTimeout(fallbackToProgressBar, 5000);

    // Autoplay video
    if (loadingVideo) {
        const playPromise = loadingVideo.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    console.log('Autoplay started');
                })
                .catch((error) => {
                    console.warn('Autoplay blocked, using fallback:', error);
                    fallbackToProgressBar();
                });
        }
    }
}

// Initialize loading screen when DOM is loaded
document.addEventListener('DOMContentLoaded', initLoadingScreen);