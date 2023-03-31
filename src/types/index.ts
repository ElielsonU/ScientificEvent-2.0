type ItemsProps = "flex-end" | "flex-start" | "center" |  "stretch";

type BreakPointsProps = {
    lg?: BreakPointsValuesProps;
    md?: BreakPointsValuesProps;
    sm?: BreakPointsValuesProps;
    xs?: BreakPointsValuesProps;
}
type BreakPointsValuesProps = { width: number; height: number; }

type ContentProps = "space-between" | "space-around" | ItemsProps;
type FlexDirectionProps = "row" | "row-reverse" | "column" | "column-reverse";
type DisplayProps = "flex" | "grid";
type LinearGradientProps = {
    degrees?: string;
    c1?: string;
    c2?: string;
}

export type { 
    BreakPointsProps,
    BreakPointsValuesProps,
    ContentProps, 
    DisplayProps,
    FlexDirectionProps,
    LinearGradientProps, 
    ItemsProps, 
}