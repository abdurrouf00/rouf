;/*FB_PKG_DELIM*/

__d("flattenArray",[],(function(a,b,c,d,e,f){function a(a){var b=[];g(a,b);return b}function g(a,b){var c=a.length,d=0;while(c--){var e=a[d++];Array.isArray(e)?g(e,b):b.push(e)}}f["default"]=a}),66);
__d("isEmail",[],(function(a,b,c,d,e,f){var g=/^[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i;function a(a){return g.test(a)}f["default"]=a}),66);