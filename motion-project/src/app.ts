import { Component } from './components/component.js';
import {
	InputDialog,
	MediaData,
	TextData,
} from './components/dialog/dialog.js';
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

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
	new (): T;
};

class App {
	// page는 Component와 Composable 인터페이스를 구현한 요소이다.
	private readonly page: Component & Composable;
	constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
		// For Page
		this.page = new PageComponent(PageItemComponent);
		this.page.attatchTo(appRoot);

		this.bindElementToDialog<MediaSectionInput>(
			'#new-image',
			MediaSectionInput,
			(input: MediaSectionInput) => new ImageComponent(input.title, input.url)
		);

		this.bindElementToDialog<MediaSectionInput>(
			'#new-video',
			MediaSectionInput,
			(input: MediaSectionInput) => new VideoComponent(input.title, input.url)
		);

		this.bindElementToDialog<TextSectionInput>(
			'#new-note',
			TextSectionInput,
			(input: TextSectionInput) => new NoteComponent(input.title, input.body)
		);

		this.bindElementToDialog<TextSectionInput>(
			'#new-todo',
			TextSectionInput,
			(input: TextSectionInput) => new TodoComponent(input.title, input.body)
		);
	}

	// (MediaData | TextData) & Component의 규격을 만족하면 어떤 것이라도 받도록 T를 제한한다.
	// MediaSectionInput과 TextSectionInput 클래스에 커플링 되지 않도록 하기 위함이다.
	private bindElementToDialog<T extends (MediaData | TextData) & Component>(
		selector: string,
		InputComponent: InputComponentConstructor<T>,
		makeSection: (input: T) => Component
	) {
		const element = document.querySelector(selector)! as HTMLButtonElement;
		element.addEventListener('click', () => {
			const dialog = new InputDialog();
			const input = new InputComponent();
			dialog.addChild(input);
			dialog.attatchTo(this.dialogRoot);

			dialog.setOnCloseListener(() => {
				dialog.removeFrom(this.dialogRoot);
			});
			dialog.setOnSubmitListener(() => {
				// 섹션을 만들어서 페이지에 추가해준다.
				const image = makeSection(input);
				this.page.addChild(image);

				// 다이얼로그 창 닫아주기
				dialog.removeFrom(this.dialogRoot);
			});
		});
	}
}

new App(document.querySelector('.document')! as HTMLElement, document.body);
