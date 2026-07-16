// Shared APEX D.E.F form logic (EnquiryForm + DealerForm): client validation,
// Web3Forms fetch submit with aria-live status messaging, and a WhatsApp deep-link
// fallback when no access key is configured (forms are never dead).
function initDefForms() {
  document.querySelectorAll('form[data-def-form]').forEach((form) => {
    if (form.dataset.defFormBound) return;
    form.dataset.defFormBound = 'true';
    form.noValidate = true;

    const card = form.closest('[data-form-card]') ?? form.parentElement;
    const status = card?.querySelector('.form-status');
    const submitBtn = form.querySelector('button[type="submit"]');
    if (!status || !submitBtn) return;
    const idleLabel = submitBtn.textContent;

    const setStatus = (kind, text) => {
      status.classList.toggle('is-success', kind === 'success');
      status.classList.toggle('is-error', kind === 'error');
      status.textContent = text ?? '';
    };

    const showSuccess = () => {
      form.hidden = true;
      setStatus('success', form.dataset.success);
    };

    // Returning from the no-JS Web3Forms redirect (?submitted=1).
    if (new URLSearchParams(location.search).get('submitted') === '1') {
      showSuccess();
      return;
    }

    const validPhone = (v) => /^(?:\+?91)?[6-9][0-9]{9}$/.test(v.replace(/[\s-]/g, ''));

    const controlOf = (field) => field.querySelector('input, select, textarea');

    const validateField = (field) => {
      const input = controlOf(field);
      if (!input || !input.required) return true;
      const value = input.value.trim();
      const ok = input.type === 'tel' ? validPhone(value) : value !== '';
      field.classList.toggle('has-error', !ok);
      if (ok) input.removeAttribute('aria-invalid');
      else input.setAttribute('aria-invalid', 'true');
      return ok;
    };

    const fields = Array.from(form.querySelectorAll('.field'));
    fields.forEach((field) => {
      const input = controlOf(field);
      if (!input) return;
      const revalidate = () => {
        if (field.classList.contains('has-error')) validateField(field);
      };
      input.addEventListener('input', revalidate);
      input.addEventListener('change', revalidate);
    });

    form.addEventListener('submit', (event) => {
      const invalid = fields.filter((field) => !validateField(field));
      if (invalid.length) {
        event.preventDefault();
        controlOf(invalid[0])?.focus();
        return;
      }

      // No Web3Forms key configured: hand the answers to WhatsApp instead.
      if (form.hasAttribute('data-form-fallback')) {
        event.preventDefault();
        const lines = [form.dataset.waIntro ?? ''];
        fields.forEach((field) => {
          const input = controlOf(field);
          const label = field.querySelector('label');
          const value = input?.value.trim();
          if (value && label) lines.push(`${label.textContent.replace(/\*\s*$/, '').trim()}: ${value}`);
        });
        const url = `https://wa.me/${form.dataset.waNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
        window.open(url, '_blank', 'noopener');
        return;
      }

      event.preventDefault();
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) showSuccess();
          else setStatus('error', form.dataset.error);
        })
        .catch(() => setStatus('error', form.dataset.error))
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = idleLabel;
        });
    });
  });
}

initDefForms();
