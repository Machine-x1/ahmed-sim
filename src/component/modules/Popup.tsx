import { useDispatch } from 'react-redux';

import { showPopup } from '@/apps/redux/slice/popupSlice';
import withPopup from '@/HOC/withPopup';

const Popups = () => {
  const dispatch = useDispatch();
  const handleLoginClick = () => {
    dispatch(showPopup(<div>Popup Conent</div>));
  };
  return (
    <div>
      <button type="button" onClick={handleLoginClick}>
        Open Popup
      </button>
    </div>
  );
};

export default withPopup(Popups);
