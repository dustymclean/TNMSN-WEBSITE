
export const copyToClipboard = (text: string) => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Clipboard copy failed', err);
  }
  document.body.removeChild(textArea);
};

export const triggerSMS = (message: string) => {
  const phone = "6013000702";
  window.location.href = `sms:+1${phone}?body=${encodeURIComponent(message)}`;
};
