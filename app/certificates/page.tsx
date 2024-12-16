import React from "react";

function CertificatesPage() {
  return (
    <section>
      <h1>Certificates</h1>
      <div className="cert-container">
        <div className="cert-card ">
          <h3 className="text-customAccent mb-4">
            Mastering Next.js 13 with TypeScript
          </h3>
          <p className="text-sm">Issued By: Code With Mosh</p>
          <p className="text-xs">Credential ID: cert_f6714mxb</p>
        </div>
        <div className="cert-card ">
          <h3 className="text-customAccent mb-4">
            React 18 for Beginners with TypeScript
          </h3>
          <p className="text-sm">Issued By: Code With Mosh</p>
          <p className="text-xs">Credential ID: cert_k7gn3dfl</p>
        </div>
        <div className="cert-card">
          <h3 className="text-customAccent mb-4">
            Ultimate JavaScript Part 1: Fundamentals
          </h3>
          <p className="text-sm">Issued By: Code With Mosh</p>
          <p className="text-xs">Credential ID: cert_pp71231f</p>
        </div>
        <div className="cert-card ">
          <h3 className="text-customAccent mb-4">
            Kreativstorm Hands-on Training Program
          </h3>
          <p className="text-sm">Issued By: Kreativstorm</p>
          <p className="text-xs">
            Credential ID: c249c7ff-3798-4d27-8644-c528acecb224
          </p>
        </div>
        <div className="cert-card">
          <h3 className="text-customAccent mb-4">Intro to Web Development</h3>
          <p className="text-sm">Issued By: CodePath</p>
          <p className="text-xs">Credential ID: 143884</p>
        </div>
        <div className="cert-card">
          <h3 className="text-customAccent mb-4">
            The Ultimate HTML5 & CSS3 Series: Part 2
          </h3>
          <p className="text-sm">Issued By: Code With Mosh</p>
          <p className="text-xs">Credential ID: cert_df5ml1b2</p>
        </div>
        <div className="cert-card">
          <h3 className="text-customAccent mb-4">
            The Ultimate HTML5 & CSS3 Series: Part 1
          </h3>
          <p className="text-sm">Issued By: Code With Mosh</p>
          <p className="text-xs">Credential ID: cert_bxzq8g48</p>
        </div>
      </div>
    </section>
  );
}

export default CertificatesPage;
