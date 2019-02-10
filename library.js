
'use strict';

const composerFormatting = (data, callback) => {
	data.options.push({
		name: 'align-left',
		className: 'fa fa-align-left',
		title: 'Align right',
	});
	data.options.push({
		name: 'align-center',
		className: 'fa fa-align-center',
		title: 'Align center',
	});
	data.options.push({
		name: 'align-right',
		className: 'fa fa-align-right',
		title: 'Align right',
	});
	data.options.push({
		name: 'float-left',
		className: 'align-img left',
		title: 'Float left',
	});
	data.options.push({
		name: 'float-right',
		className: 'align-img right',
		title: 'Float right',
	});
	callback(null, data);
};
module.exports.composerFormatting = composerFormatting;

const replaceAlignmentContent = (content) => {
	var newContent = content;
	if (newContent.includes('<code')) {
		const separatedByCodeBlocks = newContent.replace(/<code/gi, "splitme<code").replace(/<\/code>/gi, "<\/code>splitme").split("splitme");
		const formattedBlocks = separatedByCodeBlocks.map(text => text.includes('<code') ? text : formatFloat(text));
		newContent = formattedBlocks.join('');
	}else{
		newContent = formatFloat(newContent);
	}	
	return newContent;
}

const formatFloat = (text) => {
	var formatted = text;
	formatted = formatted.replace(/\[(center|left|right)\]/gm, (match, p1) => `<section class="align-${p1}">`);
	formatted = formatted.replace(/\[floatLeft\]/gm, '<section class="float-left">');
	formatted = formatted.replace(/\[floatRight\]/gm, '<section class="float-right">');
	formatted = formatted.replace(/\[\/(?:center|left|right|floatLeft|floatRight)\]/gm, '</section>'); 
	return formatted;
}

const parsePost = (data, callback) => {
	var newContent = replaceAlignmentContent(data.postData.content);
	const newData = { ...data };
	newData.postData.content = newContent;
	callback(null, newData);
};
module.exports.parsePost = parsePost;

const parseRaw = (data, callback) => {
	var newContent = replaceAlignmentContent(data);
	callback(null, newContent);
};
module.exports.parseRaw = parseRaw;
