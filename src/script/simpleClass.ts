export class SimpleClass {
    constructor(private baseValue: number) {
    }

    public add(value: number): number {
        return this.baseValue + value;
    }
}