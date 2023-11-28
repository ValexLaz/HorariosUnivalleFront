import Component from "./ComponentManager.js";

class Form extends Component {
  constructor({ formHtml = "", group = "", container = "" }) {
    super();
    this.class = group;
    this.status = 0;
    this.formHtml = formHtml;
    this.container = container;
    super.saveComponent(this.class, this);
  }
  render() {
    console.log(this.formHtml);
    $(this.container).html(this.formHtml);
  }

  initializeEventSubmit(callback) {
    $(document).on("submit", "#formulario",callback);
  }

  generateJSONFromInputs({ form = "" }) {
    var formData = {};
    $(form)
      .find(":input")
      .each(function () {
        var fieldName = $(this).attr("name");
        var fieldType = $(this).attr("type");
        if (fieldType === "checkbox" && !$(this).prop("checked")) {
          return; 
        }
        if (fieldType === "radio" && !$(this).prop("checked")) {
          return; 
        }
        var fieldValue = $(this).val();
        if (fieldValue) {
          formData[fieldName] = fieldValue;
        }
      });
    return formData;
  }
}
export default Form;
