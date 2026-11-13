'use client';

export default function WhatsAppFloat() {
  const rawWhatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923196573418';
  const whatsappNumber = rawWhatsapp.replace(/\D/g, '');

  if (!whatsappNumber) return null;

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        'Hi Abu, I saw your portfolio and would like to discuss a project.'
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat with Abu Hurerah on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.19 8.19 0 0 1-5.82 2.42c-1.44 0-2.86-.37-4.12-1.08l-.3-.17-3.12.82.83-3.04-.19-.31a8.21 8.21 0 0 1-1.25-4.46c0-4.54 3.7-8.24 8.24-8.24zm4.8 11.66c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.02-.15.17-.3.19-.56.06-.26-.13-1.1-.4-2.09-1.29-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.8-1.92-.21-.51-.43-.44-.58-.45l-.5-.01c-.17 0-.45.06-.69.32-.24.26-.92.9-.92 2.2 0 1.3 1.02 2.56 1.16 2.75.14.19 2.01 3.07 4.88 4.31.68.29 1.22.47 1.63.6.69.22 1.31.19 1.81.12.55-.08 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.12-.23-.19-.49-.32z" />
      </svg>
      <span className="wa-tooltip">Chat with me</span>
    </a>
  );
}
