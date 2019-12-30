import document from 'document';
import { next } from 'fitbit-views';

export default () => {
    let teamPickButton = document.getElementById('team-pick-button');

	teamPickButton.onactivate = () => {
		// Goes to view-1 passing a 0 as a parameter
		next('view-team-pick', 0);
    };
}