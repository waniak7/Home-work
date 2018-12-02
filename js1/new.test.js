'use strict';

test('test_string', () => {
    expect('banana'.length).toEqual(6);
    expect('hello geek hub'.indexOf('geek')).toEqual(6);
    expect('hello geek hub'.indexOf('bla')).toEqual(-1);
    expect('hello geek geek hub'.indexOf('geek', 9)).toEqual(11);
    expect('hello geek geek hub'.lastIndexOf('ek')).toEqual(13);
    expect('hello geek hub'.search('geek')).toEqual(6);
    expect('cat dog monkey'.slice(0, 3)).toEqual('cat');
    expect('cat dog monkey'.slice(-10, -7)).toEqual('dog');
    expect('cat dog monkey'.slice(4)).toEqual('dog monkey');
    expect('cat dog monkey'.slice(-10)).toEqual('dog monkey');
    expect('cat dog monkey'.substring(0, 3)).toEqual('cat');
    expect('cat dog monkey'.substr(0, 6)).toEqual('cat do');
    expect('cat dog monkey'.substr(-6)).toEqual('monkey');
    expect('cat dog monkey'.replace('monkey', 'cow')).toEqual('cat dog cow');
    expect('cat monkey dog monkey'.replace('monkey', 'cow')).toEqual('cat cow dog monkey');
    expect('cat dog Monkey'.replace('monkey', 'cow')).toEqual('cat dog Monkey');
    expect('cat dog Monkey'.replace(/monkey/i, 'cow')).toEqual('cat dog cow');
    expect('cat monkey dog monkey'.replace(/monkey/g, 'cow')).toEqual('cat cow dog cow');
    expect('cat'.toUpperCase()).toEqual('CAT');
    expect('Cat'.toLowerCase()).toEqual('cat');
    expect('hello'.concat(' ', 'geekhub')).toEqual('hello geekhub');
    expect('     hello    '.trim()).toEqual('hello');
    expect('monkey'.charAt(3)).toEqual('k');
    expect('a, b, c, d'.split()).toEqual(['a, b, c, d']);
    expect('cat dog monkey'.startsWith('dog')).toEqual(false);
    expect('cat dog monkey'.startsWith('dog', 4)).toEqual(true);
    expect('cat dog monkey'.endsWith('monkey')).toEqual(true);
    expect('cat dog monkey'.endsWith('dog', 7)).toEqual(true);
    expect('cat dog monkey'.includes('dog')).toEqual(true);
    expect('cat dog monkey'.repeat(2)).toEqual('cat dog monkeycat dog monkey');
});

test('test_numbers', () => {
    expect((7).toString()).toEqual('7');
    expect((7+7).toString()).toEqual('14');
    expect(10.12345.toFixed(2)).toEqual('10.12');
    expect(10.12345.toPrecision(5)).toEqual('10.123');
    expect((7+7).valueOf()).toEqual(14);
    expect(Number(true)).toEqual(1);
    expect(Number('Hello')).toEqual(NaN);
    expect(parseInt('10 cats')).toEqual(10);
    expect(parseInt('Hello 10 cats')).toEqual(NaN);
    expect(parseFloat('10.555 cats')).toEqual(10.555);
    // expect(Number.MAX_VALUE).toEqual(1111);
    // expect(Number.MIN_VALUE).toEqual(0);
    expect(Number.POSITIVE_INFINITY).toEqual(Infinity);
    expect(Number.NEGATIVE_INFINITY).toEqual(-Infinity);
    expect(isNaN('Hello')).toEqual(true);
    expect(isNaN(parseInt('Hello 10 cats'))).toEqual(true);
    expect(7 * 'cat').toEqual(NaN);
    expect(Number.isFinite(7)).toEqual(true);
    expect(Number.isFinite(NaN)).toEqual(false);
    expect(Number.isFinite('cat')).toEqual(false);
    expect(Number.isInteger(7.7)).toEqual(false);
});

