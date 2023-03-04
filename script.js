$(function () {
  $.getJSON("assets/data/features.json", function (data) {
    var cards = "";
    for (var i = 0; i < data.length; i++) {
      cards += `<div class="card">
            <div class="box">
                <div class="text">${data[i].name}</div>
                <p>${data[i].description}</p>
            </div>
            </div>`;
    }
    $(".features-content").html(cards);
  });

  $.getJSON("assets/data/prefixCommands.json", function (prefixData) {
    for (const category in prefixData) {
      let categoryCommands = prefixData[category];
      $("#prefixTable").append(`
            <tr>
            <td>${category}</td>
            <td>
                <ul>
                ${categoryCommands
                  .map(
                    (command) =>
                      `<li>${command.name} - ${command.description}</li>`
                  )
                  .join("")}
                </ul>
            </td>
            </tr>
        `);
    }
  });

  $.getJSON("assets/data/slashCommands.json", function (slashData) {
    for (const category in slashData) {
      let categoryCommands = slashData[category];
      $("#slashTable").append(`
            <tr>
            <td>${category}</td>
            <td>
                <ul>
                ${categoryCommands
                  .map(
                    (command) =>
                      `<li>${command.name} - ${command.description}</li>`
                  )
                  .join("")}
                </ul>
            </td>
            </tr>
        `);
    }
  });
});
