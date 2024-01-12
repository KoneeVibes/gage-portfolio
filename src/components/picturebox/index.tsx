import { GagePhoto } from "../../assets"
import { PictureBox } from "./styled"

export const Picture: React.FC<{}> = () => {
    return (
        <PictureBox>
            <GagePhoto />
        </PictureBox>
    )
}