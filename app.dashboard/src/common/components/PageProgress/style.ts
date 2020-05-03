import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: transparent;
`;

export const Bar = styled.div<{ progress: number; fading: boolean }>`
    width: ${(props) => props.progress || '0'}%;
    height: ${(props) => (!props.fading ? '0.3rem' : '0')};
    background-color: #1f9668;
    transition: width 300ms ease, height 700ms ease;
`;