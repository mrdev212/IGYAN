import type { Metadata } from "next";

import PolicyPage from "../components/PolicyPage";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return <PolicyPage title="Terms of Service" intro="The terms that govern use of IGYAN AI’s website and platform.">
    <section><h2 className="font-headline-md text-headline-md text-trust-blue dark:text-white">Using our services</h2><p className="mt-3">Use IGYAN AI only for lawful educational and institutional purposes. You are responsible for ensuring that the information you submit is accurate and that access to your account is kept secure.</p></section>
    <section><h2 className="font-headline-md text-headline-md text-trust-blue dark:text-white">Institutional access</h2><p className="mt-3">School and institution administrators are responsible for authorizing their users and for ensuring their use of the platform complies with applicable policies and laws.</p></section>
    <section><h2 className="font-headline-md text-headline-md text-trust-blue dark:text-white">Changes to these terms</h2><p className="mt-3">We may update these terms as the platform evolves. Continued use after an update means you accept the revised terms.</p></section>
  </PolicyPage>;
}
