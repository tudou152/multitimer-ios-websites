module.exports = {

    // Extend templating filters
    filters: {
        toLocaleString: function(s) {
            var dateStr = (new Date(s)).toLocaleString();
            return dateStr;
        }
    },

    // Hook process during build
    hooks: {
        "page:before": function(page) {
            var options = this.config.get('pluginsConfig.mtime')
            var prefix = options.prefix || '最后更新：';
            var postfix = options.postfix || '';

            page.content = page.content + '\n\n<p style="border-top: solid 1px #eee; color:#ccc; padding-top:10px; margin-top:90px;">' + prefix + '{{ file.mtime | toLocaleString }}' + postfix + '</p>';
            return page;
        }
    }
};
