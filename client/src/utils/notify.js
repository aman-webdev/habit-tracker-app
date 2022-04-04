import { ToastContainer, toast } from "react-toastify";

export const notify = (text) =>
  toast.error(text, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,

    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const Toastify = () => {
  return <ToastContainer />;
};
