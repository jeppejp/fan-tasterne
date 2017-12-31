/*! showdown 02-06-2017 */

(function(){function a(a){"use strict";var b={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Specify a prefix to generated header ids",type:"string"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,description:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,description:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,description:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,description:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,description:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",description:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,description:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,description:"Open all links in new windows",type:"boolean"}};if(!1===a)return JSON.parse(JSON.stringify(b));var c={};for(var d in b)b.hasOwnProperty(d)&&(c[d]=b[d].defaultValue);return c}function b(a,b){"use strict";var c=b?"Error in "+b+" extension->":"Error in unnamed extension",e={valid:!0,error:""};d.helper.isArray(a)||(a=[a]);for(var f=0;f<a.length;++f){var g=c+" sub-extension "+f+": ",h=a[f];if("object"!=typeof h)return e.valid=!1,e.error=g+"must be an object, but "+typeof h+" given",e;if(!d.helper.isString(h.type))return e.valid=!1,e.error=g+'property "type" must be a string, but '+typeof h.type+" given",e;var i=h.type=h.type.toLowerCase();if("language"===i&&(i=h.type="lang"),"html"===i&&(i=h.type="output"),"lang"!==i&&"output"!==i&&"listener"!==i)return e.valid=!1,e.error=g+"type "+i+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',e;if("listener"===i){if(d.helper.isUndefined(h.listeners))return e.valid=!1,e.error=g+'. Extensions of type "listener" must have a property called "listeners"',e}else if(d.helper.isUndefined(h.filter)&&d.helper.isUndefined(h.regex))return e.valid=!1,e.error=g+i+' extensions must define either a "regex" property or a "filter" method',e;if(h.listeners){if("object"!=typeof h.listeners)return e.valid=!1,e.error=g+'"listeners" property must be an object but '+typeof h.listeners+" given",e;for(var j in h.listeners)if(h.listeners.hasOwnProperty(j)&&"function"!=typeof h.listeners[j])return e.valid=!1,e.error=g+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+j+" must be a function but "+typeof h.listeners[j]+" given",e}if(h.filter){if("function"!=typeof h.filter)return e.valid=!1,e.error=g+'"filter" must be a function, but '+typeof h.filter+" given",e}else if(h.regex){if(d.helper.isString(h.regex)&&(h.regex=new RegExp(h.regex,"g")),!(h.regex instanceof RegExp))return e.valid=!1,e.error=g+'"regex" property must either be a string or a RegExp object, but '+typeof h.regex+" given",e;if(d.helper.isUndefined(h.replace))return e.valid=!1,e.error=g+'"regex" extensions must implement a replace string or function',e}}return e}function c(a,b){"use strict";return"¨E"+b.charCodeAt(0)+"E"}var d={},e={},f={},g=a(!0),h="vanilla",i={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:a(!0),allOn:function(){"use strict";var b=a(!0),c={};for(var d in b)b.hasOwnProperty(d)&&(c[d]=!0);return c}()};d.helper={},d.extensions={},d.setOption=function(a,b){"use strict";return g[a]=b,this},d.getOption=function(a){"use strict";return g[a]},d.getOptions=function(){"use strict";return g},d.resetOptions=function(){"use strict";g=a(!0)},d.setFlavor=function(a){"use strict";if(!i.hasOwnProperty(a))throw Error(a+" flavor was not found");d.resetOptions();var b=i[a];h=a;for(var c in b)b.hasOwnProperty(c)&&(g[c]=b[c])},d.getFlavor=function(){"use strict";return h},d.getFlavorOptions=function(a){"use strict";if(i.hasOwnProperty(a))return i[a]},d.getDefaultOptions=function(b){"use strict";return a(b)},d.subParser=function(a,b){"use strict";if(d.helper.isString(a)){if(void 0===b){if(e.hasOwnProperty(a))return e[a];throw Error("SubParser named "+a+" not registered!")}e[a]=b}},d.extension=function(a,c){"use strict";if(!d.helper.isString(a))throw Error("Extension 'name' must be a string");if(a=d.helper.stdExtName(a),d.helper.isUndefined(c)){if(!f.hasOwnProperty(a))throw Error("Extension named "+a+" is not registered!");return f[a]}"function"==typeof c&&(c=c()),d.helper.isArray(c)||(c=[c]);var e=b(c,a);if(!e.valid)throw Error(e.error);f[a]=c},d.getAllExtensions=function(){"use strict";return f},d.removeExtension=function(a){"use strict";delete f[a]},d.resetExtensions=function(){"use strict";f={}},d.validateExtension=function(a){"use strict";var c=b(a,null);return!!c.valid||(console.warn(c.error),!1)},d.hasOwnProperty("helper")||(d.helper={}),d.helper.isString=function(a){"use strict";return"string"==typeof a||a instanceof String},d.helper.isFunction=function(a){"use strict";var b={};return a&&"[object Function]"===b.toString.call(a)},d.helper.isArray=function(a){"use strict";return a.constructor===Array},d.helper.isUndefined=function(a){"use strict";return void 0===a},d.helper.forEach=function(a,b){"use strict";if(d.helper.isUndefined(a))throw new Error("obj param is required");if(d.helper.isUndefined(b))throw new Error("callback param is required");if(!d.helper.isFunction(b))throw new Error("callback param must be a function/closure");if("function"==typeof a.forEach)a.forEach(b);else if(d.helper.isArray(a))for(var c=0;c<a.length;c++)b(a[c],c,a);else{if("object"!=typeof a)throw new Error("obj does not seem to be an array or an iterable object");for(var e in a)a.hasOwnProperty(e)&&b(a[e],e,a)}},d.helper.stdExtName=function(a){"use strict";return a.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()},d.helper.escapeCharactersCallback=c,d.helper.escapeCharacters=function(a,b,d){"use strict";var e="(["+b.replace(/([\[\]\\])/g,"\\$1")+"])";d&&(e="\\\\"+e);var f=new RegExp(e,"g");return a=a.replace(f,c)};var j=function(a,b,c,d){"use strict";var e,f,g,h,i,j=d||"",k=j.indexOf("g")>-1,l=new RegExp(b+"|"+c,"g"+j.replace(/g/g,"")),m=new RegExp(b,j.replace(/g/g,"")),n=[];do{for(e=0;g=l.exec(a);)if(m.test(g[0]))e++||(f=l.lastIndex,h=f-g[0].length);else if(e&&!--e){i=g.index+g[0].length;var o={left:{start:h,end:f},match:{start:f,end:g.index},right:{start:g.index,end:i},wholeMatch:{start:h,end:i}};if(n.push(o),!k)return n}}while(e&&(l.lastIndex=f));return n};d.helper.matchRecursiveRegExp=function(a,b,c,d){"use strict";for(var e=j(a,b,c,d),f=[],g=0;g<e.length;++g)f.push([a.slice(e[g].wholeMatch.start,e[g].wholeMatch.end),a.slice(e[g].match.start,e[g].match.end),a.slice(e[g].left.start,e[g].left.end),a.slice(e[g].right.start,e[g].right.end)]);return f},d.helper.replaceRecursiveRegExp=function(a,b,c,e,f){"use strict";if(!d.helper.isFunction(b)){var g=b;b=function(){return g}}var h=j(a,c,e,f),i=a,k=h.length;if(k>0){var l=[];0!==h[0].wholeMatch.start&&l.push(a.slice(0,h[0].wholeMatch.start));for(var m=0;m<k;++m)l.push(b(a.slice(h[m].wholeMatch.start,h[m].wholeMatch.end),a.slice(h[m].match.start,h[m].match.end),a.slice(h[m].left.start,h[m].left.end),a.slice(h[m].right.start,h[m].right.end))),m<k-1&&l.push(a.slice(h[m].wholeMatch.end,h[m+1].wholeMatch.start));h[k-1].wholeMatch.end<a.length&&l.push(a.slice(h[k-1].wholeMatch.end)),i=l.join("")}return i},d.helper.regexIndexOf=function(a,b,c){"use strict";if(!d.helper.isString(a))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(b instanceof RegExp==!1)throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";var e=a.substring(c||0).search(b);return e>=0?e+(c||0):e},d.helper.splitAtIndex=function(a,b){"use strict";if(!d.helper.isString(a))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";return[a.substring(0,b),a.substring(b)]},d.helper.encodeEmailAddress=function(a){"use strict";var b=[function(a){return"&#"+a.charCodeAt(0)+";"},function(a){return"&#x"+a.charCodeAt(0).toString(16)+";"},function(a){return a}];return a=a.replace(/./g,function(a){if("@"===a)a=b[Math.floor(2*Math.random())](a);else{var c=Math.random();a=c>.9?b[2](a):c>.45?b[1](a):b[0](a)}return a})},"undefined"==typeof console&&(console={warn:function(a){"use strict";alert(a)},log:function(a){"use strict";alert(a)},error:function(a){"use strict";throw a}}),d.helper.regexes={asteriskAndDash:/([*_])/g},d.Converter=function(a){"use strict";function c(a,c){if(c=c||null,d.helper.isString(a)){if(a=d.helper.stdExtName(a),c=a,d.extensions[a])return console.warn("DEPRECATION WARNING: "+a+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),void e(d.extensions[a],a);if(d.helper.isUndefined(f[a]))throw Error('Extension "'+a+'" could not be loaded. It was either not found or is not a valid extension.');a=f[a]}"function"==typeof a&&(a=a()),d.helper.isArray(a)||(a=[a]);var g=b(a,c);if(!g.valid)throw Error(g.error);for(var h=0;h<a.length;++h){switch(a[h].type){case"lang":m.push(a[h]);break;case"output":n.push(a[h])}if(a[h].hasOwnProperty("listeners"))for(var i in a[h].listeners)a[h].listeners.hasOwnProperty(i)&&j(i,a[h].listeners[i])}}function e(a,c){"function"==typeof a&&(a=a(new d.Converter)),d.helper.isArray(a)||(a=[a]);var e=b(a,c);if(!e.valid)throw Error(e.error);for(var f=0;f<a.length;++f)switch(a[f].type){case"lang":m.push(a[f]);break;case"output":n.push(a[f]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function j(a,b){if(!d.helper.isString(a))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof a+" given");if("function"!=typeof b)throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof b+" given");o.hasOwnProperty(a)||(o[a]=[]),o[a].push(b)}function k(a){var b=a.match(/^\s*/)[0].length,c=new RegExp("^\\s{0,"+b+"}","gm");return a.replace(c,"")}var l={},m=[],n=[],o={},p=h;!function(){a=a||{};for(var b in g)g.hasOwnProperty(b)&&(l[b]=g[b]);if("object"!=typeof a)throw Error("Converter expects the passed parameter to be an object, but "+typeof a+" was passed instead.");for(var e in a)a.hasOwnProperty(e)&&(l[e]=a[e]);l.extensions&&d.helper.forEach(l.extensions,c)}(),this._dispatch=function(a,b,c,d){if(o.hasOwnProperty(a))for(var e=0;e<o[a].length;++e){var f=o[a][e](a,b,this,c,d);f&&void 0!==f&&(b=f)}return b},this.listen=function(a,b){return j(a,b),this},this.makeHtml=function(a){if(!a)return a;var b={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:m,outputModifiers:n,converter:this,ghCodeBlocks:[]};return a=a.replace(/¨/g,"¨T"),a=a.replace(/\$/g,"¨D"),a=a.replace(/\r\n/g,"\n"),a=a.replace(/\r/g,"\n"),a=a.replace(/\u00A0/g," "),l.smartIndentationFix&&(a=k(a)),a="\n\n"+a+"\n\n",a=d.subParser("detab")(a,l,b),a=a.replace(/^[ \t]+$/gm,""),d.helper.forEach(m,function(c){a=d.subParser("runExtension")(c,a,l,b)}),a=d.subParser("hashPreCodeTags")(a,l,b),a=d.subParser("githubCodeBlocks")(a,l,b),a=d.subParser("hashHTMLBlocks")(a,l,b),a=d.subParser("hashCodeTags")(a,l,b),a=d.subParser("stripLinkDefinitions")(a,l,b),a=d.subParser("blockGamut")(a,l,b),a=d.subParser("unhashHTMLSpans")(a,l,b),a=d.subParser("unescapeSpecialChars")(a,l,b),a=a.replace(/¨D/g,"$$"),a=a.replace(/¨T/g,"¨"),d.helper.forEach(n,function(c){a=d.subParser("runExtension")(c,a,l,b)}),a},this.setOption=function(a,b){l[a]=b},this.getOption=function(a){return l[a]},this.getOptions=function(){return l},this.addExtension=function(a,b){b=b||null,c(a,b)},this.useExtension=function(a){c(a)},this.setFlavor=function(a){if(!i.hasOwnProperty(a))throw Error(a+" flavor was not found");var b=i[a];p=a;for(var c in b)b.hasOwnProperty(c)&&(l[c]=b[c])},this.getFlavor=function(){return p},this.removeExtension=function(a){d.helper.isArray(a)||(a=[a]);for(var b=0;b<a.length;++b){for(var c=a[b],e=0;e<m.length;++e)m[e]===c&&m[e].splice(e,1);for(;0<n.length;++e)n[0]===c&&n[0].splice(e,1)}},this.getAllExtensions=function(){return{language:m,output:n}}},d.subParser("anchors",function(a,b,c){"use strict";a=c.converter._dispatch("anchors.before",a,b,c);var e=function(a,e,f,g,h,i,j){if(d.helper.isUndefined(j)&&(j=""),f=f.toLowerCase(),a.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)g="";else if(!g){if(f||(f=e.toLowerCase().replace(/ ?\n/g," ")),g="#"+f,d.helper.isUndefined(c.gUrls[f]))return a;g=c.gUrls[f],d.helper.isUndefined(c.gTitles[f])||(j=c.gTitles[f])}g=g.replace(d.helper.regexes.asteriskAndDash,d.helper.escapeCharactersCallback);var k='<a href="'+g+'"';return""!==j&&null!==j&&(j=j.replace(/"/g,"&quot;"),j=j.replace(d.helper.regexes.asteriskAndDash,d.helper.escapeCharactersCallback),k+=' title="'+j+'"'),b.openLinksInNewWindow&&(k+=' target="¨E95Eblank"'),k+=">"+e+"</a>"};return a=a.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,e),a=a.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,e),a=a.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,e),a=a.replace(/\[([^\[\]]+)]()()()()()/g,e),b.ghMentions&&(a=a.replace(/(^|\s)(\\)?(@([a-z\d\-]+))(?=[.!?;,[\]()]|\s|$)/gim,function(a,c,e,f,g){if("\\"===e)return c+f;if(!d.helper.isString(b.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");return c+'<a href="'+b.ghMentionsLink.replace(/\{u}/g,g)+'">'+f+"</a>"})),a=c.converter._dispatch("anchors.after",a,b,c)});var k=/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)()(?=\s|$)(?!["<>])/gi,l=/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]]?)(?=\s|$)(?!["<>])/gi,m=/<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>/gi,n=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-\/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,o=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,p=function(a){"use strict";return function(b,c,d,e,f){var g=c,h="",i="";return/^www\./i.test(c)&&(c=c.replace(/^www\./i,"http://www.")),a.excludeTrailingPunctuationFromURLs&&f&&(h=f),a.openLinksInNewWindow&&(i=' target="¨E95Eblank"'),'<a href="'+c+'"'+i+">"+g+"</a>"+h}},q=function(a,b){"use strict";return function(c,e,f){var g="mailto:";return e=e||"",f=d.subParser("unescapeSpecialChars")(f,a,b),a.encodeEmails?(g=d.helper.encodeEmailAddress(g+f),f=d.helper.encodeEmailAddress(f)):g+=f,e+'<a href="'+g+'">'+f+"</a>"}};d.subParser("autoLinks",function(a,b,c){"use strict";return a=c.converter._dispatch("autoLinks.before",a,b,c),a=a.replace(m,p(b)),a=a.replace(o,q(b,c)),a=c.converter._dispatch("autoLinks.after",a,b,c)}),d.subParser("simplifiedAutoLinks",function(a,b,c){"use strict";return b.simplifiedAutoLink?(a=c.converter._dispatch("simplifiedAutoLinks.before",a,b,c),a=b.excludeTrailingPunctuationFromURLs?a.replace(l,p(b)):a.replace(k,p(b)),a=a.replace(n,q(b,c)),a=c.converter._dispatch("simplifiedAutoLinks.after",a,b,c)):a}),d.subParser("blockGamut",function(a,b,c){"use strict";return a=c.converter._dispatch("blockGamut.before",a,b,c),a=d.subParser("blockQuotes")(a,b,c),a=d.subParser("headers")(a,b,c),a=d.subParser("horizontalRule")(a,b,c),a=d.subParser("lists")(a,b,c),a=d.subParser("codeBlocks")(a,b,c),a=d.subParser("tables")(a,b,c),a=d.subParser("hashHTMLBlocks")(a,b,c),a=d.subParser("paragraphs")(a,b,c),a=c.converter._dispatch("blockGamut.after",a,b,c)}),d.subParser("blockQuotes",function(a,b,c){"use strict";return a=c.converter._dispatch("blockQuotes.before",a,b,c),a=a.replace(/((^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(a,e){var f=e;return f=f.replace(/^[ \t]*>[ \t]?/gm,"¨0"),f=f.replace(/¨0/g,""),f=f.replace(/^[ \t]+$/gm,""),f=d.subParser("githubCodeBlocks")(f,b,c),f=d.subParser("blockGamut")(f,b,c),f=f.replace(/(^|\n)/g,"$1  "),f=f.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(a,b){var c=b;return c=c.replace(/^  /gm,"¨0"),c=c.replace(/¨0/g,"")}),d.subParser("hashBlock")("<blockquote>\n"+f+"\n</blockquote>",b,c)}),a=c.converter._dispatch("blockQuotes.after",a,b,c)}),d.subParser("codeBlocks",function(a,b,c){"use strict";a=c.converter._dispatch("codeBlocks.before",a,b,c),a+="¨0";var e=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;return a=a.replace(e,function(a,e,f){var g=e,h=f,i="\n";return g=d.subParser("outdent")(g,b,c),g=d.subParser("encodeCode")(g,b,c),g=d.subParser("detab")(g,b,c),g=g.replace(/^\n+/g,""),g=g.replace(/\n+$/g,""),b.omitExtraWLInCodeBlocks&&(i=""),g="<pre><code>"+g+i+"</code></pre>",d.subParser("hashBlock")(g,b,c)+h}),a=a.replace(/¨0/,""),a=c.converter._dispatch("codeBlocks.after",a,b,c)}),d.subParser("codeSpans",function(a,b,c){"use strict";return a=c.converter._dispatch("codeSpans.before",a,b,c),void 0===a&&(a=""),a=a.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(a,e,f,g){var h=g;return h=h.replace(/^([ \t]*)/g,""),h=h.replace(/[ \t]*$/g,""),h=d.subParser("encodeCode")(h,b,c),e+"<code>"+h+"</code>"}),a=c.converter._dispatch("codeSpans.after",a,b,c)}),d.subParser("detab",function(a,b,c){"use strict";return a=c.converter._dispatch("detab.before",a,b,c),a=a.replace(/\t(?=\t)/g,"    "),a=a.replace(/\t/g,"¨A¨B"),a=a.replace(/¨B(.+?)¨A/g,function(a,b){for(var c=b,d=4-c.length%4,e=0;e<d;e++)c+=" ";return c}),a=a.replace(/¨A/g,"    "),a=a.replace(/¨B/g,""),a=c.converter._dispatch("detab.after",a,b,c)}),d.subParser("encodeAmpsAndAngles",function(a,b,c){"use strict";return a=c.converter._dispatch("encodeAmpsAndAngles.before",a,b,c),a=a.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),a=a.replace(/<(?![a-z\/?$!])/gi,"&lt;"),a=a.replace(/</g,"&lt;"),a=a.replace(/>/g,"&gt;"),a=c.converter._dispatch("encodeAmpsAndAngles.after",a,b,c)}),d.subParser("encodeBackslashEscapes",function(a,b,c){"use strict";return a=c.converter._dispatch("encodeBackslashEscapes.before",a,b,c),a=a.replace(/\\(\\)/g,d.helper.escapeCharactersCallback),a=a.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g,d.helper.escapeCharactersCallback),a=c.converter._dispatch("encodeBackslashEscapes.after",a,b,c)}),d.subParser("encodeCode",function(a,b,c){"use strict";return a=c.converter._dispatch("encodeCode.before",a,b,c),a=a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,d.helper.escapeCharactersCallback),a=c.converter._dispatch("encodeCode.after",a,b,c)}),d.subParser("escapeSpecialCharsWithinTagAttributes",function(a,b,c){"use strict";a=c.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",a,b,c);var e=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;return a=a.replace(e,function(a){return a.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,d.helper.escapeCharactersCallback)}),a=c.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",a,b,c)}),d.subParser("githubCodeBlocks",function(a,b,c){"use strict";return b.ghCodeBlocks?(a=c.converter._dispatch("githubCodeBlocks.before",a,b,c),a+="¨0",a=a.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,function(a,e,f){var g=b.omitExtraWLInCodeBlocks?"":"\n";return f=d.subParser("encodeCode")(f,b,c),f=d.subParser("detab")(f,b,c),f=f.replace(/^\n+/g,""),f=f.replace(/\n+$/g,""),f="<pre><code"+(e?' class="'+e+" language-"+e+'"':"")+">"+f+g+"</code></pre>",f=d.subParser("hashBlock")(f,b,c),"\n\n¨G"+(c.ghCodeBlocks.push({text:a,codeblock:f})-1)+"G\n\n"}),a=a.replace(/¨0/,""),c.converter._dispatch("githubCodeBlocks.after",a,b,c)):a}),d.subParser("hashBlock",function(a,b,c){"use strict";return a=c.converter._dispatch("hashBlock.before",a,b,c),a=a.replace(/(^\n+|\n+$)/g,""),a="\n\n¨K"+(c.gHtmlBlocks.push(a)-1)+"K\n\n",a=c.converter._dispatch("hashBlock.after",a,b,c)}),d.subParser("hashCodeTags",function(a,b,c){"use strict";a=c.converter._dispatch("hashCodeTags.before",a,b,c);var e=function(a,e,f,g){var h=f+d.subParser("encodeCode")(e,b,c)+g;return"¨C"+(c.gHtmlSpans.push(h)-1)+"C"};return a=d.helper.replaceRecursiveRegExp(a,e,"<code\\b[^>]*>","</code>","gim"),a=c.converter._dispatch("hashCodeTags.after",a,b,c)}),d.subParser("hashElement",function(a,b,c){"use strict";return function(a,b){var d=b;return d=d.replace(/\n\n/g,"\n"),d=d.replace(/^\n/,""),d=d.replace(/\n+$/g,""),d="\n\n¨K"+(c.gHtmlBlocks.push(d)-1)+"K\n\n"}}),d.subParser("hashHTMLBlocks",function(a,b,c){"use strict";a=c.converter._dispatch("hashHTMLBlocks.before",a,b,c);for(var e=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],f=function(a,b,d,e){var f=a;return-1!==d.search(/\bmarkdown\b/)&&(f=d+c.converter.makeHtml(b)+e),"\n\n¨K"+(c.gHtmlBlocks.push(f)-1)+"K\n\n"},g=0;g<e.length;++g)for(var h,i=new RegExp("^ {0,3}<"+e[g]+"\\b[^>]*>","im"),j="<"+e[g]+"\\b[^>]*>",k="</"+e[g]+">";-1!==(h=d.helper.regexIndexOf(a,i));){var l=d.helper.splitAtIndex(a,h),m=d.helper.replaceRecursiveRegExp(l[1],f,j,k,"im");if(m===l[1])break;a=l[0].concat(m)}return a=a.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,d.subParser("hashElement")(a,b,c)),a=d.helper.replaceRecursiveRegExp(a,function(a){return"\n\n¨K"+(c.gHtmlBlocks.push(a)-1)+"K\n\n"},"^ {0,3}\x3c!--","--\x3e","gm"),a=a.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,d.subParser("hashElement")(a,b,c)),a=c.converter._dispatch("hashHTMLBlocks.after",a,b,c)}),d.subParser("hashHTMLSpans",function(a,b,c){"use strict";function d(a){return"¨C"+(c.gHtmlSpans.push(a)-1)+"C"}return a=c.converter._dispatch("hashHTMLSpans.before",a,b,c),a=a.replace(/<[^>]+?\/>/gi,function(a){return d(a)}),a=a.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,function(a){return d(a)}),a=a.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,function(a){return d(a)}),a=a.replace(/<[^>]+?>/gi,function(a){return d(a)}),a=c.converter._dispatch("hashHTMLSpans.after",a,b,c)}),d.subParser("unhashHTMLSpans",function(a,b,c){"use strict";a=c.converter._dispatch("unhashHTMLSpans.before",a,b,c);for(var d=0;d<c.gHtmlSpans.length;++d){for(var e=c.gHtmlSpans[d],f=0;/¨C(\d+)C/.test(e);){var g=RegExp.$1;if(e=e.replace("¨C"+g+"C",c.gHtmlSpans[g]),10===f)break;++f}a=a.replace("¨C"+d+"C",e)}return a=c.converter._dispatch("unhashHTMLSpans.after",a,b,c)}),d.subParser("hashPreCodeTags",function(a,b,c){"use strict";a=c.converter._dispatch("hashPreCodeTags.before",a,b,c);var e=function(a,e,f,g){var h=f+d.subParser("encodeCode")(e,b,c)+g;return"\n\n¨G"+(c.ghCodeBlocks.push({text:a,codeblock:h})-1)+"G\n\n"};return a=d.helper.replaceRecursiveRegExp(a,e,"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),a=c.converter._dispatch("hashPreCodeTags.after",a,b,c)}),d.subParser("headers",function(a,b,c){"use strict";function e(a){var e;if(b.customizedHeaderId){var f=a.match(/\{([^{]+?)}\s*$/);f&&f[1]&&(a=f[1])}return e=d.helper.isString(b.prefixHeaderId)?b.prefixHeaderId+a:!0===b.prefixHeaderId?"section "+a:a,e=g?e.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():e.replace(/[^\w]/g,"").toLowerCase(),c.hashLinkCounts[e]?e=e+"-"+c.hashLinkCounts[e]++:c.hashLinkCounts[e]=1,e}a=c.converter._dispatch("headers.before",a,b,c);var f=isNaN(parseInt(b.headerLevelStart))?1:parseInt(b.headerLevelStart),g=b.ghCompatibleHeaderId,h=b.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,i=b.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;a=a.replace(h,function(a,g){var h=d.subParser("spanGamut")(g,b,c),i=b.noHeaderId?"":' id="'+e(g)+'"',j=f,k="<h"+j+i+">"+h+"</h"+j+">";return d.subParser("hashBlock")(k,b,c)}),a=a.replace(i,function(a,g){var h=d.subParser("spanGamut")(g,b,c),i=b.noHeaderId?"":' id="'+e(g)+'"',j=f+1,k="<h"+j+i+">"+h+"</h"+j+">";return d.subParser("hashBlock")(k,b,c)});var j=b.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;return a=a.replace(j,function(a,g,h){var i=h;b.customizedHeaderId&&(i=h.replace(/\s?\{([^{]+?)}\s*$/,""));var j=d.subParser("spanGamut")(i,b,c),k=b.noHeaderId?"":' id="'+e(h)+'"',l=f-1+g.length,m="<h"+l+k+">"+j+"</h"+l+">";return d.subParser("hashBlock")(m,b,c)}),a=c.converter._dispatch("headers.after",a,b,c)}),d.subParser("horizontalRule",function(a,b,c){"use strict";a=c.converter._dispatch("horizontalRule.before",a,b,c);var e=d.subParser("hashBlock")("<hr />",b,c);return a=a.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,e),a=a.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,e),a=a.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,e),a=c.converter._dispatch("horizontalRule.after",a,b,c)}),d.subParser("images",function(a,b,c){"use strict";function e(a,b,e,f,g,h,i,j){var k=c.gUrls,l=c.gTitles,m=c.gDimensions;if(e=e.toLowerCase(),j||(j=""),a.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)f="";else if(""===f||null===f){if(""!==e&&null!==e||(e=b.toLowerCase().replace(/ ?\n/g," ")),f="#"+e,d.helper.isUndefined(k[e]))return a;f=k[e],d.helper.isUndefined(l[e])||(j=l[e]),d.helper.isUndefined(m[e])||(g=m[e].width,h=m[e].height)}b=b.replace(/"/g,"&quot;").replace(d.helper.regexes.asteriskAndDash,d.helper.escapeCharactersCallback),f=f.replace(d.helper.regexes.asteriskAndDash,d.helper.escapeCharactersCallback);var n='<img src="'+f+'" alt="'+b+'"';return j&&(j=j.replace(/"/g,"&quot;").replace(d.helper.regexes.asteriskAndDash,d.helper.escapeCharactersCallback),n+=' title="'+j+'"'),g&&h&&(g="*"===g?"auto":g,h="*"===h?"auto":h,n+=' width="'+g+'"',n+=' height="'+h+'"'),n+=" />"}a=c.converter._dispatch("images.before",a,b,c);var f=/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,g=/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,h=/!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g,i=/!\[([^\[\]]+)]()()()()()/g;return a=a.replace(h,e),a=a.replace(g,e),a=a.replace(f,e),a=a.replace(i,e),a=c.converter._dispatch("images.after",a,b,c)}),d.subParser("italicsAndBold",function(a,b,c){"use strict";function e(a,e,f){return b.simplifiedAutoLink&&(a=d.subParser("simplifiedAutoLinks")(a,b,c)),e+a+f}return a=c.converter._dispatch("italicsAndBold.before",a,b,c),b.literalMidWordUnderscores?(a=a.replace(/\b___(\S[\s\S]*)___\b/g,function(a,b){return e(b,"<strong><em>","</em></strong>")}),a=a.replace(/\b__(\S[\s\S]*)__\b/g,function(a,b){return e(b,"<strong>","</strong>")}),a=a.replace(/\b_(\S[\s\S]*?)_\b/g,function(a,b){return e(b,"<em>","</em>")})):(a=a.replace(/___(\S[\s\S]*?)___/g,function(a,b){return/\S$/.test(b)?e(b,"<strong><em>","</em></strong>"):a}),a=a.replace(/__(\S[\s\S]*?)__/g,function(a,b){return/\S$/.test(b)?e(b,"<strong>","</strong>"):a}),a=a.replace(/_([^\s_][\s\S]*?)_/g,function(a,b){return/\S$/.test(b)?e(b,"<em>","</em>"):a})),b.literalMidWordAsterisks?(a=a.trim().replace(/(?:^| +)\*{3}(\S[\s\S]*?)\*{3}(?: +|$)/g,function(a,b){return e(b," <strong><em>","</em></strong> ")}),a=a.trim().replace(/(?:^| +)\*{2}(\S[\s\S]*?)\*{2}(?: +|$)/g,function(a,b){return e(b," <strong>","</strong> ")}),a=a.trim().replace(/(?:^| +)\*{1}(\S[\s\S]*?)\*{1}(?: +|$)/g,function(a,b){return e(b," <em>","</em>"+(" "===a.slice(-1)?" ":""))})):(a=a.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(a,b){return/\S$/.test(b)?e(b,"<strong><em>","</em></strong>"):a}),a=a.replace(/\*\*(\S[\s\S]*?)\*\*/g,function(a,b){return/\S$/.test(b)?e(b,"<strong>","</strong>"):a}),a=a.replace(/\*([^\s*][\s\S]*?)\*/g,function(a,b){return/\S$/.test(b)?e(b,"<em>","</em>"):a})),a=c.converter._dispatch("italicsAndBold.after",a,b,c)}),d.subParser("lists",function(a,b,c){"use strict";function e(a,e){c.gListLevel++,a=a.replace(/\n{2,}$/,"\n"),a+="¨0";var f=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,g=/\n[ \t]*\n(?!¨0)/.test(a);return b.disableForced4SpacesIndentedSublists&&(f=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),a=a.replace(f,function(a,e,f,h,i,j,k){k=k&&""!==k.trim();var l=d.subParser("outdent")(i,b,c),m="";return j&&b.tasklists&&(m=' class="task-list-item" style="list-style-type: none;"',l=l.replace(/^[ \t]*\[(x|X| )?]/m,function(){var a='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return k&&(a+=" checked"),a+=">"})),l=l.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(a){return"¨A"+a}),e||l.search(/\n{2,}/)>-1?(l=d.subParser("githubCodeBlocks")(l,b,c),l=d.subParser("blockGamut")(l,b,c)):(l=d.subParser("lists")(l,b,c),l=l.replace(/\n$/,""),l=d.subParser("hashHTMLBlocks")(l,b,c),l=l.replace(/\n\n+/g,"\n\n"),l=l.replace(/\n\n/g,"¨B"),l=g?d.subParser("paragraphs")(l,b,c):d.subParser("spanGamut")(l,b,c),l=l.replace(/¨B/g,"\n\n")),l=l.replace("¨A",""),l="<li"+m+">"+l+"</li>\n"}),a=a.replace(/¨0/g,""),c.gListLevel--,e&&(a=a.replace(/\s+$/,"")),a}function f(a,c,d){var f=b.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,g=b.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,h="ul"===c?f:g,i="";return-1!==a.search(h)?function a(b){var j=b.search(h);-1!==j?(i+="\n<"+c+">\n"+e(b.slice(0,j),!!d)+"</"+c+">\n",c="ul"===c?"ol":"ul",h="ul"===c?f:g,a(b.slice(j))):i+="\n<"+c+">\n"+e(b,!!d)+"</"+c+">\n"}(a):i="\n<"+c+">\n"+e(a,!!d)+"</"+c+">\n",i}
return a=c.converter._dispatch("lists.before",a,b,c),a+="¨0",a=c.gListLevel?a.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(a,b,c){return f(b,c.search(/[*+-]/g)>-1?"ul":"ol",!0)}):a.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(a,b,c,d){return f(c,d.search(/[*+-]/g)>-1?"ul":"ol",!1)}),a=a.replace(/¨0/,""),a=c.converter._dispatch("lists.after",a,b,c)}),d.subParser("outdent",function(a,b,c){"use strict";return a=c.converter._dispatch("outdent.before",a,b,c),a=a.replace(/^(\t|[ ]{1,4})/gm,"¨0"),a=a.replace(/¨0/g,""),a=c.converter._dispatch("outdent.after",a,b,c)}),d.subParser("paragraphs",function(a,b,c){"use strict";a=c.converter._dispatch("paragraphs.before",a,b,c),a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,"");for(var e=a.split(/\n{2,}/g),f=[],g=e.length,h=0;h<g;h++){var i=e[h];i.search(/¨(K|G)(\d+)\1/g)>=0?f.push(i):i.search(/\S/)>=0&&(i=d.subParser("spanGamut")(i,b,c),i=i.replace(/^([ \t]*)/g,"<p>"),i+="</p>",f.push(i))}for(g=f.length,h=0;h<g;h++){for(var j="",k=f[h],l=!1;/¨(K|G)(\d+)\1/.test(k);){var m=RegExp.$1,n=RegExp.$2;j="K"===m?c.gHtmlBlocks[n]:l?d.subParser("encodeCode")(c.ghCodeBlocks[n].text,b,c):c.ghCodeBlocks[n].codeblock,j=j.replace(/\$/g,"$$$$"),k=k.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,j),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(k)&&(l=!0)}f[h]=k}return a=f.join("\n"),a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,""),c.converter._dispatch("paragraphs.after",a,b,c)}),d.subParser("runExtension",function(a,b,c,d){"use strict";if(a.filter)b=a.filter(b,d.converter,c);else if(a.regex){var e=a.regex;e instanceof RegExp||(e=new RegExp(e,"g")),b=b.replace(e,a.replace)}return b}),d.subParser("spanGamut",function(a,b,c){"use strict";return a=c.converter._dispatch("spanGamut.before",a,b,c),a=d.subParser("codeSpans")(a,b,c),a=d.subParser("escapeSpecialCharsWithinTagAttributes")(a,b,c),a=d.subParser("encodeBackslashEscapes")(a,b,c),a=d.subParser("images")(a,b,c),a=d.subParser("anchors")(a,b,c),a=d.subParser("autoLinks")(a,b,c),a=d.subParser("italicsAndBold")(a,b,c),a=d.subParser("strikethrough")(a,b,c),a=d.subParser("simplifiedAutoLinks")(a,b,c),a=d.subParser("hashHTMLSpans")(a,b,c),a=d.subParser("encodeAmpsAndAngles")(a,b,c),a=b.simpleLineBreaks?a.replace(/\n/g,"<br />\n"):a.replace(/  +\n/g,"<br />\n"),a=c.converter._dispatch("spanGamut.after",a,b,c)}),d.subParser("strikethrough",function(a,b,c){"use strict";function e(a){return b.simplifiedAutoLink&&(a=d.subParser("simplifiedAutoLinks")(a,b,c)),"<del>"+a+"</del>"}return b.strikethrough&&(a=c.converter._dispatch("strikethrough.before",a,b,c),a=a.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(a,b){return e(b)}),a=c.converter._dispatch("strikethrough.after",a,b,c)),a}),d.subParser("stripLinkDefinitions",function(a,b,c){"use strict";var e=/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm;return a+="¨0",a=a.replace(e,function(a,e,f,g,h,i,j){return e=e.toLowerCase(),c.gUrls[e]=d.subParser("encodeAmpsAndAngles")(f,b,c),i?i+j:(j&&(c.gTitles[e]=j.replace(/"|'/g,"&quot;")),b.parseImgDimensions&&g&&h&&(c.gDimensions[e]={width:g,height:h}),"")}),a=a.replace(/¨0/,"")}),d.subParser("tables",function(a,b,c){"use strict";function e(a){return/^:[ \t]*--*$/.test(a)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(a)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(a)?' style="text-align:center;"':""}function f(a,e){var f="";return a=a.trim(),b.tableHeaderId&&(f=' id="'+a.replace(/ /g,"_").toLowerCase()+'"'),a=d.subParser("spanGamut")(a,b,c),"<th"+f+e+">"+a+"</th>\n"}function g(a,e){return"<td"+e+">"+d.subParser("spanGamut")(a,b,c)+"</td>\n"}function h(a,b){for(var c="<table>\n<thead>\n<tr>\n",d=a.length,e=0;e<d;++e)c+=a[e];for(c+="</tr>\n</thead>\n<tbody>\n",e=0;e<b.length;++e){c+="<tr>\n";for(var f=0;f<d;++f)c+=b[e][f];c+="</tr>\n"}return c+="</tbody>\n</table>\n"}if(!b.tables)return a;var i=/^ {0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|¨0)/gm;return a=c.converter._dispatch("tables.before",a,b,c),a=a.replace(/\\(\|)/g,d.helper.escapeCharactersCallback),a=a.replace(i,function(a){var b,c=a.split("\n");for(b=0;b<c.length;++b)/^ {0,3}\|/.test(c[b])&&(c[b]=c[b].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(c[b])&&(c[b]=c[b].replace(/\|[ \t]*$/,""));var i=c[0].split("|").map(function(a){return a.trim()}),j=c[1].split("|").map(function(a){return a.trim()}),k=[],l=[],m=[],n=[];for(c.shift(),c.shift(),b=0;b<c.length;++b)""!==c[b].trim()&&k.push(c[b].split("|").map(function(a){return a.trim()}));if(i.length<j.length)return a;for(b=0;b<j.length;++b)m.push(e(j[b]));for(b=0;b<i.length;++b)d.helper.isUndefined(m[b])&&(m[b]=""),l.push(f(i[b],m[b]));for(b=0;b<k.length;++b){for(var o=[],p=0;p<l.length;++p)d.helper.isUndefined(k[b][p]),o.push(g(k[b][p],m[p]));n.push(o)}return h(l,n)}),a=c.converter._dispatch("tables.after",a,b,c)}),d.subParser("unescapeSpecialChars",function(a,b,c){"use strict";return a=c.converter._dispatch("unescapeSpecialChars.before",a,b,c),a=a.replace(/¨E(\d+)E/g,function(a,b){var c=parseInt(b);return String.fromCharCode(c)}),a=c.converter._dispatch("unescapeSpecialChars.after",a,b,c)});var r=this;"undefined"!=typeof module&&module.exports?module.exports=d:"function"==typeof define&&define.amd?define(function(){"use strict";return d}):r.showdown=d}).call(this);
//# sourceMappingURL=showdown.min.js.map
