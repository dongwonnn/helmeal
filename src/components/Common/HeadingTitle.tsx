import React, { FC } from 'react';
import styled from 'styled-components';

const HeadingTitleConatiner = styled.h2`
      font-size: 1.75rem;
      font-weight: 700;
      line-height: 40px;
      color: #020202;
      margin-bottom: 16px;
`

const HeadingTitle:FC = ({children}) => {
    return (
        <HeadingTitleConatiner>
            {children}
        </HeadingTitleConatiner>
    );
};

export default HeadingTitle;