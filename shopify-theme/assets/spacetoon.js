/**
 * Spacetoon Toys - Theme JavaScript
 */

(function() {
  'use strict';

  // Tab switching functionality
  function initTabs() {
    const tabs = document.querySelectorAll('.products-tabs__tab');
    const panels = document.querySelectorAll('.products-tabs__panel');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('aria-controls');
        
        // Update tabs
        tabs.forEach(t => {
          t.setAttribute('aria-selected', 'false');
        });
        tab.setAttribute('aria-selected', 'true');

        // Update panels
        panels.forEach(panel => {
          if (panel.id === targetId) {
            panel.setAttribute('aria-hidden', 'false');
          } else {
            panel.setAttribute('aria-hidden', 'true');
          }
        });
      });
    });
  }

  // Global function to switch tabs from hero buttons
  window.switchTab = function(team) {
    const tab = document.querySelector(`[data-tab="${team}"]`);
    if (tab) {
      tab.click();
    }
  };

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Add to cart AJAX
  function initAddToCart() {
    document.querySelectorAll('.product-card form').forEach(form => {
      form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const button = this.querySelector('button[type="submit"]');
        
        this.setAttribute('data-loading', 'true');
        button.disabled = true;

        try {
          const response = await fetch('/cart/add.js', {
            method: 'POST',
            body: formData
          });
          
          if (response.ok) {
            // Optionally update cart count or show notification
            const data = await response.json();
            console.log('Added to cart:', data);
          }
        } catch (error) {
          console.error('Add to cart error:', error);
        } finally {
          this.removeAttribute('data-loading');
          button.disabled = false;
        }
      });
    });
  }

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initSmoothScroll();
    initAddToCart();
  });
})();
