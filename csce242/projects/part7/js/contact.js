(function () {
    const form = document.getElementById("contact-form");
    if (!form) return;
  
    const resultEl = document.getElementById("contact-result");
    const submitBtn = document.getElementById("btn-send") || form.querySelector('button[type="submit"]');
    const ENDPOINT = "https://api.web3forms.com/submit";
  
    function show(text, type) {
      if (!resultEl) return;
      resultEl.className = type ? `status ${type}` : "status";
      resultEl.style.display = "inline";
      resultEl.textContent = text;
    }
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      if (!form.checkValidity()) {
        show("Please complete the required fields.", "err");
        form.reportValidity();
        return;
      }
  
      const hp = form.querySelector('input[name="botcheck"]');
      if (hp && hp.value.trim() !== "") return;
  
      const accessKey = form.querySelector('input[name="access_key"]');
      if (!accessKey || !accessKey.value) {
        show("Missing Web3Forms access_key.", "err");
        return;
      }
  
      show("Please wait...");
      if (submitBtn) submitBtn.disabled = true;
  
      const fd = new FormData(form);
      const payload = Object.fromEntries(fd.entries());
      payload.subject = "New message from Beyond Boarders";
      payload.from_name = payload.name || "Website Visitor";
  
      try {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(payload)
        });
  
        const data = await res.json();
        console.log("Web3Forms response:", res.status, data);
  
        if (res.ok && data && data.success !== false) {
          show("Thanks! Your message was sent.", "ok");
          form.reset();
        } else {
          show((data && data.message) || "API error", "err");
        }
      } catch (err) {
        console.error("Network/Fetch error:", err);
        show("Network error — please try again.", "err");
      } finally {
        if (submitBtn) submitBtn.disabled = false;
        setTimeout(() => {
          if (resultEl) {
            resultEl.style.display = "none";
            resultEl.textContent = "";
            resultEl.className = "status";
          }
        }, 3000);
      }
    });
  })();
  