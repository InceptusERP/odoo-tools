odoo.define('ies_shift_select.ListView', function (require) {
	"use strict";
	
	var ListView = require('web.ListView');
	
	ListView.include({
		load_list: function() {
	        var self = this;
	        var res = this._super();
	        var $chkboxes = this.$('.o_list_record_selector input');
	        var lastChecked = null;
	        $chkboxes.click(function(e) {
	        	if(!lastChecked) {
	    			lastChecked = this;
	    			return;
	    		}
	    		if(e.shiftKey) {
	    			var start = $chkboxes.index(this);
	    			var end = $chkboxes.index(lastChecked);
	    			$chkboxes.slice(Math.min(start,end), Math.max(start,end)+ 1).prop('checked', lastChecked.checked);
	    		}
	    		lastChecked = this;
	        });
	        return res
		},
	});
	
})
