import { joinSegments, pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)

  // logo's path
  const logoPath = joinSegments(baseDir, "static/rm_logo.png")

  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img 
          src={logoPath} 
          alt={title} 
          style={{ 
            display: "block", 
            width: "240px", // Buradan genişliği ayarlayabilirsiniz
            height: "auto",
            marginBottom: "0.5rem" 
          }} 
        />
        <span>{title}</span>
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
