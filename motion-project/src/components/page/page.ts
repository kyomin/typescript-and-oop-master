import { BaseComponent, Component } from '../component.js';

export interface Composable {
	addChild(child: Component): void;
}

class PageItemComponent
	extends BaseComponent<HTMLElement>
	implements Composable
{
	constructor() {
		super(`
			<li class="page-item">
				<section class="page-item__body"></section>
				<div class="page-item__controls">
					<button class="close">&times;</button>
				</div>
			</li>
		`);
	}

	// 정확히 어떤 컴포넌트인지는 모르지만, child는 Component 인터페이스를 구현하는 것을 받는다.
	addChild(child: Component) {
		const container = this.element.querySelector(
			'.page-item__body'
		)! as HTMLElement;
		child.attatchTo(container);
	}
}

export class PageComponent
	extends BaseComponent<HTMLUListElement>
	implements Composable
{
	constructor() {
		super('<ul class="page"></ul>');
	}

	addChild(section: Component) {
		const item = new PageItemComponent();
		item.addChild(section);
		item.attatchTo(this.element, 'beforeend');
	}
}
