import type { Metadata } from "next";

import PolicyPage from "../components/PolicyPage";

export const metadata: Metadata = { title: "Security" };

export default function SecurityPage() {
  return <PolicyPage title="Security" intro="Our approach to protecting the availability, integrity, and confidentiality of IGYAN AI services.">
    <section><h2 className="font-headline-md text-headline-md text-trust-blue dark:text-white">Security practices</h2><p className="mt-3">We use appropriate technical and organizational safeguards designed to protect our services and the information entrusted to us. Access is limited to authorized people and systems.</p></section>
    <section><h2 className="font-headline-md text-headline-md text-trust-blue dark:text-white">Responsible disclosure</h2><p className="mt-3">If you believe you have found a security issue, please contact us with enough detail to reproduce it. We will review reports responsibly and work to address confirmed issues.</p></section>
    <section><h2 className="font-headline-md text-headline-md text-trust-blue dark:text-white">Shared responsibility</h2><p className="mt-3">Institutions and users should protect their credentials, use strong access controls, and report suspected unauthorized activity promptly.</p></section>
  </PolicyPage>;
}
