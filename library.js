
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
	newContent = newContent.replace(/(?:(?<!<code>)|(?<=<\/code>))\[(center|left|right)\]/gm, (match, p1) => `<section class="align-${p1}">`);
	newContent = newContent.replace(/(?:(?<!<code>)|(?<=<\/code>))\[floatLeft\]/gm, '<section class="float-left">');
	newContent = newContent.replace(/(?:(?<!<code>)|(?<=<\/code>))\[floatRight\]/gm, '<section class="float-right">');
	newContent = newContent.replace(/(?:(?<!<code>)|(?<=<\/code>))\[\/(?:center|left|right|floatLeft|floatRight)\]/gm, '</section>'); 
	return newContent;
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
