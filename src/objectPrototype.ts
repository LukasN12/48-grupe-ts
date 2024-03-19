const o = {
    a: 1,
    b: 2,
    _proto_: {
        b: 3,
        c: 4,    
        _proto_: {
            c: 5,
            d: 6,
        },
    },
};

console.log(o.a); 
console.log(o.b); 
console.log(o.c);
console.log(o.d); 
console.log(o._proto_.b);
console.log(o._proto_.c);
console.log(o._proto_._proto_.c);
console.log(o._proto_._proto_.d);

console.log('----------->');

const parent = {
    value: 2,

    // Dvi funkcijos, kurios pasieke tėvinio objekto 
    // value reikšmę.
    method1() {
                // Čia 'this' kreipiasi į tėvinį objektą
        return this.value + 1;
    },

    // Šita funkcija visada 'value' ištraukinėja iš būtent 'parent' objekto
    method2() {
        return parent.value + 1;
    },

// Objekte esanti Funkcija kuri panaudoja kita objekte 
// esančią funkciją
// Funkception
// Taip pat visada kreipiasi į 'parent' objektą funkcijai pasiimti
    method3() {
        return parent.method1() + 2;
    },
};

console.log(parent.method1());
console.log(parent.method2());
console.log(parent.method3());

// Vaikas paveldi tėvo objektą
const child = {
    _proto_: parent,
};

console.log(child);
console.log(parent.value);
console.log(child._proto_.value);

console.log('--------->');

// Čia esantis 'method1()' turi savo vidui 'this.value'
// o kadangi 'this' kreipiasi į tėvinį objektą, tai 'this.value'
// atitinka 'child._proto_.value', kas taip pat atitinka 'parent.value'
console.log(child._proto_.method1());

child.value = 4;

console.log(child);

console.log('----------->');

console.log(child._proto_.method1());
// console.log(child.method1());

console.log(child.value);
