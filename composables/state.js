
const { data } = await useAsyncData('stories', () => queryContent('_lood').only(['description','_path']).find());
export const storiesData = () => useState('storiesData', () => data);
export const tocOpen = () => useState('tocOpen', () => true);