import * as S from "./index.style";
import {fDateTimeSuffix} from '../../utils/formatTime'

interface CardProps {
  card: any,
}

const CardWidget = ({ card }: CardProps) => {
  console.log(card)
  return (
    <S.CardStyled hoverable title={card.question} extra={<a href={card.url}>Detail</a>}>
      <div className="date">
          <span>Date :</span>
          <span>{fDateTimeSuffix(card.published_at)}</span>
      </div>
    </S.CardStyled>
  );
};

export default CardWidget;
