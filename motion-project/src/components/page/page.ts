import { BaseComponent, Component } from '../component.js';

export interface Composable {
	addChild(child: Component): void;
}

type OnCloseListener = () => void;

interface SectionContainer extends Component, Composable {
	setOnCloseListener(listener: OnCloseListener): void;
}

type SectionContainerConstructor = {
	// 생성자를 정의하는 타입
	// SectionContainer 인터페이스 규격을 따르는 어떤 컨테이너라도 허용한다.
	new (): SectionContainer;
};

export class PageItemComponent
	extends BaseComponent<HTMLElement>
	implements SectionContainer
{
	private closeListener?: OnCloseListener;
	constructor() {
		super(`
			<li class="page-item">
				<section class="page-item__body"></section>
				<div class="page-item__controls">
					<button class="close">&times;</button>
				</div>
			</li>
		`);

		const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
		closeBtn.onclick = () => {
			this.closeListener && this.closeListener();
		};
	}

	// 정확히 어떤 컴포넌트인지는 모르지만, child는 Component 인터페이스를 구현하는 것을 받는다.
	addChild(child: Component) {
		const container = this.element.querySelector(
			'.page-item__body'
		)! as HTMLElement;
		child.attatchTo(container);
	}
	setOnCloseListener(listener: OnCloseListener) {
		this.closeListener = listener;
	}
}

export class PageComponent
	extends BaseComponent<HTMLUListElement>
	implements Composable
{
	constructor(private pageItemConstructor: SectionContainerConstructor) {
		super('<ul class="page"></ul>');
	}

	addChild(section: Component) {
		// 이제 SectionContainerConstructor 타입을 따르는 확장된 컨테이너를 받을 수 있게 된다.
		// 기존에는 하나의 컨테이너만 고정적으로 받았던 것을 개선하였다.
		const item = new this.pageItemConstructor();
		item.addChild(section);
		item.attatchTo(this.element, 'beforeend');
		item.setOnCloseListener(() => {
			item.removeFrom(this.element);
		});
	}
}
