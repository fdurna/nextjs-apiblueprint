import * as S from "./index.style";
import { useRouter } from "next/navigation";

// antd
import {  Button } from "antd";

const Header = () => {
  const router = useRouter();
  return (
    <S.HeaderStyled>
      <div className="container">
        <div className="logo-and-button">
          <div className="logo">
            <h1>logo</h1>
          </div>
        </div>
      </div>
    </S.HeaderStyled>
  );
};

export default Header;
