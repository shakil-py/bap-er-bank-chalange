function get_value_by_inputfield(elemen_id) {
    let field_value = document.getElementById(elemen_id).value
    document.getElementById(elemen_id).value = ""
    if (field_value == "") {
        return field_value = 0
    }
    return field_value
}
function get_value_by_text_field(element_id) {
    const field_value = document.getElementById(element_id).innerText
    return field_value
}
function get_value_in_num(elemen_id) {
    const num_value = parseFloat(elemen_id)
    return num_value
}
function set_value_by_id(value, elemen_id) {
    document.getElementById(elemen_id).innerText = value
}
