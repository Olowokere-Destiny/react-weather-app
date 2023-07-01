import Swal from "sweetalert2";

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
const formattedDate = `${year}-${month}-${day}`;
const Today = formattedDate;

let nextObj = new Date(Today);
nextObj.setDate(nextObj.getDate() + 1);
const next = nextObj.toISOString().split("T")[0];

let nextObj2 = new Date(Today);
nextObj2.setDate(nextObj2.getDate() + 2);
const next2 = nextObj2.toISOString().split("T")[0];

let nextObj3 = new Date(Today);
nextObj3.setDate(nextObj3.getDate() + 3);
const next3 = nextObj3.toISOString().split("T")[0];

function noInternet() {
  return Swal.fire({
    position: "top",
    icon: "error",
    title: "No Internet",
    showConfirmButton: false,
    timer: 3000,
  });
}

function noValidate() {
  return Swal.fire({
    position: "top",
    icon: "warning",
    title: "Please enter a valid name",
    showConfirmButton: false,
    timer: 3000,
  });
}

function addSuccess() {
  return Swal.fire({
    position: "top",
    icon: "success",
    title: "Location Saved!",
    showConfirmButton: false,
    timer: 3000,
  });
}
function showAlert() {
  Swal.fire({
    icon: "warning",
    title: 'Are you sure?',
    text: "Your data will be cleared",
    showCancelButton: true,
    confirmButtonText: 'OK',
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("saved_location")
    }
  })
}
export { Today, next, next2, next3, noInternet, noValidate, addSuccess, showAlert };
