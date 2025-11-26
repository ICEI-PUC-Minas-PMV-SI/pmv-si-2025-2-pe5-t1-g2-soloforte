// Small utility helpers used by the client scripts

function escapeHtml(unsafe) {
  if (unsafe === null || unsafe === undefined) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatPrice(value) {
  const conf = (window.CONFIG && window.CONFIG.CURRENCY) || {
    locale: 'pt-BR',
    currency: 'BRL',
  };
  try {
    return new Intl.NumberFormat(conf.locale || 'pt-BR', {
      style: 'currency',
      currency: conf.currency || 'BRL',
      minimumFractionDigits: 2,
    }).format(Number(value)).replace(/^\D+/, '').trim();
  } catch (e) {
    return Number(value).toFixed(2);
  }
}

function showAlert(message, type = 'info') {
  const container = document.getElementById('alertContainer');
  if (!container) return;

  const alert = document.createElement('div');
  alert.className = 'alert ' + (type === 'success' ? 'alert-success show' : type === 'error' ? 'alert-error show' : 'show');
  alert.textContent = message;

  container.appendChild(alert);

  const duration = (window.CONFIG && window.CONFIG.ALERT_DURATION) || 5000;
  setTimeout(() => {
    alert.classList.remove('show');
    try { container.removeChild(alert); } catch (e) {}
  }, duration);
}

// Expose helpers for manual tests in console
window.escapeHtml = escapeHtml;
window.formatPrice = formatPrice;
window.showAlert = showAlert;
