import { AfterConstraint } from './after-constraint';

export abstract class Constraint {
	data?: any;
	abstract execute(data?: any): void;

	constructor(data: any) {
		this.data = data;
	}

	public isAfter(): this is AfterConstraint {
		return 'executeAfter' in this;
	}
}
