"use client";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp Quick Contact">
      <a
        href="https://wa.me/919711091363?text=Hi%20Accelerance%2C%20I%20would%20like%20to%20discuss%20a%20project"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat with Accelerance on WhatsApp +91 9711091363"
      >
        <span className="floating-whatsapp-pulse"></span>
        <div className="floating-whatsapp-icon-wrap">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="floating-whatsapp-icon"
          >
            <path
              d="M20.52 3.48A11.93 11.93 0 0012.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.17 1.6 5.99L0 24l6.21-1.63a11.93 11.93 0 005.85 1.51h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.52-8.43zM12.07 21.89h-.01a9.92 9.92 0 01-5.06-1.39l-.36-.22-3.76.99 1-3.66-.24-.38a9.92 9.92 0 01-1.52-5.26c0-5.48 4.46-9.94 9.95-9.94 2.66 0 5.15 1.04 7.03 2.92a9.9 9.9 0 012.91 7.03c0 5.49-4.46 9.95-9.94 9.95zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
        <div className="floating-whatsapp-text">
          <span className="floating-whatsapp-label">Quick Chat</span>
          <span className="floating-whatsapp-number">+91 9711091363</span>
        </div>
      </a>
    </aside>
  );
}
