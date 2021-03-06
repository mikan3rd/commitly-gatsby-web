import { Link } from "gatsby";
import React from "react";
import { Dropdown, Icon, Image } from "semantic-ui-react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { useAuth } from "../../hooks/useAuth";

export const Header: React.FC = () => {
  const { login, logout } = useAuth();
  const { user, userDoc } = useSelector((state) => state.auth);
  return (
    <Wrapper>
      <LogoLink to="/">
        <LogoImage src="/logo_header.png" />
      </LogoLink>

      <Dropdown icon={<BarIcon name="bars" size="big" />}>
        <Dropdown.Menu direction="left">
          {user && userDoc ? (
            <>
              <Dropdown.Item text="トップ" icon="home" as={Link} to="/" />
              <Dropdown.Item text="プロフィール" icon="user" as={Link} to={`/profile/${userDoc.github.username}`} />
              <Dropdown.Item text="設定" icon="setting" as={Link} to="/setting" />
              <Dropdown.Item text="ログアウト" icon="sign-out" onClick={() => logout()} />
            </>
          ) : (
            <>
              <Dropdown.Item text="ログイン" icon="sign-in" onClick={() => login()} />
              <Dropdown.Item text="トップ" icon="home" as={Link} to="/" />
            </>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #fdd101;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const LogoLink = styled(Link)`
  &&& {
    height: 80%;
    margin-left: 10px;
  }
`;

const LogoImage = styled(Image)`
  &&& {
    height: 100%;
  }
`;

const BarIcon = styled(Icon)`
  &&& {
    margin-right: 10px;
  }
`;
