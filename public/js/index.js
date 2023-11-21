$(document).ready(function () {
  $(".cardOption").on("click", function () {
    const id = $(this).attr("id");
    fetchData(id);
  });

  async function fetchData(id) {
    try {
      const response = await fetch(`/section/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.text();
      
      $("#section").html(data);
    } catch (error) {
      console.error(error);
    }
  }
});
