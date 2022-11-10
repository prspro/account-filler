// import useSVGicon from "./useSVGicon";
import sprite from "../../img/sprite.svg";
import classNames from "classnames";

interface ISVGIconArgs {
  className?: string;
  id: string;
}

const SVGicon = ({ className, id }: ISVGIconArgs) => {

  return (
    <svg className={classNames("svg-icon", id, className)}>
      <use href={sprite + "#" + id} />
    </svg>
  );
};

export default SVGicon;
