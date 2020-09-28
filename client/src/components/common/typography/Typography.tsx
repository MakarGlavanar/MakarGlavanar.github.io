import * as React from "react";
import { TypographyPreset } from "@types/typography";
import { buildClass } from "@utils/buildClass";

const PREFIX = "t";

export interface ITypographyProps {
  preset: TypographyPreset;
  tag: keyof React.ReactHTML;
  className?: string;
}

export const Typography: React.FC<ITypographyProps> = ({
  preset,
  tag,
  className: classNameFromProps,
}) => {
  const className = buildClass(`${PREFIX}-${preset}`, classNameFromProps);

  return React.createElement(tag, {
    className,
  });
};

Typography.displayName = "Typography";
