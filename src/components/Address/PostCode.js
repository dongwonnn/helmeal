import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import { useDispatch } from 'react-redux';

import { setMainAddress, setDetailAddress } from '../../reducers/address';

const PostCode = ({ setShowPostCode }) => {
  const dispatch = useDispatch();

  const onCompletePost = (data) => {
    let fullAddr = data.address;
    let extraAddr = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddr += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddr +=
          extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
    }

    dispatch(setMainAddress(data.zonecode));
    dispatch(setDetailAddress(fullAddr));
    setShowPostCode(false);
  };

  const postCodeStyle = {
    display: 'block',
    position: 'relative',
    top: '0%',
    width: '100%',
    height: '100vh',
  };

  return <DaumPostcode style={postCodeStyle} onComplete={onCompletePost} />;
};

export default PostCode;
