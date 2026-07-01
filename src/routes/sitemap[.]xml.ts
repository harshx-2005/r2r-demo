import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { properties } from "@/lib/properties";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          { p: "/", pr: "1.0", cf: "weekly" as const },
          { p: "/about", pr: "0.7", cf: "monthly" as const },
          { p: "/services", pr: "0.8", cf: "monthly" as const },
          { p: "/properties", pr: "0.9", cf: "daily" as const },
          { p: "/landlords", pr: "0.8", cf: "monthly" as const },
          { p: "/tenants", pr: "0.8", cf: "monthly" as const },
          { p: "/valuation", pr: "0.8", cf: "monthly" as const },
          { p: "/faq", pr: "0.5", cf: "monthly" as const },
          { p: "/contact", pr: "0.7", cf: "monthly" as const },
          { p: "/privacy", pr: "0.3", cf: "yearly" as const },
          { p: "/terms", pr: "0.3", cf: "yearly" as const },
          ...properties.map((pr) => ({ p: `/properties/${pr.id}`, pr: "0.7", cf: "weekly" as const })),
        ];
        const urls = paths
          .map(({ p, pr, cf }) =>
            `  <url>\n    <loc>${BASE_URL}${p}</loc>\n    <changefreq>${cf}</changefreq>\n    <priority>${pr}</priority>\n  </url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
