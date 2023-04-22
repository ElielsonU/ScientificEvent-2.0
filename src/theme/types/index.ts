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
type LinearGradientProps = {
    degrees?: string;
    c1?: string;
    c2?: string;
}

type ArticlesProps = {
    content: string;
    id: string;
    title: string;
    user_id: string;
}

type InputProps = {
    backgroundColor?: string;
    borderColor?: string;
    borderRadius?: string;
    borderWidth?: string;
    fontSize?: string;
    fontWeight?: string;
    height?: string;
    padding?: string;
    textAlign?: "right" | "center" | "left";
    width?: string;
}

interface UserProps {
    username: string;
    password: string;
    admin: boolean;
    email: string;
    token: string;
}


export type { 
    ArticlesProps,
    BreakPointsProps,
    BreakPointsValuesProps,
    ContentProps, 
    FlexDirectionProps,
    LinearGradientProps, 
    InputProps,
    ItemsProps, 
    UserProps,
}