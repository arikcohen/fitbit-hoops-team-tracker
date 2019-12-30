import document from 'document';
import { next } from 'fitbit-views';

export default () => {

    let nextButton = document.getElementById('next-button');

	nextButton.onactivate = () => {
		// Goes to view-1 passing a 0 as a parameter
		next('view-scoring', 0);
    };
    
    nextButton.onmousedown = () => {
        //nextButton.style.fill = "green";	
        console.log("button down");
    };

    nextButton.onmouseup = () => {
        //nextButton.style.fill = "green";	
        console.log("button up");
    };
};