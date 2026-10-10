import { site } from "@/data/site";

export default function Brand() {
  return (
    <a className="brand" href="#home">
      <span className="brand-main">{site.brand.main}</span>
      <span className="brand-sub">{site.brand.sub}</span>
    </a>
  );
}