test('test_arrays', () => {
    expect(['cat', 'dog', 'monkey'].toString()).toEqual('cat,dog,monkey');
    expect(['cat', 'dog', 'monkey'].join(', ')).toEqual('cat, dog, monkey');
    expect(['cat', 'dog', 'monkey'].length).toEqual(3);

    let animals = ['cat', 'dog', 'monkey', 'lion'];

    expect(animals.pop()).toEqual('lion');
    expect(animals).toEqual(['cat', 'dog', 'monkey']);

    expect(animals.shift()).toEqual('cat');
    expect(animals).toEqual(['dog', 'monkey']);

    expect(animals.indexOf('dog')).toEqual(0);
    expect(animals.reverse()).toEqual(['monkey', 'dog']);
    expect(animals.fill('bear', 0, 2)).toEqual(['bear', 'bear']);

    let fruits = ['apple', 'banana', 'mango'];

    fruits.push('pineapple');
    expect(fruits).toEqual(['apple', 'banana', 'mango', 'pineapple']);

    fruits.unshift('plum');
    expect(fruits).toEqual(['plum', 'apple', 'banana', 'mango', 'pineapple']);

    fruits[0] = 'orange';
    expect(fruits).toEqual(['orange', 'apple', 'banana', 'mango', 'pineapple']);

    delete fruits[3];
    expect(fruits).toEqual(['orange', 'apple', 'banana', undefined, 'pineapple']);

    fruits.splice(3, 1, 'kiwi', 'avocado', 'cherry');
    expect(fruits).toEqual(['orange', 'apple', 'banana', 'kiwi', 'avocado', 'cherry', 'pineapple']);

    expect(fruits.splice(3, 2)).toEqual(['kiwi', 'avocado']);
    expect(fruits).toEqual(['orange', 'apple', 'banana', 'cherry', 'pineapple']);

    expect(fruits.slice(1)).toEqual(['apple', 'banana','cherry', 'pineapple']);
    expect(fruits).toEqual(['orange', 'apple', 'banana','cherry', 'pineapple']);

    expect(fruits.slice(0, 3)).toEqual(['orange', 'apple', 'banana']);
    expect(fruits).toEqual(['orange', 'apple', 'banana','cherry', 'pineapple']);

    let arr1 = ['Real', 'Liverpool'];
    let arr2 = ['Barcelona', 'Sevilla'];
    expect(arr1.concat(arr2)).toEqual(['Real', 'Liverpool', 'Barcelona', 'Sevilla']);
    expect(arr1.concat(['Barcelona', 'Sevilla'])).toEqual(['Real', 'Liverpool', 'Barcelona', 'Sevilla']);

    let arr3 = ['Bayern', 'Atletico']
    expect(arr1.concat(arr2, arr3)).toEqual(['Real', 'Liverpool', 'Barcelona', 'Sevilla', 'Bayern', 'Atletico']);

    let arr4 = [10, -5, 1, -4, 0, 11, -12, -7];

    let arr5 = arr4.map(function (el) {
        return el * 2;
    });

    expect(arr5).toEqual([20, -10, 2, -8, 0, 22, -24, -14]);

    let arr6 = arr4.filter(function (el) {
        return el > 0;
    });

    expect(arr6).toEqual([10, 1, 11]);

    function isNegative(el) {
        return el < 0;
    }

    expect(arr4.every(isNegative)).toEqual(false);
    expect(arr4.some(isNegative)).toEqual(true);
});

test('test_compare_operators', () => {
    expect(7 > 1).toEqual(true);
    expect(7 + 7 * 7).toEqual(56);
    expect(7 != 7).toEqual(false);
    expect(7 > true).toEqual(true);
    expect(false < true).toEqual(true);

});

test('test_equality_comparison_algorithm', () => {
    expect(true + false).toEqual(1);
    expect(true == 1).toEqual(true);
    expect(null >= 0).toEqual(true);
    expect(null > 0).toEqual(false);
    expect(10/"5").toEqual(2);
    expect(null == '').toEqual(false);

    let x = 7;
    expect(x == "7").toEqual(true);
    expect(x !== "7").toEqual(true);

});