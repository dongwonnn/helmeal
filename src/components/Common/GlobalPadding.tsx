import React, { FC } from 'react';
import styled from 'styled-components';

const GlobalPddingContainer = styled.div`
    padding: 0 24px;
`

const GlobalPadding: FC = ({children}) => {
    return (
        <GlobalPddingContainer>
            {children}
        </GlobalPddingContainer>
    );
};

export default GlobalPadding;