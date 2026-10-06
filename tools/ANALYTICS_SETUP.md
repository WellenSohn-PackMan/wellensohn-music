# Website analytics — prepared, not active

Provider: GoatCounter. No account, site code, or measurement has been provisioned yet.
Do not merge this branch until the owner confirms their account and site code.

## Activate

1. Owner manually signs up at https://www.goatcounter.com/signup (required by provider terms).
2. Suggested account name: `wellensohn-music`, if available. Site domain: `wellensohn-packman.github.io`.
3. Confirm the actual dashboard URL. Only its public site code is needed for the integration; never commit credentials or API tokens.
4. Keep the dashboard private and individual pageview collection disabled. Retain sessions for repeat-view deduplication. Restrict allowed domains to `wellensohn-packman.github.io` in the site settings.
5. Replace the empty `siteCode` in `analytics.js` with the confirmed code. Review the data-collection settings and keep the visitor notice accurate.
6. Merge into `brain`, wait for GitHub Pages deployment, open the live homepage and one artwork, and confirm they appear in the authenticated dashboard. Record these as setup visits; don't fabricate traffic or silently bypass visitor privacy preferences.
7. Give Patrick his dashboard link. Collection starts after activation; previous website visits cannot be reconstructed.

## Scope and behavior

- All five HTML pages load the shared script once. New pages must include it too.
- The loader is inert without a site code, off the production host/path, or when Do Not Track / Global Privacy Control is enabled.
- Only page paths and titles are sent; query strings and fragments are excluded. External referrers are reduced to their origin; internal referrers are omitted. No click events, sound playback events, or cross-page identities are added by this integration.
- GoatCounter's standard collection can include browser, operating system, country, language, and screen size; these are configurable in the service. Its visitor count is an estimate, not identification of people. Sessions deduplicate repeat visits to a page for up to eight hours.
- Missing referrers may mean direct traffic or an app/browser that hides the source. Ad blockers and privacy preferences can reduce counts.
- Source documentation: https://www.goatcounter.com/help/start, https://www.goatcounter.com/help/js, https://www.goatcounter.com/help/privacy, https://www.goatcounter.com/help/sessions, https://www.goatcounter.com/help/terms.
