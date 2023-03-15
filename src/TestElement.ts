export class TestElement {
    key: number;
    auxiliary: number;

    constructor(key: number, auxiliary: number) {
        this.key = key;
        this.auxiliary = auxiliary;
    }

    compareTo(other: TestElement): number {
        return this.key - other.key;
    }

    getKey(): number {
        return this.key;
    }
}
