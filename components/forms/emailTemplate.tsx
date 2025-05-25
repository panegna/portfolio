import * as React from "react";

interface EmailTemplateProps {
  name: string;
  mail: string;
  content: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  mail,
  content,
}) => (
  <div
    style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f9f9f9",
      padding: "20px",
      borderRadius: "8px",
      maxWidth: "600px",
      margin: "0 auto",
      color: "#333",
    }}
  >
    <h2 style={{ color: "#222" }}>📩 Nouveau message reçu</h2>
    <p style={{ fontSize: "14px", marginBottom: "10px" }}>
      Vous avez reçu un nouveau message depuis votre portfolio.
    </p>

    <div
      style={{
        backgroundColor: "#fff",
        padding: "16px",
        borderRadius: "6px",
        border: "1px solid #eee",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      <p>
        <strong>👤 Nom :</strong> {name}
      </p>
      <p>
        <strong>📧 Email :</strong> {mail}
      </p>
      <p>
        <strong>📝 Message :</strong>
      </p>
      <p
        style={{
          whiteSpace: "pre-wrap",
          backgroundColor: "#f3f3f3",
          padding: "10px",
          borderRadius: "4px",
          marginTop: "4px",
        }}
      >
        {content}
      </p>
    </div>

    <p style={{ fontSize: "12px", marginTop: "20px", color: "#777" }}>
      Cet email vous a été envoyé automatiquement depuis votre portfolio.
    </p>
  </div>
);
