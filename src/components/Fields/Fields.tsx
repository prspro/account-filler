import { FC } from "react";
import FieldList from "../FieldList/FieldList";
import { LineList, LineItem } from "../LineList/LineList";
import CustomButton from "../CustomButton/CustomButton";
import SVGicon from "../SVGicon/SVGicon";
///
import useFields from "../Fields/useFields";
import classNames from "classnames";
///
import "./fields.sass";

interface IFieldsProps {
  className?: string;
}

const Fields: FC<IFieldsProps> = ({ className }) => {
  const { handleDownloadData, handleRefreshAllData } = useFields();

  return (
    <div className={classNames("fields", className)}>
      <FieldList className="fields__list" />
      <LineList className="fields__btns">
        <LineItem>
          <CustomButton onClick={handleDownloadData}>
            <span>Download</span>
            <SVGicon id={"download"} />
          </CustomButton>
        </LineItem>
        <LineItem>
          <CustomButton onClick={handleRefreshAllData}>
            <span>Refresh all</span>
            <SVGicon id={"refresh"} />
          </CustomButton>
        </LineItem>
      </LineList>
    </div>
  );
};

export default Fields;
