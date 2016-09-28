namespace Futile {
    export class Funky {
        foo: number;

        constructor(foo: number) {
            this.foo = foo;

            return;
        }

        log() {
            console.log("this foo" + this.foo);
        }
    }
}

