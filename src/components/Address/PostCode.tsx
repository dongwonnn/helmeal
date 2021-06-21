import React from 'react';
import { FC } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { useDispatch } from 'react-redux';

import { setMainAddress } from '../../reducers/address';
interface PostCodeProps {
  setShowPostCode: (e: boolean) => void;
}

const Postcode: FC<PostCodeProps> = ({ setShowPostCode }) => {
  const dispatch = useDispatch();
  const vh = window.innerHeight;

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';

      dispatch(setMainAddress(fullAddress));
      setShowPostCode(false);
    }
  };

  const postCodeStyle = {
    top: '0%',
    width: '100%',
    height: '100vh',
  };

  return (
    <div>
      <DaumPostcode onComplete={handleComplete} style={postCodeStyle} />
    </div>
  );
};

export default Postcode;
