import styled, { css, keyframes } from 'styled-components';

const disappear = keyframes`
  from {
    opacity: 1;
	transform: translate(0, 0);
  }

  to {
	opacity: 0;
	height: 0;
	transform: translate(0, -20px);
  }
`;

export const NotificationsRoot = styled.div`
    position: fixed;
    top: 5rem;
    right: 0;
    z-index: 1300;
    ${({ theme }) =>
        theme.components &&
        theme.components.Notifications &&
        theme.components.Notifications.root}
`;

export const MessageWrap = styled.div<{ closing: boolean }>`
    ${({ closing, theme }) =>
        closing
            ? css`
                  animation: ${disappear} 0.5s ease;
                  animation-fill-mode: forwards;
                  overflow: hidden;
                  ${theme.components &&
                  theme.components.Notifications &&
                  theme.components.Notifications.messageWrap}
              `
            : ''}
`;
