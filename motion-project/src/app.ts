import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent } from './components/page/page.js';

class App {
	private readonly page: PageComponent;
	constructor(appRoot: HTMLElement) {
		// For Page
		this.page = new PageComponent();
		this.page.attatchTo(appRoot);

		// For Image
		const image = new ImageComponent(
			'Image Title',
			'https://picsum.photos/600/300'
		);
		image.attatchTo(appRoot, 'beforeend');

		// For Video
		const video = new VideoComponent(
			'Video Title',
			'https://youtu.be/EQn2hDlF1T8'
		);
		video.attatchTo(appRoot, 'beforeend');

		// For Note
		const note = new NoteComponent('Note Title', 'Note Body');
		note.attatchTo(appRoot, 'beforeend');

		// For Todo
		const todo = new TodoComponent('Todo Title', 'Todo Item');
		todo.attatchTo(appRoot, 'beforeend');
	}
}

new App(document.querySelector('.document')! as HTMLElement);
