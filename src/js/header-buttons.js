(() => {
  "use strict";

  window.addEventListener("DOMContentLoaded", () => {
    [...document.querySelectorAll("#header-buttons .dropdown-toggle")].map(
      (element) =>
        new bootstrap.Dropdown(element, {
          popperConfig(defaultBsPopperConfig) {
            const newPopperConfig = Object.assign({}, defaultBsPopperConfig);
            if (window.innerWidth < bsExtraLarge) {
              if (window.innerHeight >= bsExtraSmall) {
                newPopperConfig.placement = "right";
              } else {
                newPopperConfig.placement = "top";
              }

              let offset = newPopperConfig.modifiers.find(
                (modifier) => modifier.name == "offset"
              );
              if (typeof offset !== "undefined") {
                offset.options.offset = [0, 10];
              }
            }
            return newPopperConfig;
          },
        })
    );

    //         document.querySelectorAll('#header-buttons .dropdown-btn').forEach((element) => {
    //         })
  });
})();
