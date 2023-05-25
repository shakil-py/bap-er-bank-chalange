
// const withdraw_tx_value = get_value_by_text_field("withdraw-txt")
// const balance_tx_value = get_value_by_text_field("balance-txt")
document.getElementById("diposit-btn").addEventListener("click", function () {
    const diposit_value = get_value_in_num(get_value_by_inputfield("diposit_amount"))
    const diposit_balance = get_value_in_num(get_value_by_text_field("diposit-txt"))
    const total = diposit_balance + diposit_value
    set_value_by_id(total, "diposit-txt")
    const balance_value = get_value_in_num(get_value_by_text_field("balance-txt"))
    const total_balance = diposit_value + balance_value
    set_value_by_id(total_balance, "balance-txt")
})
document.getElementById("withdraw-btn").addEventListener("click", function () {
    const withdraw_value = get_value_in_num(get_value_by_inputfield("withdraw-amount"))
    const withdraw_balance = get_value_in_num(get_value_by_text_field("withdraw-txt"))
    const balance_value = get_value_in_num(get_value_by_text_field("balance-txt"))
    if (balance_value <= withdraw_value) {
        alert("You Can't Withdraw")
    }
    else {
        const total = withdraw_balance + withdraw_value
        set_value_by_id(total, "withdraw-txt")
        const total_balance = balance_value - withdraw_value
        set_value_by_id(total_balance, "balance-txt")
    }
})