import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Gallery from './components/Gallery';

// list of images (URLs and captions) used for testing the app
let photos = [
	{url: 'https://picsum.photos/500?image=101', caption: 'Caption: Image 1'},
	{url: 'https://picsum.photos/500?image=210', caption: 'Caption: Image 2'},
	{url: 'https://picsum.photos/500?image=301', caption: 'Caption: Image 3'},
	{url: 'https://picsum.photos/500?image=401', caption: 'Caption: Image 4'},
	{url: 'https://picsum.photos/500?image=510', caption: 'Caption: Image 5'},
	{url: 'https://picsum.photos/500?image=610', caption: 'Caption: Image 6'},
	{url: 'https://picsum.photos/500?image=170', caption: 'Caption: Image 7'},
	{url: 'https://picsum.photos/500?image=180', caption: 'Caption: Image 8'},
	{url: 'https://picsum.photos/500?image=190', caption: 'Caption: Image 9'},
    {url: 'https://picsum.photos/500?image=110', caption: 'Caption: Image 10'},
    {url: 'https://picsum.photos/500?image=121', caption: 'Caption: Image 11'},
	{url: 'https://picsum.photos/500?image=219', caption: 'Caption: Image 12'},
	{url: 'https://picsum.photos/500?image=351', caption: 'Caption: Image 13'},
	{url: 'https://picsum.photos/500?image=481', caption: 'Caption: Image 14'},
	{url: 'https://picsum.photos/500?image=511', caption: 'Caption: Image 15'},
	{url: 'https://picsum.photos/500?image=609', caption: 'Caption: Image 16'},
	{url: 'https://picsum.photos/500?image=50', caption: 'Caption: Image 17'},
	{url: 'https://picsum.photos/500?image=10', caption: 'Caption: Image 18'},
	{url: 'https://picsum.photos/500?image=90', caption: 'Caption: Image 19'},
    {url: 'https://picsum.photos/500?image=70', caption: 'Caption: Image 20'},
    {url: 'https://picsum.photos/500?image=117', caption: 'Caption: Image 21'},
	{url: 'https://picsum.photos/500?image=217', caption: 'Caption: Image 22'},
	{url: 'https://picsum.photos/500?image=317', caption: 'Caption: Image 23'},
	{url: 'https://picsum.photos/500?image=417', caption: 'Caption: Image 24'},
	{url: 'https://picsum.photos/500?image=517', caption: 'Caption: Image 25'},
	{url: 'https://picsum.photos/500?image=617', caption: 'Caption: Image 26'},
	{url: 'https://picsum.photos/500?image=165', caption: 'Caption: Image 27'},
	{url: 'https://picsum.photos/500?image=185', caption: 'Caption: Image 28'},
	{url: 'https://picsum.photos/500?image=195', caption: 'Caption: Image 29'},
	{url: 'https://picsum.photos/500?image=116', caption: 'Caption: Image 30'},
];

ReactDOM.render(<Gallery photos = {photos} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
