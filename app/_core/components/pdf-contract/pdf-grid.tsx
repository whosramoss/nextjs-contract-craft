import { View } from "@react-pdf/renderer";
import { styles } from "./_config/style";

export const PdfGrid = ({ children }:{children:React.ReactNode}) => (
<View style={styles.grid}>{children}</View>
);

export const PdfGridItem = ({ width = '50%', children }:{width?:string, children:React.ReactNode}) => (
<View style={{ ...styles.gridItem, width }}>{children}</View>
);