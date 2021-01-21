document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  // Put request to update "Devour" property
  const devourBtns = document.querySelectorAll(".devour");

  if (devourBtns) {
    devourBtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        const id = e.target.getAttribute("data-id");

        const devouredState = {
          devoured: true,
        };

        fetch(`/api/burgers/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(devouredState),
        }).then((response) => {
          if (response.ok) {
            location.reload("/");
          } else {
            console.log(response);
          }
        });
      });
    });
  }

  // POST Request to create a new Burger
  const createBurgerBtn = document.getElementById("create-form");

  if (createBurgerBtn) {
    createBurgerBtn.addEventListener("submit", (e) => {
      e.preventDefault();
      const newBurger = {
        name: document.getElementById("burger").value.trim(),
        devoured: false,
      };

      fetch("/api/burgers", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBurger),
      }).then(() => {
        document.getElementById("burger").value = "";
        location.reload();
      });
    });
  }
});
