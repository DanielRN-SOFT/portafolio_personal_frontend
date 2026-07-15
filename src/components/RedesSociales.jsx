/**
 * Limpia una URL para mostrarla de forma legible:
 * - quita protocolo y "www."
 * - quita la barra final
 * - si el último segmento termina en un sufijo numérico largo
 *   (típico de LinkedIn, ej: "-658397376"), lo recorta
 */
const limpiarUrl = (url = "") => {
  let limpia = url
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/+$/, "");

  const segmentos = limpia.split("/");
  const ultimo = segmentos[segmentos.length - 1];
  const sinSufijoNumerico = ultimo.replace(/-\d{4,}$/, "");
  segmentos[segmentos.length - 1] = sinSufijoNumerico;

  return segmentos.join("/");
};

const RedesSociales = ({ titulo, ClasesIcono, enlace, enlaceEmail = false }) => {
  const href = enlaceEmail ? `mailto:${enlace}` : enlace;
  const textoVisible = enlaceEmail ? enlace : limpiarUrl(enlace);

  return (
    <a
      href={href}
      target={enlaceEmail ? undefined : "_blank"}
      rel={enlaceEmail ? undefined : "noopener noreferrer"}
      className="group flex items-center gap-4 rounded-lg border border-neutral-content/10 bg-black/20 px-4 py-3 transition-colors hover:border-primary/40 hover:bg-primary/5"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
        <i className={ClasesIcono}></i>
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-mono text-neutral-content/40">
          {titulo}
        </span>
        <span className="block truncate font-mono text-sm text-neutral-content/80 group-hover:text-primary transition-colors">
          {textoVisible}
        </span>
      </span>
    </a>
  );
};

export default RedesSociales;