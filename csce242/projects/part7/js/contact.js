(function () {
    const form = document.getElementById("contact-form");
    if (!form) return;
  
    const resultEl = document.getElementById("contact-result");
    const submitBtn = form.querySelector('button[type="submit"]');
    const ENDPOINT = "https://api.web3forms.com/submit";
  
    function setResult(text, type) {
      if (!resultEl) return;
      resultEl.className = type ? `status ${type}` : "status";
      resultEl.style.display = "inline";
      resultEl.textContent = text;
    }
  
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      
      if (!form.checkValidity()) {
        form.reportValidity();
        setResult("Please complete the required fields.", "err");
        return;
      }
  
      
      const hp = form.querySelector('input[name="botcheck"]');
      if (hp && (hp.checked || (hp.value && hp.value.trim() !== ""))) return;
  
      
      const accessKey = form.querySelector('input[name="access_key"]');
      if (!accessKey || !accessKey.value) {
        setResult("Missing Web3Forms access_key.", "err");
        return;
      }
  
     
      const payload = Object.fromEntries(new FormData(form).entries());
      payload.subject = "New message from Beyond Boarders";
      payload.from_name = payload.name || "Website Visitor";
  
      setResult("Please wait…");
      if (submitBtn) submitBtn.disabled = true;
  
      try {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(payload)
        });
  
        let data = null;
        try { data = await res.json(); } catch {}
  
        if (res.ok && data && data.success !== false) {
          setResult("Thanks! Your message was sent.", "ok");
          form.reset();
        } else {
          
          setResult((data && data.message) || `Error (status ${res.status})`, "err");
          console.error("Web3Forms error:", res.status, data);
        }
      } catch (err) {
        console.error(err);
        setResult("Network error—please try again.", "err");
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
  