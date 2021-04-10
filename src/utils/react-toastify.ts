import { toast, cssTransition } from 'react-toastify';

export const configureReactToastify = (): void => {
  const transition = cssTransition({
    enter: 'custom__toast__animate__bounceIn',
    exit: 'custom__toast__animate__bounceOut'
  });

  toast.configure({
    transition,
    autoClose: 1250,
    draggable: true,
    newestOnTop: true,
    position: 'top-center'
  });
};

export const clearAllToasts = (): void => toast?.dismiss();