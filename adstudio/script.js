// DoseReel landing page — form handling + small UX touches.

// Intercept the intake form so submission stays on-page (Formspree AJAX).
// Swap YOUR_FORM_ID in index.html for your real Formspree ID and this works as-is.
const form = document.getElementById("intake-form");
const note = document.getElementById("form-note");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = "Sending…";
    button.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        note.textContent = "Got it — your free ad is on the way. Check your inbox within 24 hours.";
        note.className = "form-note success";
      } else {
        note.textContent = "Something went wrong. Email us directly: hello@dosereel.com";
        note.className = "form-note error";
      }
    } catch (err) {
      note.textContent = "Network error. Email us directly: hello@dosereel.com";
      note.className = "form-note error";
    } finally {
      button.textContent = originalText;
      button.disabled = false;
    }
  });
}

// Close other FAQ items when one opens — keeps the section tidy.
document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      document.querySelectorAll(".faq-item[open]").forEach((other) => {
        if (other !== item) other.open = false;
      });
    }
  });
});
