import Swal from "sweetalert2";

const useMessage = () => {

  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen(popup) {
      popup.onmouseenter = Swal.stopTimer;
      popup.onmouseleave = Swal.resumeTimer;
    }
  });


  const error = (error) => {
    const {data } = error.response;
    Toast.fire({
      icon: "warning",
      title: data.message 
    });
  }

  const success = (response) => {
    const { data } = response;
    Toast.fire({
      icon: "success",
      title: data.message
    });
  }

  const confirm = (title, text, action) => {
    Swal.fire({
      title,
      text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, sure!"
    }).then((result) => {
      if (result.isConfirmed) {
        action();
      }
    })
  }

  const confirmRemove = (action) => {
    confirm("Are you sure?", "You won't be able to revert this!", action)
  }

  return {success, error, confirm, confirmRemove}
}

export default useMessage;