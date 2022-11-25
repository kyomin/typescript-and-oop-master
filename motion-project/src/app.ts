import { Component } from './components/component.js';
import { InputDialog } from './components/dialog/dialog.js';
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
	constructor(appRoot: HTMLElement) {
		// For Page
		this.page = new PageComponent(PageItemComponent);
		this.page.attatchTo(appRoot);

		// For Image
		const image = new ImageComponent(
			'Image Title',
			'https://picsum.photos/600/300'
		);
		this.page.addChild(image);

		// For Video
		const video = new VideoComponent(
			'Video Title',
			'https://youtu.be/EQn2hDlF1T8'
		);
		this.page.addChild(video);

		// For Note
		const note = new NoteComponent('Note Title', 'Note Body');
		this.page.addChild(note);

		// For Todo
		const todo = new TodoComponent('Todo Title', 'Todo Item');
		this.page.addChild(todo);

		const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
		imageBtn.addEventListener('click', () => {
			const dialog = new InputDialog();

			dialog.setOnCloseListener(() => {
				dialog.removeFrom(document.body);
			});
			dialog.setOnSubmitListener(() => {
				// 섹션을 만들어서 페이지에 추가해준다.
			});

			dialog.attatchTo(document.body);
		});
	}
}

new App(document.querySelector('.document')! as HTMLElement);
