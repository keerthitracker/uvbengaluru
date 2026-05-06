import type { ReactNode } from "react";

export default function SeoH1({ children }: { children: ReactNode }) {
  return <h1 className="sr-only">{children}</h1>;
}
