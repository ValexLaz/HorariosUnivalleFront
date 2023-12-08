class Modal {
  constructor(contenido,titulo = false) {
    this.showModal(contenido,titulo);
  }
  showModal(contenido,titulo) {
    // Crear el elemento modal
    var modal = $("<div/>", {
      class: "modal fade",
      id: "miModal",
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "modalLabel",
      "aria-hidden": "true",
    });

    // Crear la estructura interna del modal
    var modalDialog = $("<div/>", {
      class: "modal-dialog",
      role: "document",
    }).appendTo(modal);
    var modalContent = $("<div/>", { class: "modal-content" }).appendTo(
      modalDialog
    );

    // Encabezado del modal
    var modalHeader = $("<div/>", { class: "modal-header" }).appendTo(
      modalContent
    );
    $("<h5/>", {
      class: "modal-title",
      id: "modalLabel",
      text:titulo || "Datos duplicados",
    }).appendTo(modalHeader);
    $("<button/>", {
      class: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
    })
      .html('<span aria-hidden="true">&times;</span>')
      .appendTo(modalHeader);

    // Cuerpo del modal
    $("<div/>", { class: "modal-body", html: `${contenido}` }).appendTo(
      modalContent
    );

    // Pie del modal
    var modalFooter = $("<div/>", { class: "modal-footer" }).appendTo(
      modalContent
    );
    $("<button/>", {
      class: "btn btn-secondary",
      "data-dismiss": "modal",
      text: "Cancelar",
    }).appendTo(modalFooter);
    $("<button/>", { class: "btn btn-primary", text: "Continuar" }).appendTo(
      modalFooter
    );

    modal.appendTo("body");
    var customWidth = "80%"; // Puedes ajustar el valor según tus necesidades (p. ej., '600px')
    modalDialog.css("max-width", customWidth);
    var modalDialog = $(".modal-dialog");
    var windowHeight = $(window).height() / 2;
    var dialogHeight = modalDialog.height() / 2;
    var marginTop = (windowHeight - dialogHeight) / 2;
    modalDialog.css("margin-top", marginTop);
    modal.modal("show");
    /*     $(window).on('resize', function () {
              var modalDialog = $('.modal-dialog');
              var windowHeight = $(window).height();
              var dialogHeight = modalDialog.height();
              var marginTop = (windowHeight - dialogHeight) / 2;
              modalDialog.css('margin-top', marginTop);
            }); */
  }
}
export default Modal;