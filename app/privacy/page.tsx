import type { Metadata } from "next";

import PolicyPage from "../components/PolicyPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return <PolicyPage title="Privacy Policy" intro="How IGYAN AI handles information submitted through this website and its services.">
    <section><h2 className="font-headline-md text-headline-md text-trust-blue dark:text-white">Information we collect</h2><p className="mt-3">We collect information you choose to provide, such as contact details and messages, as well as limited technical information needed to operate and improve our services.</p></section>
    <section><h2 className="font-headline-md text-headline-md text-trust-blue dark:text-white">How we use information</h2><p className="mt-3">We use information to respond to requests, provide and improve our services, maintain security, and meet legal obligations. We do not sell personal information.</p></section>
    <section><h2 className="font-headline-md text-headline-md text-trust-blue dark:text-white">Your choices</h2><p className="mt-3">You can contact us to request access, correction, or deletion of personal information, subject to applicable law and legitimate operational requirements.</p></section>
  </PolicyPage>;
}
