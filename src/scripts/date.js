function FormatTimestampToDate(timestamp) {
    var date = new Date(timestamp)
    var day = ForceTwoValuesDate(date.getDate())
    var month = ForceTwoValuesDate(date.getMonth() + 1)
    var year = date.getFullYear()
    var hours = ForceTwoValuesDate(date.getHours())
    var minutes = ForceTwoValuesDate(date.getMinutes())
    var formatedDate = `${day}/${month}/${year} at ${hours}:${minutes}`
    return formatedDate
}

function ForceTwoValuesDate(value) {
    if (value > 9) {
        return value
    } else {
        return '0' + value
    }
}

module.exports = {
    FormatTimestampToDate,
    ForceTwoValuesDate
}