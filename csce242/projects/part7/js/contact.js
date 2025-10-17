
(function () {
    const form = document.getElementById("contact-form");
    if (!form) return;
  
    const result = document.getElementById("contact-result");
    const btn = document.getElementById("btn-send");
    const ENDPOINT = "https://api.web3forms.com/submit";
  
    const setMessage = (msg, type = "") => {
      result.textContent = msg;
      result.className = type;
      result.style.display = "block";
    };
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      if (!form.checkValidity()) {
        form.reportValidity();
        setMessage("Please complete the required fields.", "error");
        return;
      }
  
      const hp = form.querySelector('input[name="botcheck"]');
      if (hp && hp.value.trim() !== "") return;
  
      const data = Object.fromEntries(new FormData(form).entries());
  
      btn.disabled = true;
      setMessage("Please wait…");
  
      try {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
  
        const json = await res.json();
  
        if (res.ok && json.success) {
          setMessage("Thanks! Your message was sent.", "ok");
          form.reset();
        } else {
          setMessage(json.message || "Something went wrong.", "error");
        }
      } catch (err) {
        console.error(err);
        setMessage("Network error — please try again.", "error");
      } finally {
        btn.disabled = false;
        setTimeout(() => (result.style.display = "none"), 4000);
      }
    });
  })();
  