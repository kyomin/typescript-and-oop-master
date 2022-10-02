{
	type Video = {
		id: string;
		title: string;
		url: string;
		data: string;
	};
	// Omit을 이용해 원하는 속성을 제외해서 제한적인 타입을 만든다.
	type VideoMetaData = Omit<Video, 'url' | 'data'>;

	function getVideo(id: string): Video {
		return {
			id,
			title: 'video',
			url: 'https://...',
			data: 'byte-data...',
		};
	}
	function getVideoMetaData(id: string): VideoMetaData {
		return {
			id: id,
			title: 'title',
		};
	}
}
