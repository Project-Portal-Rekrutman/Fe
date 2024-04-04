const application = () => {
    const listApplication = () => {
    axios.get("http://localhost:8080/api/applies")
      .then((response) => {
        console.log(response.data)
        setDemo(response.data.data);
      })
      .catch((error) => {

        console.log(error.response);
      });
  }
}