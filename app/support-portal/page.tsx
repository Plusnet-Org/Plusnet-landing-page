import type { Metadata } from "next";
import Link from "next/link";
import DarkHero from "@/components/DarkHero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Help & Support" };

export default function SupportPortal() {
  return (
    <>
      <DarkHero
        label="Selfcare"
        badge="24/7"
        lines={[
          { text: "Customer" },
          { text: "support portal", red: true, indent: "md:pl-[8%]", mark: true },
        ]}
        intro="Everything you need to manage your Plusnet service — in the customer portal or from our support team."
      />

      <section className="bg-black pb-16 text-white md:pb-24">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-light text-white/70">[Need help now?]</p>
            <h2 className="mt-4 text-3xl font-extrabold uppercase leading-[1] tracking-tight md:text-4xl">
              Our support team
              <br />
              <span className="text-brand">is always on</span>
            </h2>
            <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-white/75 md:text-base">
              Unrivalled phone and online support from our dedicated 24/7
              Support Team – whenever you need it.
            </p>
            <ul className="mt-8 space-y-4 text-lg font-light">
              <li>
                <a href={`tel:${site.phone}`} className="font-semibold hover:text-brand">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-brand">
                  {site.email}
                </a>
              </li>
            </ul>
            <Link
              href="/frequently-asked-questions"
              className="mt-8 inline-block text-sm font-medium underline underline-offset-4 hover:text-brand"
            >
              Read the FAQ
            </Link>
          </div>
          <div className="flex flex-col rounded-xl bg-brand-dark p-8 md:p-10">
            <p className="text-xs font-light text-white/70">[Customer portal]</p>
            <h2 className="mt-4 text-3xl font-extrabold uppercase leading-[1] tracking-tight md:text-4xl">
              Manage your
              <br />
              account online
            </h2>
            <p className="mt-5 max-w-md flex-1 text-sm font-light leading-relaxed text-white/85 md:text-base">
              Log in to the Plusnet customer portal to view your subscription,
              renew your package, raise a support ticket and update your
              details.
            </p>
            <a
              href={site.portal}
              className="mt-8 self-start rounded-md bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-white"
            >
              Open the portal
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
