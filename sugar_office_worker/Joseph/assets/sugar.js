//! ------------top menu
document.addEventListener("DOMContentLoaded", function () {
  // Function to toggle the visibility of the dropdown
  function toggleDropdown(dropdown, isOpen) {
    dropdown.style.display = isOpen ? "block" : "none";
  }

  // Function to handle mouseenter and mouseleave events
  function handleMouseEvents(trigger, dropdown) {
    trigger.addEventListener("mouseenter", function () {
      toggleDropdown(dropdown, true);
    });

    trigger.addEventListener("mouseleave", function () {
      toggleDropdown(dropdown, false);
    });
  }

  // Buy JOURNAL dropdown
  const buyJournalTrigger = document.querySelector(".all-header .language");
  const buyJournalDropdown = document.querySelector(".all-header .language .absolute");

  if (buyJournalTrigger && buyJournalDropdown) {
    handleMouseEvents(buyJournalTrigger, buyJournalDropdown);
  }

  // Currency dropdown
  const currencyTrigger = document.querySelector(".all-header .currency");
  const currencyDropdown = document.querySelector(".all-header .currency .absolute");

  if (currencyTrigger && currencyDropdown) {
    handleMouseEvents(currencyTrigger, currencyDropdown);
  }
});

// !---------------------------

