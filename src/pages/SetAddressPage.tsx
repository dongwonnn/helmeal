import React, { useState } from 'react';
import PostCode from '../components/Address/PostCode';
import Header from '../components/Common/Header';
import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import { useHistory } from 'react-router-dom';

const SetAddressPage = () => {
  const history = useHistory();
  const [showPostCode, setShowPostCode] = useState(true);

  return (
    <>
      {showPostCode ? (
        <>
          <Header pathname="/address">
            <LeftIcon />
            <h3>배송지 입력</h3>
            <p></p>
          </Header>
          <PostCode setShowPostCode={setShowPostCode} />
        </>
      ) : (
        <>
          <Header pathname="/address">
            <LeftIcon />
            <h3>상세주소 입력</h3>
            <p></p>
          </Header>
        </>
      )}
    </>
  );
};

export default SetAddressPage;

// 상세주소 디자인 나온 후에
{
  /* <>
{showPostCode ? (
  <>
    <Header pathname="/address">
      <LeftIcon />
      <h3>배송지 입력</h3>
      <p></p>
    </Header>
    <PostCode setShowPostCode={setShowPostCode} />
  </>
) : (
  <>
    <Header pathname="/address">
      <LeftIcon />
      <h3>상세주소 입력</h3>
      <p></p>
    </Header>
  </>
)}
</> */
}
