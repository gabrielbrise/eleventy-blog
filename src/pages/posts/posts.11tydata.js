var dateHelper = require('../../scripts/date.js')

module.exports = {
    eleventyComputed: {
        formatedDate: data => dateHelper.FormatTimestampToDate(data.timestamp)
    }
};