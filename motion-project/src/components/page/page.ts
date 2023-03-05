import { BaseComponent, Component } from '../component.js';

export interface Composable {
	addChild(child: Component): void;
}

type OnCloseListener = () => void;
type DragState = 'start' | 'stop' | 'enter' | 'leave';
type OnDragStateListener<T extends Component> = (
	target: T,
	state: DragState
) => void;

interface SectionContainer extends Component, Composable {
	setOnCloseListener(listener: OnCloseListener): void;
	setOnDragStateListener(listener: OnDragStateListener<SectionContainer>): void;
	muteChildren(state: 'mute' | 'unmute'): void;
	getBoundingRect(): DOMRect;
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
	private dragStateListener?: OnDragStateListener<PageItemComponent>;

	constructor() {
		super(`
			<li draggable="true" class="page-item">
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

		// 이벤트 등록
		this.element.addEventListener('dragstart', (event: DragEvent) => {
			this.onDragStart(event);
		});
		this.element.addEventListener('dragend', (event: DragEvent) => {
			this.onDragEnd(event);
		});
		this.element.addEventListener('dragenter', (event: DragEvent) => {
			this.onDragEnter(event);
		});
		this.element.addEventListener('dragleave', (event: DragEvent) => {
			this.onDragLeave(event);
		});
	}

	onDragStart(_: DragEvent) {
		this.notifyDragObservers('start');
	}

	onDragEnd(_: DragEvent) {
		this.notifyDragObservers('stop');
	}

	onDragEnter(_: DragEvent) {
		this.notifyDragObservers('enter');
	}

	onDragLeave(_: DragEvent) {
		this.notifyDragObservers('leave');
	}

	notifyDragObservers(state: DragState) {
		this.dragStateListener && this.dragStateListener(this, state);
	}

	// 정확히 어떤 컴포넌트인지는 모르지만, child는 Component 인터페이스를 구현하는 것을 받는다.
	addChild(child: Component) {
		const container = this.element.querySelector(
			'.page-item__body'
		)! as HTMLElement;
		child.attachTo(container);
	}

	setOnCloseListener(listener: OnCloseListener) {
		this.closeListener = listener;
	}

	setOnDragStateListener(listener: OnDragStateListener<PageItemComponent>) {
		this.dragStateListener = listener;
	}

	muteChildren(state: 'mute' | 'unmute') {
		if (state === 'mute') {
			this.element.classList.add('mute-children');
		} else {
			this.element.classList.remove('mute-children');
		}
	}

	getBoundingRect(): DOMRect {
		return this.element.getBoundingClientRect();
	}
}

export class PageComponent
	extends BaseComponent<HTMLUListElement>
	implements Composable
{
	private children = new Set<SectionContainer>();
	private dropTarget?: SectionContainer;
	private dragTarget?: SectionContainer;

	constructor(private pageItemConstructor: SectionContainerConstructor) {
		super('<ul class="page"></ul>');

		// 이벤트 등록
		this.element.addEventListener('dragover', (event: DragEvent) => {
			this.onDragOver(event);
		});
		this.element.addEventListener('drop', (event: DragEvent) => {
			this.onDrop(event);
		});
	}

	onDragOver(event: DragEvent) {
		event.preventDefault();
	}

	onDrop(event: DragEvent) {
		event.preventDefault();

		// 여기에서 위치를 바꿔준다.
		if (!this.dropTarget) {
			return;
		}
		if (this.dragTarget && this.dragTarget !== this.dropTarget) {
			const dropY = event.clientY;
			const srcElement = this.dragTarget.getBoundingRect();

			this.dragTarget.removeFrom(this.element);
			this.dropTarget.attach(
				this.dragTarget,
				dropY < srcElement.y ? 'beforebegin' : 'afterend'
			);
		}
	}

	addChild(section: Component) {
		// 이제 SectionContainerConstructor 타입을 따르는 확장된 컨테이너를 받을 수 있게 된다.
		// 기존에는 하나의 컨테이너만 고정적으로 받았던 것을 개선하였다.
		const item = new this.pageItemConstructor();
		item.addChild(section);
		item.attachTo(this.element, 'beforeend');
		item.setOnCloseListener(() => {
			item.removeFrom(this.element);
			this.children.delete(item);
		});
		this.children.add(item);
		item.setOnDragStateListener(
			(target: SectionContainer, state: DragState) => {
				switch (state) {
					case 'start':
						this.dragTarget = target;
						this.updateSections('mute');
						break;
					case 'stop':
						this.dragTarget = undefined;
						this.updateSections('unmute');
						break;
					case 'enter':
						this.dropTarget = target;
						break;
					case 'leave':
						this.dropTarget = undefined;
						break;
					default:
						throw new Error(`unsupported state: ${state}`);
				}
			}
		);
	}

	private updateSections(state: 'mute' | 'unmute') {
		this.children.forEach((section: SectionContainer) => {
			section.muteChildren(state);
		});
	}
}
