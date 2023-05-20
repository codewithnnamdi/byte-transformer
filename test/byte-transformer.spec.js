var { expect } = chai;
// Test the ByteTransformer class
describe('ByteTransformer', function () {
    // Create a sample ArrayBuffer for testing
    const sampleData = new Uint8Array([72, 101, 108, 108, 111]).buffer;

    // Create a ByteTransformer instance for each test
    let byteTransformer;

    // Run this function before each test
    beforeEach(function () {
        byteTransformer = new ByteTransformer(sampleData);
    });

    // Test the 'raw' method
    describe('#raw()', function () {
        it('should return the raw representation of the byte', function () {
            const result = byteTransformer.raw();
            expect(result).to.equal('Hello');
        });
    });

    // Test the 'hex' method
    describe('#hex()', function () {
        it('should return the hexadecimal representation of the byte', function () {
            const result = byteTransformer.hex();
            expect(result).to.equal('48656c6c6f');
        });
    });

    // Test the 'octal' method
    describe('#octal()', function () {
        it('should return the octal representation of the byte', function () {
            const result = byteTransformer.octal();
            expect(result).to.equal('110 145 154 154 157');
        });
    });

    // Test the 'decimal' method
    describe('#decimal()', function () {
        it('should return the decimal representation of the byte', function () {
            const result = byteTransformer.decimal();
            expect(result).to.equal('72 101 108 108 111');
        });
    });

    // Test the 'toBigEndian' method
    describe('#toBigEndian()', function () {
        it('should convert the byte representation to big endian', function () {
            const result = byteTransformer.toBigEndian();
            expect(result.raw()).to.equal('olleH');
        });
    });

    // Test the 'toLittleEndian' method
    describe('#toLittleEndian()', function () {
        it('should convert the byte representation to little endian', function () {
            const result = byteTransformer.toLittleEndian();
            expect(result.raw()).to.equal('olleH');
        });
    });

});