import type { ReactNode } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { hidePopup, setPopupName } from '@/apps/redux/slice/popupSlice';
import type { RootState } from '@/apps/redux/store';
import Container from '@/component/elements/Container';

export interface PopupProps {
  showPopup?: (content: ReactNode) => void;
}

const withPopup = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const Popup = (props: P & PopupProps) => {
    const dispatch = useDispatch();
    const { isVisible, content } = useSelector(
      (state: RootState) => state.popup
    );

    const handlePopupClose = () => {
      dispatch(hidePopup());
      dispatch(setPopupName('Auth'));
    };

    return (
      <>
        {isVisible && (
          <div
            onClick={() => handlePopupClose()}
            role="presentation"
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50"
          >
            <Container
              onClick={(e) => e.stopPropagation()}
              className="relative h-[20rem]  w-fit min-w-[30rem] rounded bg-white"
            >
              <Container
                onClick={() => {
                  handlePopupClose();
                }}
                flexDirection="row"
                className="mx-4 mt-2 flex justify-end  "
              >
                <Container className="flex  h-8 w-8 cursor-pointer items-center justify-center  bg-white">
                  <AiOutlineClose className="transition duration-150 hover:rotate-180 hover:scale-110" />
                </Container>
              </Container>
              <Container
                bgColor=""
                flexDirection="column"
                className="flex  h-full  items-center justify-center"
              >
                {content}
              </Container>
            </Container>
          </div>
        )}
        <WrappedComponent {...props} />
      </>
    );
  };

  return Popup;
};

export default withPopup;
