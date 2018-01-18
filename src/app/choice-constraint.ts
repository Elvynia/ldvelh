import { Constraint } from './constraint';
import { AfterConstraint } from './after-constraint';
import { Choice } from './choice';

export class ChoiceConstraint extends Constraint implements AfterConstraint {

	public execute(choice: Choice) {
		choice.disabled = true;
	}

	public executeAfter(choice: Choice) {
		choice.disabled = false;
	}
}
