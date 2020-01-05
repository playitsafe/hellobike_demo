export default {
  formateDate(date) {
    if (!date) return '';
    if (typeof date == 'number') { date = new Date(date); }

    return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

  },

  pagination(data, callback) {
    return {
      onChange: (current) => {
        callback(current);
      },
      current: data.result.page,
      pageSize: data.result.page_size,
      total: data.result.total,

      showTotal: () => {
        return `Total: ${data.result.total} records`;
      },
      showQuickJumper: true
    }
  }
}                                                                                                                                