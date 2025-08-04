import React from "react";
import { certificates } from "@/src/constants/certificates.constants";

function CertificatesPage() {
  return (
    <section>
      <h1>Certificates</h1>
      <div className="cert-container">
        {certificates.map((certificate) => (
          <div key={certificate.id} className="cert-card">
            <h3
              className="border-b-8"
              style={{ borderColor: certificate.borderColor }}
            >
              {certificate.title}
            </h3>
            <p className="text-sm">Issued By: {certificate.issuer}</p>
            <p className="text-xs">Credential ID: {certificate.credentialId}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CertificatesPage;
