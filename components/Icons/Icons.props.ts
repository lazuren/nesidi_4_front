import { DetailedHTMLProps, SVGAttributes } from "react";

export interface IconsProps extends DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement> {
    icon: "shopping-cart" | "map-marker-alt" | "heart";
    color?: string;
    size?: string;
}
