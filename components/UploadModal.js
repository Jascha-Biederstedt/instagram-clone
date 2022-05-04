import React from 'react';
import { useRecoilState } from 'recoil';

import { modalState } from '../atom/modalAtom';

const UploadModal = () => {
  const [open, setOpen] = useRecoilState(modalState);

  return <div>{open && <h1>OpenModal</h1>}</div>;
};

export default UploadModal;
