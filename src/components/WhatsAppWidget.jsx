import React, { useState } from "react";

export default function WhatsAppWidget({
  phone = "+971 55 808 6462",
  message = "Hi! I want to know more."
}) {
  const [open, setOpen] = useState(false);

  const encodedMsg = encodeURIComponent(message);
  const waWebUri = `https://wa.me/${phone}?text=${encodedMsg}`;

  const styles = {
    floatingBtn: {
      position: "fixed",
      right: "25px",
      bottom: "125px",
      zIndex: 9999,
      width: "65px",
      height: "65px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      boxShadow: "0 8px 25px rgba(37, 211, 102, 0.35), 0 0 0 0 rgba(37, 211, 102, 0.7)",
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      animation: open ? "none" : "pulse 2s infinite",
      transform: open ? "rotate(45deg)" : "rotate(0deg)",
    },
    popup: {
      position: "fixed",
      right: "25px",
      bottom: "200px",
      width: "320px",
      borderRadius: "16px",
      background: "#fff",
      boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 8px 25px rgba(0,0,0,0.1)",
      overflow: "hidden",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      zIndex: 9998,
      transform: open ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
      opacity: open ? 1 : 0,
      visibility: open ? "visible" : "hidden",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    },
    header: {
      background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
      color: "#fff",
      padding: "20px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      position: "relative",
      overflow: "hidden",
    },
    headerBg: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"20\" cy=\"20\" r=\"2\" fill=\"rgba(255,255,255,0.1)\"/><circle cx=\"80\" cy=\"40\" r=\"1\" fill=\"rgba(255,255,255,0.05)\"/><circle cx=\"40\" cy=\"70\" r=\"1.5\" fill=\"rgba(255,255,255,0.08)\"/></svg>')",
      opacity: 0.3,
    },
    avatar: {
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backdropFilter: "blur(10px)",
      border: "2px solid rgba(255,255,255,0.2)",
    },
    headerText: {
      flex: 1,
      zIndex: 1,
    },
    title: {
      fontSize: "16px",
      fontWeight: "600",
      margin: 0,
      lineHeight: 1.2,
    },
    subtitle: {
      fontSize: "12px",
      opacity: 0.9,
      margin: "2px 0 0 0",
      display: "flex",
      alignItems: "center",
      gap: "6px",
    },
    onlineIndicator: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "#4CAF50",
      animation: "blink 2s infinite",
    },
    closeBtn: {
      background: "rgba(255,255,255,0.1)",
      border: "none",
      color: "white",
      fontSize: "18px",
      cursor: "pointer",
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.2s ease",
      backdropFilter: "blur(10px)",
    },
    body: {
      padding: "24px",
      background: "linear-gradient(180deg, #fafafa 0%, #ffffff 100%)",
    },
    welcomeMsg: {
      fontSize: "15px",
      color: "#333",
      lineHeight: 1.5,
      margin: "0 0 20px 0",
      display: "flex",
      alignItems: "flex-start",
      gap: "8px",
    },
    chatBubble: {
      background: "#e8f5e8",
      padding: "12px 16px",
      borderRadius: "18px 18px 18px 4px",
      fontSize: "14px",
      color: "#333",
      margin: "0 0 16px 0",
      position: "relative",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    },
    chatBtn: {
      width: "100%",
      padding: "14px 20px",
      background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
      color: "#fff",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      fontSize: "15px",
      fontWeight: "600",
      transition: "all 0.2s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      boxShadow: "0 4px 12px rgba(37, 211, 102, 0.3)",
    },
  };

  return (
    <>
      <style>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 8px 25px rgba(37, 211, 102, 0.35), 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          50% {
            box-shadow: 0 8px 25px rgba(37, 211, 102, 0.35), 0 0 0 15px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 8px 25px rgba(37, 211, 102, 0.35), 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }
      `}</style>

      {/* Floating WhatsApp Button */}
      <button 
        style={styles.floatingBtn}
        onClick={() => setOpen(!open)}
        onMouseEnter={(e) => {
          if (!open) {
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0 12px 35px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0.7)";
          }
        }}
        onMouseLeave={(e) => {
          if (!open) {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 8px 25px rgba(37, 211, 102, 0.35), 0 0 0 0 rgba(37, 211, 102, 0.7)";
          }
        }}
      >
        {open ? (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        ) : (
          <svg viewBox="0 0 32 32" width="32" height="32" fill="white">
            <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.8 5.6 2.2 8L.5 31.5l7.7-2c2.3 1.3 4.8 2 7.7 2 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zM16 29c-2.6 0-5.1-.7-7.3-2.1l-.5-.3-4.6 1.2 1.2-4.5-.3-.5C3 20.9 2.5 18.5 2.5 16 2.5 8.7 8.7 2.5 16 2.5S29.5 8.7 29.5 16 23.3 29 16 29z"/>
            <path d="M23.2 18.8c-.4-.2-2.1-1-2.5-1.2s-.6-.2-.9.2c-.3.4-1 1.2-1.2 1.4s-.5.3-.9.1c-.5-.2-2-1-3.8-2.8-1.4-1.4-2.3-3.1-2.6-3.6-.3-.5 0-.7.2-1 .2-.2.5-.5.7-.8.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8s-.9-2.3-1.3-3.2c-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.9s1.6 4.5 1.8 4.8c.2.3 3.1 4.9 7.5 6.7.5.2.9.3 1.3.4.6.2 1.1.1 1.5.1.5-.1 2.1-.9 2.4-1.8.3-.9.3-1.6.2-1.8 0-.2-.2-.3-.6-.5z"/>
          </svg>
        )}
      </button>

      {/* Chat Popup */}
      <div style={styles.popup}>
        <div style={styles.header}>
          <div style={styles.headerBg}></div>
          <div style={styles.avatar}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <div style={styles.headerText}>
            <h3 style={styles.title}>Customer Support</h3>
            <p style={styles.subtitle}>
              <span style={styles.onlineIndicator}></span>
              Online now
            </p>
          </div>
          <button 
            style={styles.closeBtn}
            onClick={() => setOpen(false)}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255,255,255,0.2)";
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(255,255,255,0.1)";
              e.target.style.transform = "scale(1)";
            }}
          >
            ✕
          </button>
        </div>
        
        <div style={styles.body}>
          <div style={styles.chatBubble}>
            <strong>Hello! 👋</strong><br/>
            How can we help you today? Feel free to ask any questions.
          </div>
          
          <a href={waWebUri} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
            <button 
              style={styles.chatBtn}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 20px rgba(37, 211, 102, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 12px rgba(37, 211, 102, 0.3)";
              }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
              </svg>
              Start WhatsApp Chat
            </button>
          </a>
        </div>
      </div>
    </>
  );
}