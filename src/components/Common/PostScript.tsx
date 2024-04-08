import { Link } from 'react-router-dom';


type PsProps = Partial<{
  normalText: string;
  icon: string;
  linkText: string;
  linkColor: string;
  href: string;
  to: string;
  className: string;
  color: string;
  underline: boolean;
}>;

type LinkPropsConstraint = {
  linkText: string;
} & (
  { href: string } | { to: string }
);

type ExclusiveLinkProps = LinkPropsConstraint & {
  // Ensure either href or to, but not both, are declared
  _exclusive?: never;
} | PsProps;

type PostScriptProps = ExclusiveLinkProps & PsProps;



function PostScript({
  href,
  className,
  linkColor,
  linkText,
  normalText,
  icon,
  color = "text-neutral-7",
  underline = false,
  to,
}: PostScriptProps) {

return (
  <div className={`${color} ${className}`}>
    <p className="w-full flex items-center gap-2 text-xs">
      <span>{normalText && normalText}</span>
      {linkText && (
        <>
          {to ? ( // Use Link if 'to' is provided
            <Link to={to} className={`${linkColor} ${underline ? "underline" : ""} flex gap-2`}>
              {linkText}
              <span className="flex items-center">
                <img src={icon} alt="" width="20px" />
              </span>
            </Link>
          ) : (
            <a href={href} className={`${linkColor} ${underline ? "underline" : ""} flex gap-2`}>
              {linkText}
              <span className="flex items-center">
                <img src={icon} alt="" width="20px" />
              </span>
            </a>
          )}
        </>
      )}
    </p>
  </div>
);

  
}

export default PostScript;
