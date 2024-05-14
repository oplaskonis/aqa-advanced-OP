const log = console.log;

function divide (numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number' || denominator === 0 ) {
        throw new Error ('Ділене та дільник мають бути числами. Ділити на нуль заборонено ')
    }
    return numerator/denominator
}

try {
    log (divide (10,5));
    log (divide (15,5));
    log (divide (20,0));    
} catch (error) {
    console.error (error.message);
} finally {
    log ('Робота завершена')
}
