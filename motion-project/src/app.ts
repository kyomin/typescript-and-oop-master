import { Component } from './components/component.js';
import { InputDialog } from './components/dialog/dialog.js';
import { MediaSectionInput } from './components/dialog/input/media-input.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import {
	Composable,
	PageComponent,
	PageItemComponent,
} from './components/page/page.js';

class App {
	// page는 Component와 Composable 인터페이스를 구현한 요소이다.
	private readonly page: Component & Composable;
	constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
		// For Page
		this.page = new PageComponent(PageItemComponent);
		this.page.attatchTo(appRoot);

		const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
		imageBtn.addEventListener('click', () => {
			const dialog = new InputDialog();
			const inputSection = new MediaSectionInput();
			dialog.addChild(inputSection);
			dialog.attatchTo(dialogRoot);

			dialog.setOnCloseListener(() => {
				dialog.removeFrom(dialogRoot);
			});
			dialog.setOnSubmitListener(() => {
				// 섹션을 만들어서 페이지에 추가해준다.
				const image = new ImageComponent(inputSection.title, inputSection.url);
				this.page.addChild(image);

				// 다이얼로그 창 닫아주기
				dialog.removeFrom(dialogRoot);
			});
		});

		const videoBtn = document.querySelector('#new-video')! as HTMLButtonElement;
		videoBtn.addEventListener('click', () => {
			const dialog = new InputDialog();
			const inputSection = new MediaSectionInput();
			dialog.addChild(inputSection);
			dialog.attatchTo(dialogRoot);

			dialog.setOnCloseListener(() => {
				dialog.removeFrom(dialogRoot);
			});
			dialog.setOnSubmitListener(() => {
				// 섹션을 만들어서 페이지에 추가해준다.
				const video = new VideoComponent(inputSection.title, inputSection.url);
				this.page.addChild(video);

				// 다이얼로그 창 닫아주기
				dialog.removeFrom(dialogRoot);
			});
		});

		const noteBtn = document.querySelector('#new-note')! as HTMLButtonElement;
		noteBtn.addEventListener('click', () => {
			const dialog = new InputDialog();
			const inputSection = new TextSectionInput();
			dialog.addChild(inputSection);
			dialog.attatchTo(dialogRoot);

			dialog.setOnCloseListener(() => {
				dialog.removeFrom(dialogRoot);
			});
			dialog.setOnSubmitListener(() => {
				// 섹션을 만들어서 페이지에 추가해준다.
				const note = new NoteComponent(inputSection.title, inputSection.body);
				this.page.addChild(note);

				// 다이얼로그 창 닫아주기
				dialog.removeFrom(dialogRoot);
			});
		});

		const todoBtn = document.querySelector('#new-todo')! as HTMLButtonElement;
		todoBtn.addEventListener('click', () => {
			const dialog = new InputDialog();
			const inputSection = new TextSectionInput();
			dialog.addChild(inputSection);
			dialog.attatchTo(dialogRoot);

			dialog.setOnCloseListener(() => {
				dialog.removeFrom(dialogRoot);
			});
			dialog.setOnSubmitListener(() => {
				// 섹션을 만들어서 페이지에 추가해준다.
				const todo = new TodoComponent(inputSection.title, inputSection.body);
				this.page.addChild(todo);

				// 다이얼로그 창 닫아주기
				dialog.removeFrom(dialogRoot);
			});
		});
	}
}

new App(document.querySelector('.document')! as HTMLElement, document.body);
