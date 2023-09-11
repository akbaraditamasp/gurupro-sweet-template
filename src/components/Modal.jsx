import { Fragment, useState } from "react";
import { FaTimes } from "react-icons/fa";

export const Modal = ({ children, title, control }) => {
  return (
    <Fragment>
      {control.isOpen && (
        <div className="fixed z-30 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"></div>
      )}
      <div
        className={
          "fixed z-30 top-0 left-0 w-full h-screen overflow-y-auto overflow-x-hidden flex items-start justify-center p-5 lg:py-16 transition duration-500 transform " +
          (control.isOpen ? "translate-y-0" : "-translate-y-full")
        }
      >
        <div className="bg-white rounded w-full lg:w-2/3 border relative">
          <div className="h-16 lg:h-20 flex items-center shadow">
            <div className="flex-1 font-bold text-lg p-5 lg:p-8">{title}</div>
            <button
              type="button"
              onClick={() => {
                control.close();
              }}
              className="p-5 lg:px-8 text-gray-500"
            >
              <FaTimes />
            </button>
          </div>
          <div className="p-5 lg:p-8">{children}</div>
        </div>
      </div>
    </Fragment>
  );
};

export const useModal = ({ initialState = {}, initialOpen = false } = {}) => {
  const [state, setState] = useState(initialState);
  const [open, setOpen] = useState(initialOpen);

  return {
    state,
    control: {
      open: (state = initialState) => {
        setState(state);
        setOpen(true);
      },
      close: () => {
        setState({});
        setOpen(false);
      },
      isOpen: open,
    },
  };
};
