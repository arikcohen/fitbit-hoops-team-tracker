import document from 'document';
import { next } from 'fitbit-views';

export default () => {
    let nextButton = document.getElementById('team-pick-button');

	nextButton.onactivate = () => {
		// Goes to view-1 passing a 0 as a parameter
		next('team-pick', 0);
    };
}