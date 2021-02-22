import {CPXUser} from './cpx-user.ts';
import {assertEquals} from 'https://deno.land/std@0.87.0/testing/asserts.ts'
Deno.test('Data Test', () => {
    let user = new CPXUser();
    assertEquals(user.name, '');
});