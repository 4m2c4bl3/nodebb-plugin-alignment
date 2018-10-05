'use strict';

/* global document, window, $, require,  */

$(document).ready(function () {
	var Align = {};

	$(window).on('action:composer.enhanced', function (evt, data) {
		Align.prepareFormattingTools();
	});

	Align.prepareFormattingTools = function () {
		require([
			'composer/formatting',
			'composer/controls',
		], function (formatting, controls) {
			if (formatting && controls) {
				formatting.addButtonDispatch('align-left', function (textarea, selectionStart, selectionEnd) {
					if (selectionStart === selectionEnd) {
						var block = controls.getBlockData(textarea, '[/left]', selectionStart);

						if (block.in && block.atEnd) {
							controls.updateTextareaSelection(textarea, selectionStart + 6, selectionStart + 6);
						} else {
							controls.insertIntoTextarea(textarea, '[left][/left]');
							controls.updateTextareaSelection(textarea, selectionStart + 6, selectionStart + 6);
						}
					} else {
						var wrapDelta = controls.wrapSelectionInTextareaWith(textarea, '[left]', '[/left]');
						controls.updateTextareaSelection(textarea, selectionStart + 6 + wrapDelta[0], selectionEnd + 6 - wrapDelta[1]);
					}
				});
				formatting.addButtonDispatch('align-right', function (textarea, selectionStart, selectionEnd) {
					if (selectionStart === selectionEnd) {
						var block = controls.getBlockData(textarea, '[/right]', selectionStart);

						if (block.in && block.atEnd) {
							controls.updateTextareaSelection(textarea, selectionStart + 7, selectionStart + 7);
						} else {
							controls.insertIntoTextarea(textarea, '[right][/right]');
							controls.updateTextareaSelection(textarea, selectionStart + 7, selectionStart + 7);
						}
					} else {
						var wrapDelta = controls.wrapSelectionInTextareaWith(textarea, '[right]', '[/right]');
						controls.updateTextareaSelection(textarea, selectionStart + 7 + wrapDelta[0], selectionEnd + 7 - wrapDelta[1]);
					}
				});
				formatting.addButtonDispatch('align-center', function (textarea, selectionStart, selectionEnd) {
					if (selectionStart === selectionEnd) {
						var block = controls.getBlockData(textarea, '[/center]', selectionStart);

						if (block.in && block.atEnd) {
							controls.updateTextareaSelection(textarea, selectionStart + 8, selectionStart + 8);
						} else {
							controls.insertIntoTextarea(textarea, '[center][/center]');
							controls.updateTextareaSelection(textarea, selectionStart + 8, selectionStart + 8);
						}
					} else {
						var wrapDelta = controls.wrapSelectionInTextareaWith(textarea, '[center]', '[/center]');
						controls.updateTextareaSelection(textarea, selectionStart + 8 + wrapDelta[0], selectionEnd + 8 - wrapDelta[1]);
					}
				});
				formatting.addButtonDispatch('float-left', function (textarea, selectionStart, selectionEnd) {
					if (selectionStart === selectionEnd) {
						var block = controls.getBlockData(textarea, '[/floatLeft]', selectionStart);

						if (block.in && block.atEnd) {
							controls.updateTextareaSelection(textarea, selectionStart + 11, selectionStart + 11);
						} else {
							controls.insertIntoTextarea(textarea, '[floatLeft][/floatLeft]');
							controls.updateTextareaSelection(textarea, selectionStart + 11, selectionStart + 11);
						}
					} else {
						var wrapDelta = controls.wrapSelectionInTextareaWith(textarea, '[floatLeft]', '[/floatLeft]');
						controls.updateTextareaSelection(textarea, selectionStart + 11 + wrapDelta[0], selectionEnd + 11 - wrapDelta[1]);
					}
				});
				formatting.addButtonDispatch('float-right', function (textarea, selectionStart, selectionEnd) {
					if (selectionStart === selectionEnd) {
						var block = controls.getBlockData(textarea, '[/floatRight]', selectionStart);

						if (block.in && block.atEnd) {
							controls.updateTextareaSelection(textarea, selectionStart + 12, selectionStart + 12);
						} else {
							controls.insertIntoTextarea(textarea, '[floatRight][/floatRight]');
							controls.updateTextareaSelection(textarea, selectionStart + 12, selectionStart + 12);
						}
					} else {
						var wrapDelta = controls.wrapSelectionInTextareaWith(textarea, '[floatRight]', '[/floatRight]');
						controls.updateTextareaSelection(textarea, selectionStart + 12 + wrapDelta[0], selectionEnd + 12 - wrapDelta[1]);
					}
				});
			}
		});
	};
});

