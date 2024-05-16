import { ICard } from "../../../lib/types"
import './index.scss'


const Card: React.FC<ICard> = ({ icon, figure, title, ...props }) => {
    return (
        <div className="card-container">
            <div className="icon">
                <img src={icon} alt="" />
            </div>
            <div className="title">
                <p>{title}</p>
            </div>
            <div className="figure">
                {figure}
            </div>
        </div>
    )
}

export default Card