// UI-related functions
export function initUI() {
  // Add tab switching functionality
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active class from all links and tabs
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
      
      // Add active class to clicked link
      link.classList.add('active');
      
      // Show corresponding tab
      const tabName = link.textContent.toLowerCase();
      document.getElementById(`${tabName}-tab`).classList.add('active');
    });
  });

  // Add event listeners for edit flow buttons
  document.querySelectorAll('.automation-btn').forEach(btn => {
    if (btn.textContent === 'Edit Flow') {
      btn.addEventListener('click', () => window.showAutomationModal());
    }
  });

  // Close modal event handlers
  document.querySelectorAll('.modal-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
      });
    });
  });

  // Close modal when clicking outside
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        modal.classList.remove('active');
      }
    });
  });

  // Theme toggle logic
  const themeSwitch = document.getElementById('theme-switch');
  if (themeSwitch) {
    // Load theme preference from local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      themeSwitch.checked = true;
    }

    // Add event listener for toggle change
    themeSwitch.addEventListener('change', (e) => {
      if (e.target.checked) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
      }
    });
  }
}
