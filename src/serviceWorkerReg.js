function register() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./serviceWorkerReg.js")
        .then((reg) => console.log("Success: ", reg))
        .catch((err) => console.log("Failure: ", err));
    });
  }
}
export default register