type LinkPropType = {
  href: string,
  children: React.ReactNode,
  className? : string
}
export default function Link({href, className, children, ...props}: LinkPropType) {
  const cn = className ?? "font-medium text-primary underline underline-offset-4";
  return <a href={href} className={cn} {...props}>
    {children}
  </a>
}