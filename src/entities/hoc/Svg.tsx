import { FC } from "react";

interface SvgProps {
  icon: string;
  className?: string;
}

const WrapSvg: FC<SvgProps> = ({ ...props }) => {
  const { icon, className } = props;

  return (
    <svg className={className ?? ""}>
      <use xlinkHref={`#${icon}`} />
    </svg>
  );
};
export default WrapSvg;
