"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerCompany, footerNav, footerProjects } from "@/lib/nav";
import { isPrivateRoute } from "@/lib/preferred-source";
import { PREFERRED_SOURCE, site } from "@/lib/site";
import { Facebook, GoogleG, Instagram, LinkedIn, Reddit, Send, TikTok, YouTube } from "@/components/icons";

export default function Footer() {
  const pathname = usePathname();
  const showPreferredSource = !isPrivateRoute(pathname);

  return (
    <footer className="site-footer mc-footer">
      <div className="wrap mcf-grid">
        <div className="mcf-brand">
          <div className="mcf-head">
            {/* eslint-disable-next-line @next/next/no-img-element -- fixed-size brand mark */}
            <img className="mcf-logo" src="/assets/flomadlogo.svg" alt={`${site.name} logo`} />
            <div className="mcf-title">
              <strong>{site.name}</strong>
              <span>| by {site.parent}</span>
            </div>
          </div>
          <p className="mcf-desc">
            Transforming your wellbeing, one insight at a time. All your AI in one app, powered by
            FloBrain, to boost productivity, wellness, and lifestyle.
          </p>

          <h4 className="mcf-h">Newsletter</h4>
          <p className="mcf-sub">Receive the newest FloLabs updates at:</p>
          {/* No backend in the original build either — the form is presentational. */}
          <form className="mcf-news" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email..." aria-label="Email address" />
            <button type="submit" aria-label="Subscribe">
              <Send />
            </button>
          </form>

          <h4 className="mcf-h">Social Media</h4>
          <div className="mcf-social">
            <a href={site.social.youtube} target="_blank" rel="noopener" aria-label="YouTube">
              <YouTube />
            </a>
            <a href={site.social.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
              <LinkedIn />
            </a>
            <a href={site.social.facebook} target="_blank" rel="noopener" aria-label="Facebook">
              <Facebook />
            </a>
            <a href={site.social.instagram} target="_blank" rel="noopener" aria-label="Instagram">
              <Instagram />
            </a>
            <a href={site.social.tiktok} target="_blank" rel="noopener" aria-label="TikTok">
              <TikTok />
            </a>
            <a href={site.social.reddit} target="_blank" rel="noopener" aria-label="Reddit">
              <Reddit />
            </a>
          </div>

          {showPreferredSource ? (
            <a
              className="mcf-ps"
              href={PREFERRED_SOURCE.deeplink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoogleG />
              Add as preferred source on Google
            </a>
          ) : null}
        </div>

        <nav className="mcf-col" aria-label="Footer navigation">
          <h4 className="mcf-h">Navigation</h4>
          {footerNav.map((l) => (
            <Link href={l.href} key={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>

        <nav className="mcf-col" aria-label="FloLabs projects">
          <h4 className="mcf-h">Projects</h4>
          {footerProjects.map((l) => (
            <a href={l.href} key={l.label} target="_blank" rel="noopener">
              {l.label}
            </a>
          ))}
        </nav>

        <nav className="mcf-col" aria-label="Company">
          <h4 className="mcf-h">Company</h4>
          {footerCompany.map((l) => (
            <a href={l.href} key={l.label} target="_blank" rel="noopener">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mcf-bar">Live Long and Prosper</div>
    </footer>
  );
}
