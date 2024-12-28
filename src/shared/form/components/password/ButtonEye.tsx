import IconEye from "@/shared/assets/images/sprite/eye.svg";
import IconEyeOff from "@/shared/assets/images/sprite/eye-off.svg";
import { FC } from "react";
import WrapSvg from "@/entities/hoc/Svg";
import style from "./Style.module.css";
import clsx from "clsx";

interface IButtonEye {
  isTypeText: boolean;
  setType: (type: boolean) => void;
}

const ButtonEye: FC<IButtonEye> = ({ isTypeText, setType }) => {
  return (
    <button
      type="button"
      onClick={() => setType(!isTypeText)}
      className={clsx(
        style.button,
        "absolute right-0 top-0 aspect-square h-full p-1",
      )}
    >
      {isTypeText && <WrapSvg icon={IconEye} className="stroke-[#718EBF]" />}
      {!isTypeText && (
        <WrapSvg icon={IconEyeOff} className="stroke-[#718EBF]" />
      )}
    </button>
  );
};

export default ButtonEye;
