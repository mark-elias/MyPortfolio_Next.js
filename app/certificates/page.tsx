import React from "react";

function CertificatesPage() {
  return (
    <section>
      <h1>Certificates</h1>
      <div className="cert-container">
        <div className="cert-card bg-black text-white shadow-black/50">
          <h3>Mastering Next.js 13 with TypeScript</h3>
          <p>Issued By: Code With Mosh</p>
          <p>Credential ID: cert_f6714mxb</p>
        </div>
        <div className="cert-card bg-[#61DAFB] shadow-[#61DAFB]/50">
          <h3>React 18 for Beginners with TypeScript</h3>
          <p>Issued By: Code With Mosh</p>
          <p>Credential ID: cert_k7gn3dfl</p>
        </div>
        <div className="cert-card bg-[#F7DF1E] shadow-[#F7DF1E]/50">
          <h3>Ultimate JavaScript Part 1: Fundamentals</h3>
          <p>Issued By: Code With Mosh</p>
          <p>Credential ID: cert_pp71231f</p>
        </div>
        <div className="cert-card bg-purple-500 shadow-purple-500/50 text-white">
          <h3>Kreativstorm Hands-on Training Program</h3>
          <p>Issued By: Kreativstorm</p>
          <p>Credential ID: c249c7ff-3798-4d27-8644-c528acecb224</p>
        </div>
        <div className="cert-card bg-green-400 shadow-green-400/50 ">
          <h3>Intro to Web Development</h3>
          <p>Issued By: CodePath</p>
          <p>Credential ID: 143884</p>
        </div>
        <div className="cert-card bg-blue-500 text-white shadow-blue-500/50">
          <h3>The Ultimate HTML5 & CSS3 Series: Part 2</h3>
          <p>Issued By: Code With Mosh</p>
          <p>Credential ID: cert_df5ml1b2</p>
        </div>
        <div className="cert-card bg-[#E34F26] text-white shadow-[#E34F26]/50">
          <h3>The Ultimate HTML5 & CSS3 Series: Part 1</h3>
          <p>Issued By: Code With Mosh</p>
          <p>Credential ID: cert_bxzq8g48</p>
        </div>
      </div>
    </section>
  );
}

export default CertificatesPage;
