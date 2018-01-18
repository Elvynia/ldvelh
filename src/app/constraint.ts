export interface Constraint {
	data?: any;
	execute(data?: any): void;
}
