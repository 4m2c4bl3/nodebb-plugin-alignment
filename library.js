
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

const parsePost = (data, callback) => {
	console.log('parse post');
	console.log(data.postData.content);
	var newContent = data.postData.content;
	newContent = newContent.replace(/\[center\]/gm, '<p class="align-center">');
	newContent = newContent.replace(/\[left\]/gm, '<p class="align-left">');
	newContent = newContent.replace(/\[right\]/gm, '<p class="align-right">');
	newContent = newContent.replace(/\[floatLeft\]/gm, '<p class="float-left">');
	newContent = newContent.replace(/\[floatRight\]/gm, '<p class="float-right">');
	newContent = newContent.replace(/\[\/\w*\]/gm, '</p>');
	const newData = { ...data };
	newData.postData.content = newContent;
	console.log(newContent);
	callback(null, newData);
};
module.exports.parsePost = parsePost;

const parseRaw = (data, callback) => {
	console.log('parse raw');
	console.log(data);
	var newContent = data;
	newContent = newContent.replace(/\[center\]/gm, '<p class="align-center">');
	newContent = newContent.replace(/\[left\]/gm, '<p class="align-left">');
	newContent = newContent.replace(/\[right\]/gm, '<p class="align-right">');
	newContent = newContent.replace(/\[floatLeft\]/gm, '<p class="float-left">');
	newContent = newContent.replace(/\[floatRight\]/gm, '<p class="float-right">');
	newContent = newContent.replace(/\[\/\w*\]/gm, '</p>');
	callback(null, newContent);
};
module.exports.parseRaw = parseRaw;
